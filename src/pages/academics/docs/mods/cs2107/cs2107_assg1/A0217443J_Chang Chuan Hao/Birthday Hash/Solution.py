from hashlib import sha512

memory = {}

print("enter hex: ", end="")
event = bytes.fromhex(input())

def compute(q1):
	return sha512(event + q1).digest()[:6]

for i in range(6969696969):
	strVal = str(i)
	byteVal = strVal.encode()
	res = compute(byteVal)

	if i % 5000000 == 0:
		print("5 mil done")
		print("computing: {}".format(strVal))

	if res in memory:
		print("hash collision det")
		print(strVal)
		print(memory[res])
		break
	else:
		memory[res] = strVal