from Crypto.Util.number import bytes_to_long, long_to_bytes
import re

exponent = 65537
modulo = 212886624694939888084022395884482552191
modulo2 = 240330317686136760446058532357922019659
private = 182644555697123534578318103200573310537


def decrypt(inpt):
    try:
        return long_to_bytes(pow(inpt, private, modulo)).decode()
    except:
        return ""


def verify(data, sig):
    return data == pow(sig, exponent, modulo2)


if __name__ == "__main__":
    FILENAME = "search.txt"
    file = open(FILENAME, "r")
    lines = file.readlines()

    fullList = [""] * 40

    for lineno, line in enumerate(lines):
        index = int(re.findall(r"(?<=SEQ:\s)[\d]+", line)[0])
        binary = int(re.findall(
            r"(?<=DATA:\s0x)[\w]+", line)[0].strip(), base=16)
        sig = int(re.findall(
            r"(?<=SIGNATURE:\s0x)[\w]+", line)[0].strip(), base=16)

        data = decrypt(binary)
        if fullList[index] == "" and verify(bytes_to_long(data.encode()), sig):
            fullList[index] = data

    print("".join(fullList))
