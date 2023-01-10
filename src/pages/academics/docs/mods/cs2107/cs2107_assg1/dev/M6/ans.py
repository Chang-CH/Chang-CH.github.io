# encode = {
# "A":"B"
# "B":"Q"
# "C":"U"
# "D":"P"
# "E":"Y"
# "F":"O"
# "G":"N"
# "H":"F"
# "I":"H"
# "J":
# "K":
# "L":
# "M":
# "N":
# "O":
# "P":
# "Q":
# "R":
# "S":"T"
# "T":
# "U":
# "V":"M"
# "W":
# "X":
# "Y":
# "Z":
# }

decodeTable = {
	"B":"A",
	"Q":"B",
	"U":"C",
	"P":"D",
	"Y":"E",
	"O":"F",
	"N":"G",
	"F":"H",
	"H":"I",
	"T":"S",
	"V":"M",
	"W":"T",
	"X":"R",
	"K":"M",
	"D":"N",
	"W":"T",
	"J":"L",
	"R":"W",
	"G":"Y",
	"L":"O",
	"A":"U",
	"M":"V",
	"S":"P"
}

# decode = {
# 	"B":"A",
# "Q":"B",
# "U":"C",
# "P":"D",
# "Y":"E",
# "O":"F",
# "N":"G",
# "F":"H",
# "H":"I",
# :"J", 
# :"K",
# :"L",
# :"M",
# :"N",
# :"O",
# :"P",
# :"Q",
# :"R",
# "T":"S",
# :"T",
# :"U",
# "M":"V",
# :"W",
# :"X",
# :"Y",
# :"Z"
# }

def decode(text):
	res = []
	for char in text:
		if ord(char) < 65 or ord(char) > 90:
			res.append(char)
		else:
			try:
				res.append(decodeTable[char])
			except KeyError as e:
				res.append(char)
			
	print("".join(res))

if __name__ == "__main__":
	f = open("encrypted.txt", "r", encoding="utf-8").read()
	decode(f)
