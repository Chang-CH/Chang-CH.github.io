import os
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from hashlib import sha512
import math

def decryptCt(iv, key, cipherText):
	cipher = AES.new(key, AES.MODE_CBC, iv)
	try:
		res = unpad(cipher.decrypt(cipherText), AES.block_size)
		print(res.decode("utf-8"))
	except ValueError as e:
		pass

if __name__ == "__main__":
	cipherText = bytes.fromhex("c089a2553fdcbb0bbdbd7655fc34c75eb7f2ccd28fc801480c5a15b7f366f8737a30aa3e845d79e509486ffd6aa81a0b")
	iv = bytes.fromhex("4b0fb9a4dfbabe6810b2fb01d2012b84")
	for i in range(pow(2, 8 * 3)):
		decryptCt(iv, generateCt(i.to_bytes(3, "big")), cipherText)

		


