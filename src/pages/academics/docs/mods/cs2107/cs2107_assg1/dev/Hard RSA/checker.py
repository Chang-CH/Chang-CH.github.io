from Crypto.Util.number import bytes_to_long, long_to_bytes


ALICE_PUB = 212886624694939888084022395884482552191
BOB_PUB = 240330317686136760446058532357922019659
EXPONENT = 65537

# DATA = bytes_to_long(bytes.fromhex("6d9941b3d3ee103652b46fe078a77c41"))
# SIG = bytes_to_long(bytes.fromhex("1d205614137f1adb4f719e9309dc5867"))

DATA = bytes_to_long(bytes.fromhex("8d6397d55a11b7419d50ca42122c0ebf"))
SIG = bytes_to_long(bytes.fromhex("1a41a810afa4eb7d2ff14351a589e412"))


def sign(key, exp, data):
    return pow(data, exp, key)


if __name__ == "__main__":
    bob_signature = sign(BOB_PUB, EXPONENT, DATA)
    alice_signature = sign(ALICE_PUB, EXPONENT, DATA)
    print("Bob sig: {}".format(bob_signature))
    print("Alice sig: {}".format(alice_signature))
    if bob_signature == SIG:
        print("bob")
    elif alice_signature == SIG:
        print("alice")
    else:
        print("failed: {}".format(SIG))
