import os
# xor 2 byte strings
def xor(a, b):
    return bytes([x ^ y for x, y in zip(a, b)])


def encrypt(msg) :
    otp = os.urandom(20)
    res = b""
    for i in range(0, len(msg), 20):
        res += xor(otp, msg[i:i+20])
    return res

def decrypt(key, msg):
	otp = key
	res =b""
	for i in range(0, len(msg), 20):
		res += xor(key, msg[i:i+20])
	return res

if __name__ == "__main__":
	plaintext = "Hey Grandma Susan'oo, I have told you not to play with my Photoshop!".encode()
	bytes_ciphertext = "faa4a0ba8d435a2b2015c4625c80443e820c523a9ee190baa2504d20640cca2e6bd54e30990b533ac6e1adf5ea4157243d58d22b7b9d1732950b6d3dddb5b6e9a25e4b64642fcd3b2f915e3bcc52522092a2abf5ba11422a310a852a6a94537f83451d21daa4f9feb8505c2a2a568b6c2fb6646ddd1b0a2efd9589d59e616475300895367faa656c9c185c21edaaeae395000e1a320dc92c3c87563d804e40"
	ciphertext = bytes.fromhex(bytes_ciphertext)

	key = xor(plaintext[:20], ciphertext[:20])
	dec = decrypt(key, ciphertext)

	print(dec.decode())



# print("encrypted : " + encrypt(msg).hex())