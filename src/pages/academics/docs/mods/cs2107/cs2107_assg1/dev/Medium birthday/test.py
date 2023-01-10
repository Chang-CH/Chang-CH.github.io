# /usr/bin/python3
import os
from hashlib import sha512
import math

event = os.urandom(20)

def check(q1, q2) :
    return sha512(event + q1).digest()[:6] == sha512(event + q2).digest()[:6]

ctr = 0

print("seed: {}".format(event.hex()))

empty = "".encode()

val = 0
while val < 2000000000:
	val += 1
	if val % 5000000 == 0:
		print("5 mil processed")
	if check(empty, val.to_bytes(6, "big")):
		print(add)
		print("{} tries".format(ctr))
		break
