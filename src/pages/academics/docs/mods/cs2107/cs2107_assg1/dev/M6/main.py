import random

f = open("text.txt", "r").read().upper()

alphabet = [chr(ord('A') + i) for i in range(26)]
random.shuffle(alphabet)

encrypted = ""
for i in f:
    if (i in alphabet):
        encrypted += alphabet[ord(i) - ord('A')]
    else :
        encrypted += i

g = open("encrypted.txt", 'w')
g.write(encrypted)