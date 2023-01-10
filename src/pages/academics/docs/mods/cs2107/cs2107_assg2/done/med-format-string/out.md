```sh
Breakpoint 1, get_title () at fst2.c:67
67          fprintf(fp, result, prefix);
(gdb) break fprintf
Breakpoint 3 at 0x7ffff7e2cc00: file fprintf.c, line 27.
(gdb) print perm
$1 = (int *) 0x55555555804c <permission>
(gdb) print &perm
$2 = (int **) 0x7fffffffe8e8
(gdb) info frame
Stack level 0, frame at 0x7fffffffe970:
 rip = 0x55555555547e in get_title (fst2.c:67); saved rip = 0x555555555510
 called by frame at 0x7fffffffe990
 source language c.
 Arglist at 0x7fffffffe8d8, args:
 Locals at 0x7fffffffe8d8, Previous frame's sp is 0x7fffffffe970
 Saved registers:
  rbp at 0x7fffffffe960, rip at 0x7fffffffe968
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x4c257325      0x00702547
0x7fffffffe908: 0x203e2d2d      0x00000000      0x4c257325      0x25702547
0x7fffffffe918: 0x25702570      0x0a702570      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000
```

```sh
Breakpoint 3, __fprintf (stream=0x5555555592a0, format=0x7fffffffe910 "%s%LG%p%p%p%p%p\n") at fprintf.c:27
27      fprintf.c: No such file or directory.
(gdb) info frame
Stack level 0, frame at 0x7fffffffe8e0:
 rip = 0x7ffff7e2cc00 in __fprintf (fprintf.c:27); saved rip = 0x55555555549a
 called by frame at 0x7fffffffe970
 source language c.
 Arglist at 0x7fffffffe8d0, args: stream=0x5555555592a0, format=0x7fffffffe910 "%s%LG%p%p%p%p%p\n"
 Locals at 0x7fffffffe8d0, Previous frame's sp is 0x7fffffffe8e0
 Saved registers:
  rip at 0x7fffffffe8d8
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x4c257325      0x00702547
0x7fffffffe908: 0x203e2d2d      0x00000000      0x4c257325      0x25702547
0x7fffffffe918: 0x25702570      0x0a702570      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000
(gdb) x/24x $sp
0x7fffffffe8d8: 0x5555549a      0x00005555      0x00000d68      0x00000000
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x4c257325      0x00702547
0x7fffffffe908: 0x203e2d2d      0x00000000      0x4c257325      0x25702547
0x7fffffffe918: 0x25702570      0x0a702570      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
```

```sh
Breakpoint 2, get_title () at fst2.c:68
68          fclose(fp);
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x4c257325      0x00702547
0x7fffffffe908: 0x203e2d2d      0x00000000      0x4c257325      0x25702547
0x7fffffffe918: 0x25702570      0x0a702570      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000
(gdb) x/24x $sp
0x7fffffffe8e0: 0x00000d68      0x00000000      0x5555804c      0x00005555
0x7fffffffe8f0: 0x555592a0      0x00005555      0x55559480      0x00005555
0x7fffffffe900: 0x4c257325      0x00702547      0x203e2d2d      0x00000000
0x7fffffffe910: 0x4c257325      0x25702547      0x25702570      0x0a702570
0x7fffffffe920: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe930: 0x00000000      0x00000000      0x00000000      0x00000000
(gdb) print perm
$3 = (int *) 0x55555555804c <permission>
(gdb) print *perm
$4 = 0
```


```
(gdb) print fp
$5 = (FILE *) 0x5555555592a0
(gdb) print &fp
$6 = (FILE **) 0x7fffffffe8f0
(gdb) print perm
$3 = (int *) 0x55555555804c <permission>
(gdb) print &perm
$7 = (int **) 0x7fffffffe8e8
```

```
--> -NAN0x7fffffffe910(nil)0xa7025702570250x5555555592a00x555555559480

%s: -->
%LG: -NAN
%p: 7fffffffe910
%p: nil
%p: 0xa702570257025 (\np%p%p%)
%p: 0x5555555592a
%p: 0x555555559480

0x7fffffffe910: %s%LG%p%p%p%p%p result
0x7fffffffe908: -->\0\0\0\0 [%s] prefix, 8 bytes
0x7fffffffe900: %s%LG%p\0 [%s] prefix_format, 8 bytes
0x7fffffffe8f8: 0x555555559480 -> "%p%p%p%p\n" input, 10 bytes:long double?
0x7fffffffe8f0: 0x5555555592a0 -> &fp 
0x7fffffffe8e8: perm
```

























