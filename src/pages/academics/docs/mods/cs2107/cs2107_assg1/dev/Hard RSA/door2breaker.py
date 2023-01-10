import re

FILENAME = "search.txt"

file = open(FILENAME, "r")
lines = file.readlines()


wordlist = []
charlist = "abcdefghijklmnopqrstuvwxyz_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for line in lines:
    data = re.findall(r"(?<=DATA:\s)0x[\w]+", line)
    if data[0] not in wordlist:
        wordlist.append(data[0])

for line in lines:
    char = r"(?<=DATA:\s0x)[\w]+"[0]
    print(charlist[wordlist.index(char)], end="")


output = "abcdeacfgchijeklmcgnjhojpqrshetuvwxalyhizw_s0c1z2ozo2evmsmcwsde3ej245owmsijhojg_uwwvp6sggcj7jijx8o09uAsjajzmju03gig0d9mmB3dpC0pvzjhgigteCgso1jAmDzDp_gAjjgouEmyl1ohcddoCjzAC3jyCjc3F3hjgjpmwgm6dpmsgg2wgcewlmpokEcozaeirdoxg6jbzjk6pcsljm4caigsj38pgcAwejGHmcpgIzoxxgz4cg3wsmwplg7ha8saz8pumJh9lmdmwwcB3jeacdpHuluonK2emodBBLamoHD6BmcszopapEm8Mfqg2geqg7p"
