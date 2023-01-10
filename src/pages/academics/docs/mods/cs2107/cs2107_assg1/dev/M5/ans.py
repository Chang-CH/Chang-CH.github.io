import os
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from hashlib import sha512
import math

def generateCt(seed):
	key = sha512(seed).digest()[:16]
	return key

def decryptCt(iv, key, cipherText):
	cipher = AES.new(key, AES.MODE_CBC, iv)
	try:
		res = unpad(cipher.decrypt(cipherText), AES.block_size)
		print(res.decode("utf-8"))
		# return res
	except ValueError as e:
		pass
		# return None

def ctfEncrypt(text):
	generateCt(text, os.urandom(20)[:3])


if __name__ == "__main__":
	# bf = permuteBytes(6, [])

	cipherText = bytes.fromhex("c089a2553fdcbb0bbdbd7655fc34c75eb7f2ccd28fc801480c5a15b7f366f8737a30aa3e845d79e509486ffd6aa81a0b")
	iv = bytes.fromhex("4b0fb9a4dfbabe6810b2fb01d2012b84")
	for i in range(pow(2, 8 * 3)):
		if i % 1000000 == 0:
			print("{:02d} percent done".format(math.floor(i / 16 // 10000)))
		decryptCt(iv, generateCt(i.to_bytes(3, "big")), cipherText)

		


