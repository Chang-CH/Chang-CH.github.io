lower = "abcdefghijklmnopqrstuvwxyz"
upper = lower.capitalize()
num = "0123456789"

lookup = list(lower + upper + num)
maxShift = len(lookup)

if __name__ == "__main__":
    prefix = r"QgGFEL{JvFt7_qF3vH56_I5H_I_ufM_AI5a8d}"
    res = []
    for offset in range(1, 2):
        temp = []
        for i in prefix:
            if i == '{' or i == '}' or i == '_':
                temp += i
            else:
                char = ord(i)
                if char < 65:
                    temp += lookup[(char + 4 + offset) % maxShift]
                elif char < 97:
                    temp += lookup[(char - 39 + offset) % maxShift]
                else:
                    temp += lookup[(char - 97 + offset) % maxShift]
        res.append("".join(temp))
        print(res[-1])
