from hashlib import sha512
from Crypto.Util.number import long_to_bytes, getRandomNBitInteger
from Crypto.Util.Padding import unpad
from Crypto.Cipher import AES

MITM_KEY = 2

def decrypt(iv: str, ct: str, key: int):
    iv = bytes.fromhex(iv); ct = bytes.fromhex(ct)
    key = long_to_bytes(key)
    key = sha512(key).digest()[:16]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    ct = unpad(cipher.decrypt(ct), 16)
    return ct


# AES 256
print("input generator g")
gen = int(input())
print("Input prime p")
prime = int(input())
print("Input Alice pub")
a_real = int(input())
faked_pub = pow(gen, MITM_KEY, prime)

print("\nTo Bob:")
print('{{"g": {}, "n": {}, "pub":{}}}'.format(gen, prime, faked_pub))
print("To Alice")
print('{{"g": {}, "n": {}, "pub":{}}}'.format(gen, prime, faked_pub))

print("\nInput Bob pub:")
b_real = int(input())

a_shared = pow(a_real, MITM_KEY, prime)
b_shared = pow(b_real, MITM_KEY, prime)
print("Print shared key============")
print("Alice = {}".format(a_shared))
print("Bob = {}".format(b_shared))

print("\nENTER ALICE IV")
A_IV = input()
print("ENTER ALICE CIPHER")
A_C = input()
print("Plaintext: {}".format(decrypt(A_IV, A_C, a_shared)))
print("ENTER BOB IV")
B_IV = input()
print("ENTER BOB CIPHER")
B_C = input()
print("Plaintext: {}".format(decrypt(B_IV, B_C, b_shared)))