```
%s%p%p%p

Breakpoint 1, get_title () at fst2.c:67
67          fprintf(fp, result, prefix);
(gdb) info frame
Stack level 0, frame at 0x7fffffffe970:
 rip = 0x555555555478 in get_title (fst2.c:67); saved rip = 0x55555555550a
 called by frame at 0x7fffffffe990
 source language c.
 Arglist at 0x7fffffffe8d8, args:
 Locals at 0x7fffffffe8d8, Previous frame's sp is 0x7fffffffe970
 Saved registers:
  rbp at 0x7fffffffe960, rip at 0x7fffffffe968
(gdb) x/24x 0x7fffffffe8d8
0x7fffffffe8d8: 0x55555478      0x00005555      0x00000d68      0x00000000
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x555594c0      0x00005555      0x00007325      0x00000000
0x7fffffffe908: 0x203e2d2d      0x00000000      0x73257325      0x70257025
0x7fffffffe918: 0x000a7025      0x00000000      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000

Breakpoint 3, __fprintf (stream=0x5555555592a0, format=0x7fffffffe910 "%s%s%p%p%p\n") at fprintf.c:27
27      fprintf.c: No such file or directory.
(gdb) info frame
Stack level 0, frame at 0x7fffffffe8e0:
 rip = 0x7ffff7e2cc00 in __fprintf (fprintf.c:27); saved rip = 0x555555555494
 called by frame at 0x7fffffffe970
 source language c.
 Arglist at 0x7fffffffe8d0, args: stream=0x5555555592a0, format=0x7fffffffe910 "%s%s%p%p%p\n"
 Locals at 0x7fffffffe8d0, Previous frame's sp is 0x7fffffffe8e0
 Saved registers:
  rip at 0x7fffffffe8d8
(gdb) x/24x 0x7fffffffe8d8
0x7fffffffe8d8: 0x55555494      0x00005555      0x00000d68      0x00000000
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x555594c0      0x00005555      0x00007325      0x00000000
0x7fffffffe908: 0x203e2d2d      0x00000000      0x73257325      0x70257025
0x7fffffffe918: 0x000a7025      0x00000000      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000

Breakpoint 2, get_title () at fst2.c:68
68          fclose(fp);
(gdb) info frame
Stack level 0, frame at 0x7fffffffe970:
 rip = 0x555555555494 in get_title (fst2.c:68); saved rip = 0x55555555550a
 called by frame at 0x7fffffffe990
 source language c.
 Arglist at 0x7fffffffe8d8, args:
 Locals at 0x7fffffffe8d8, Previous frame's sp is 0x7fffffffe970
 Saved registers:
  rbp at 0x7fffffffe960, rip at 0x7fffffffe968
(gdb) x/24x 0x7fffffffe8d8
0x7fffffffe8d8: 0x55555494      0x00005555      0x00000d68      0x00000000
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x555594c0      0x00005555      [   %s   ]      0x00000000
0x7fffffffe908: [ ' '>-- ]      0x00000000      [  %s%s  ]      [  %p%p  ]
0x7fffffffe918: [ \0\n%p ]      0x00000000      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000



%s + %p%p%p%p%n
0x7fffffffe910: [%s] %s%LG%p%p%p%p%p result, fixed
0x7fffffffe908: [%s/p] -->\0\0\0\0 [%s] prefix, 8 bytes
0x7fffffffe900: [%s/p] %s%LG%p\0  prefix_format, 8 bytes
0x7fffffffe8f8: [%p]   0x5555555594c0 -> 0/null
0x7fffffffe8f0: [%p]   0x5555555592a0 -> &fp 
0x7fffffffe8e8: perm
```




































```
$1 = (int *) 0x55555555804c <permission>
(gdb) print &perm
$2 = (int **) 0x7fffffffe8e8
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x70257025      0x00007025
0x7fffffffe908: 0x203e2d2d      0x00000000      0x70257025      0x70257025
0x7fffffffe918: 0x70257025      0x000a7025      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000
(gdb) break fprintf
Breakpoint 3 at 0x7ffff7e2cc00: file fprintf.c, line 27.
(gdb) continue
Continuing.

Breakpoint 3, __fprintf (stream=0x5555555592a0, format=0x7fffffffe910 "%p%p%p%p%p%p%p\n") at fprintf.c:27
27      fprintf.c: No such file or directory.
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x70257025      0x00007025
0x7fffffffe908: 0x203e2d2d      0x00000000      0x70257025      0x70257025
0x7fffffffe918: 0x70257025      0x000a7025      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000
(gdb) x/24x $sp
0x7fffffffe8d8: 0x5555549a      0x00005555      0x00000d68      0x00000000
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x70257025      0x00007025
0x7fffffffe908: 0x203e2d2d      0x00000000      0x70257025      0x70257025
0x7fffffffe918: 0x70257025      0x000a7025      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
Breakpoint 2, get_title () at fst2.c:68
68          fclose(fp);
(gdb) x/24x 0x7fffffffe8e8
0x7fffffffe8e8: 0x5555804c      0x00005555      0x555592a0      0x00005555
0x7fffffffe8f8: 0x55559480      0x00005555      0x70257025      0x00007025
0x7fffffffe908: 0x203e2d2d      0x00000000      0x70257025      0x70257025
0x7fffffffe918: 0x70257025      0x000a7025      0x00000000      0x00000000
0x7fffffffe928: 0x00000000      0x00000000      0x00000000      0x00000000
0x7fffffffe938: 0x00000000      0x00000000      0x00000000      0x00000000

prefix: %p%p%p
input: %p%p%p%p\n\0

%p,%p,%p,%p,%p,%p,%p
0x00007fffffffe908 [%s, ptr -> prefix] %s, fixed.
0x00007fffffffe910 [%s, ptr -> format]
0x0000000000000000 [???]
0x000a702570257025 [0x7fffffffe8f8]
0x0000000000000d68 [0x7fffffffe8f0]
0x000055555555804c [0x7fffffffe8e8] %n, fixed
0x5555555592a0
```
%s()()()()()()()()(%)(n)

```
0x7fffffffe908
0x7fffffffe910
(nil)
-nan
0x70257025702566
0x5555555592a0
0x5555555594c0

```