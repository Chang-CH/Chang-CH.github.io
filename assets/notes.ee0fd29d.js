import{j as n,d as i,F as c}from"./index.7bad5630.js";function l(r){const e=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",strong:"strong",h3:"h3",ul:"ul",p:"p",code:"code",pre:"pre",hr:"hr"},r.components);return i(c,{children:[n(e.h1,{children:"CS2107 AY2122 S2"}),`
`,n(e.h2,{children:"Lecture 0: Terminology"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Confidentiality: unauthorized disclosure ",n(e.strong,{children:"Cannot tell what was written"})," (ciphers)"]}),`
`,i(e.li,{children:["Integrity: unauthorized modification (ransomwares encryption = violation) -> authenticity, ",n(e.strong,{children:"cannot modify what was written"})," (hash)"]}),`
`,n(e.li,{children:"Availability: unauthorized blocking of access (DDOS etc.)"}),`
`,n(e.li,{children:"Common Vulnerabilities and Exposures: repository of vulnerabilities"}),`
`]}),`
`,n(e.h2,{children:"Lecture 1: Encryption"}),`
`,n(e.h3,{children:"Terminology"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Ciphertext only: only ciphertext + some properties of plain text, e.g. english sentence"}),`
`,n(e.li,{children:"Known plaintext: ciphertext + plaintext"}),`
`,n(e.li,{children:"Chosen Plaintext attack: access to oracle/blackbox, can keep encrypting plain texts"}),`
`,n(e.li,{children:"chosen ciphertext attack: access to decryption oracle, oracle given ciphertext decrypts to plaintext"}),`
`]}),`
`,n(e.h3,{children:"Classical ciphers"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["substitution ciphers",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"swap a with f, b with x etc."}),`
`,n(e.li,{children:"vulnerable to known plaintext, exhaustive search, ciphertext only (frequency analysis, english sentence certain letters more common)"}),`
`]}),`
`]}),`
`,i(e.li,{children:["permutation cipher",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"swap character positions in text"}),`
`,n(e.li,{children:"similarly vulnerable"}),`
`]}),`
`]}),`
`,i(e.li,{children:["one time pad",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"given one time pad of bit strings"}),`
`,n(e.li,{children:"xor with bitstring to get ciphertext"}),`
`,n(e.li,{children:"basically perfect, unless pad leaked/reused"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Modern ciphers"}),`
`,n(e.p,{children:"Kerckhoff's principle: assume everything except private key is known to public"}),`
`,n(e.p,{children:"Security through obscurity: security by hiding implementation details."}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:`AES
(DES key length 56 bits too short)`}),`
`,n(e.p,{children:"Block length 128/192/256, block ciphers"}),`
`,i(e.p,{children:[n(e.strong,{children:"Ensures confidentiality, not authenticity"})," -> modify IV basically messes up authenticity."]}),`
`,n(e.p,{children:n(e.strong,{children:"MODES"})}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Electronic Code Block: encrypts each block with same key. leaks info (deterministic encryption, same block same output -> leaks information)"}),`
`,i(e.li,{children:["Cipher Block Chaining: XOR each block with encrypted previous block/IV, then encrypt(with same private key)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"authenticity defeated by modifying IV."}),`
`]}),`
`]}),`
`,i(e.li,{children:["Counter Mode: Ciphertext block Cn = plaintext block Xn xor Encrypt(IV + n), basically like a pseudo one time pad generator. no padding(leaks data).",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"MALLEABLE"}),": since xor is last step, can attacker can modify s.t. decrypt different."]}),`
`,i(e.li,{children:["say known plaintext, ",n(e.code,{children:"m = take $1000"}),", attacker want to change to ",n(e.code,{children:"take $9000"}),"."]}),`
`,i(e.li,{children:["find y s.t. ",n(e.code,{children:"1 xor 9 = y"}),". xor the bit (c7) in ciphertext w/ y"]}),`
`]}),`
`]}),`
`,n(e.li,{children:"Galois/Counter Mode: Extra authentication tag. secure despite decryption oracle"}),`
`]}),`
`,n(e.p,{children:"Triple DES meet in the middle: double DES, can encrypt plaintext m with all possible keys -> x, decrypt c with all possible keys -> y, find where x == y. Triple DES fixes this, no known efficient attacks"}),`
`,i(e.p,{children:[n(e.strong,{children:"Padding oracle attack"}),`
AES CBC decryption: decrypt Cn into intermediate In, then xor with previous block/IV Vn, result is plaintext Mn`]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Given padding oracle P that: given cipher text c, reveals if c padded correctly:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"PKCS#7: 3 bytes of padding, last 3 bytes = 0x03, if no padding full block of 0x00"}),`
`]}),`
`]}),`
`,n(e.li,{children:"work on last byte first. Keep changing IV/previous block last byte Vn until oracle pass."}),`
`,n(e.li,{children:"This means that Vn(modified) xor In = 0x01 (assuming it wasnt already 0x01)"}),`
`,n(e.li,{children:"This means that In = 0x01 xor Vn(modified)"}),`
`,n(e.li,{children:"Therefore plaintext Mn = In xor Vn(original)"}),`
`,n(e.li,{children:"repeat for next byte(s)"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Stream ciphers"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"generate long pseudo random one time pad using generator w/ key + IV"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Tutorial extras"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Cryptology = Cryptography + Cryptanalysis."}),`
`,n(e.li,{children:"National Security Agency (NSA): US national-level intelligence agency of the US Dept of Defense, foreign intelligence signals intelligence (SIGINT)."}),`
`,n(e.li,{children:"National Institute of Standards and Technology (NIST): a measurement standards laboratory, and a non-regulatory agency of the US Dept of Commerce."}),`
`,n(e.li,{children:"Cryptography backdoor: secret key developer can use to break all encryption."}),`
`,n(e.li,{children:"Key escrow: decryption key held in escrow so authorized third party can decrypt."}),`
`,n(e.li,{children:"Decryption order: a court order suspect to decrypt/reveal key"}),`
`,i(e.li,{children:["JAVA Random",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"48 bits"}),`
`,n(e.li,{children:"Uses the system clock to generate the seed"}),`
`,n(e.li,{children:"2^48 attempts are required to break the code"}),`
`,n(e.li,{children:"Uses what\u2019s called a Linear Congruential Generator to produce random values"}),`
`]}),`
`]}),`
`,i(e.li,{children:["JAVA SecureRandom",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"up to 128 bits"}),`
`,n(e.li,{children:"takes Random Data from OS to use as the seed."}),`
`,n(e.li,{children:"2^128 attempts will be required, which will take years to break"}),`
`,n(e.li,{children:"Uses SHA1 to generate pseudo-random numbers, hash over a true random number(uses an entropy source)"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Lecture 2: Authentication"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Authenticity implies integrity"}),`
`,n(e.li,{children:"password systems need: bootstrapping(establish common password -> default/ secure channel), authentication(authenticate password), password reset"}),`
`,n(e.li,{children:"weak authentication: vulnerable to replay attack, send same packet etc."}),`
`,n(e.li,{children:"server should hash passwords in case of leaks, compare hashes instead. Salt, prepend/append random bits to password before hashing so 2 user same password not same hash. store salt in server."}),`
`]}),`
`,n(e.h3,{children:"Password entropy"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Measure of password strength."}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`#9 digit numeric password: total 10^9 possible passwords
possible_combinations = pow(10, 9)
entropy = math.log(possible_combinations, 2)
`})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["RFC 4086: online attacks = ",n(e.strong,{children:"29"})," bits entropy"]}),`
`,i(e.li,{children:["NITS, offline attacks = ",n(e.strong,{children:"128"})," bits entropy (crypto keys)"]}),`
`]}),`
`,n(e.h3,{children:"Fingerprinting"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["False Match Rate, probability a wrong fingerprint identified as correct: ",n(e.code,{children:"# successful false matches / # attempted false matches"})]}),`
`,i(e.li,{children:["False Non Match Rate, probability a correct fingerprint rejected: ",n(e.code,{children:"# rejected genuine / # attempted genuine"})]}),`
`,i(e.li,{children:["Equal Error Rate: ",n(e.code,{children:"FMR == FNMR"}),", usually ",n(e.code,{children:"0.5 - 5%"})]}),`
`,n(e.li,{children:"False to Enroll Rate: Probability user's biometric cannot be captured, e.g. injury"}),`
`,n(e.li,{children:"Failure to Capture Rate: Probability user cannot even be captured, e.g. water/dirt"}),`
`]}),`
`,n(e.h3,{children:"2FA"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Time based: based on time + shared secret generate temp password"}),`
`,n(e.li,{children:"Sequence based: based on number of times generated"}),`
`,n(e.li,{children:"SMS etc."}),`
`]}),`
`,n(e.h3,{children:"OCBC incident (PRESENTATION)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"phishing website, fake sms (spoof name + short code, appear in same ocbc sms thread)"}),`
`,n(e.li,{children:"customer service calls increased 40%, 13.7 mil lost, 790 affected"}),`
`,n(e.li,{children:"mitigation: links removed from sms"}),`
`]}),`
`,n(e.h2,{children:"Lecture 3: MAC + signature"}),`
`,n(e.p,{children:"public key encryption PKC: encrypt with public key, decrypt with private key. Allows secure broadcast channel, each entity broadcast/save public key."}),`
`,n(e.h3,{children:"RSA (PKC)"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["choose 2 large primes ",n(e.code,{children:"p"}),", ",n(e.code,{children:"q"}),". ",n(e.code,{children:"n"})," = ",n(e.code,{children:"pq"}),"."]}),`
`,i(e.li,{children:["totient, ",n(e.code,{children:"\u0424(n)"})," = ",n(e.code,{children:"(p-1)(q-1)"}),"."]}),`
`,i(e.li,{children:["choose exponent ",n(e.code,{children:"e"})," such that ",n(e.code,{children:"e"})," is coprime (gcd = 1) w/ ",n(e.code,{children:"\u0424(n)"})]}),`
`,i(e.li,{children:["find decryption exponent ",n(e.code,{children:"d"})," such that ",n(e.code,{children:"d*e % (p-1)(q-1) = 1"})]}),`
`,i(e.li,{children:["public key = ",n(e.code,{children:"(n, e)"}),", private key = ",n(e.code,{children:"(n,d)"}),"."]}),`
`,i(e.li,{children:["encrypt ",n(e.code,{children:"c = m ^ e % n"}),"."]}),`
`,i(e.li,{children:["decrypt ",n(e.code,{children:"m = c ^ d % n"}),"."]}),`
`]}),`
`,i(e.p,{children:["Based on the formula ",n(e.code,{children:"m ^ r % n == m ^ (r % \u0424(n)) % n"}),". Note that d and e can be swapped and still works. Note: finding plaintext could be easier than factorization n -> p,q"]}),`
`,n(e.p,{children:"key size approx 2048 bits"}),`
`,n(e.p,{children:"PKCS#1 adds padding (random IV so same plaintext wont give same ciphertext)"}),`
`,n(e.p,{children:"Homorphic property (arithmetic operations can be performed w/o decryption), can be vulnerable"}),`
`,i(e.p,{children:["RSA ",n(e.strong,{children:"CANNOT"})," be used in place of AES CBC (i.e. RSA CBC) -> RSA encryption done with public key, attacker basically has encryption oracle, can guess plaintext and check -> ",n(e.code,{children:"c2 = (c1 xor m2) ^ e % n"}),"."]}),`
`,i(e.p,{children:["128b AES approx equivalent 3072b RSA, RSA encryption/decryption ",n(e.strong,{children:"SIGNIFICANTLY SLOWER"})," then AES"]}),`
`,n(e.h3,{children:"Discrete log PKC"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"ElGamal Encryption, elliptic curve, 300b ECC approx = 2048b RSA"}),`
`,n(e.li,{children:"Paillier Encryption"}),`
`]}),`
`,n(e.h2,{children:"Hashing"}),`
`,n(e.p,{children:"Hash must be collision resistant (hard to find another text w/ same hash) + one way."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"MD5: 128b digest, broken"}),`
`,n(e.li,{children:"SHA256/SHA3: secure"}),`
`]}),`
`,n(e.h3,{children:"Keyed Hash (MAC)"}),`
`,n(e.p,{children:"After seeing multiple valid hash + plaintext, cannot forge mac of unseen message"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"HMAC (RFC 2104) internally uses multiple SHA-1 hashes"}),`
`,i(e.li,{children:["CBC-MAC: ",n(e.code,{children:"Hi = encrypt(Mi xor H(i-1))"})," w/ private key & IV."]}),`
`]}),`
`,n(e.h3,{children:"Signature (public key MAC)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"user can use public key to verify signature"}),`
`,n(e.li,{children:"almost impossible to forge signature without private key"}),`
`,n(e.li,{children:"offers Non-repudiation: assurance that someone cannot deny previous actions"}),`
`]}),`
`,n(e.h3,{children:"Birthday attacks"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"If there are X messages each randomly tagged with Y possible values"}),`
`,i(e.li,{children:["And ",n(e.code,{children:"x > 1.17 * Y ^ 0.5"}),", then there is more that 0.5 chance there exists 2 messages with same value"]}),`
`,n(e.li,{children:"e.g. hash digest 30 bits, possible hashes 2^30, 2^10 messages generated, given 2^10 = 1.17 * 2 ^ 30 ^ p, then probability p at least 2 have same digest"}),`
`,n(e.li,{children:"Digest must be much larger than key (e.g. 2x)"}),`
`]}),`
`,n(e.h3,{children:"Hash chaining"}),`
`,i(e.p,{children:["Say large bank of messages known. Given reduce function ",n(e.code,{children:"R()"})," that maps hash H to known word w(must be a possible plaintext, e.g. possible password). Aim to given digest y find some x st Hash(x) = y"]}),`
`,i(e.p,{children:["chain: ",n(e.code,{children:"w0 -> Hash(w0) = h0 -> R(h0) = w1 -> Hash(w1) = h1..."}),", store ",n(e.code,{children:"w0, hlast"})," in a data struct ",n(e.code,{children:"T"}),"."]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["if exist entry ",n(e.code,{children:"hlast == y"}),", work from ",n(e.code,{children:"w0"})," until we get ",n(e.code,{children:"wlast"}),"."]}),`
`,i(e.li,{children:["if not exist compute ",n(e.code,{children:"y'"})," = ",n(e.code,{children:"Hash(R(y))"}),". find ",n(e.code,{children:"y'"}),", if found means ",n(e.code,{children:"y"})," is second to last in the chain (",n(e.code,{children:"y'"})," is the last). else repeat."]}),`
`]}),`
`,n(e.p,{children:"2^50 possible values, chain length (hash + reduce) 2^20, total size(chain no) 2^30"}),`
`,n(e.h3,{children:"Rainbow table"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Goal to find original text from hash"}),`
`,n(e.li,{children:"Table storing hash to original values via precomputation"}),`
`]}),`
`,n(e.h2,{children:"Lecture 4 PKI + channel security"}),`
`,n(e.p,{children:`Certificate Authority: Trusted authority, signs certs with private key.
Certificates: (X.509) Contain at least name(email, domain name etc.), public key, validity window, CA signature. Can include disgest, metadata, encryption algo etc.). Certificate still vulnerable to DNS spoofing -> does not verify ip address, only securely gives user server's public key.
Chain of trust: root CA preloaded, signs other CA's`}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Revocation (update preferrably once per week):"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"(online) Certificate Revocation List: CA periodically sign + publish list"}),`
`,n(e.li,{children:"Online Certificate Status Protocol: validate cert online"}),`
`]}),`
`,n(e.p,{children:"CA flaws:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["implementation bugs: ",n(e.code,{children:"\\0"})," in domain name, browser parse cert verify with ",n(e.code,{children:"\\0"}),", user see truncated without ",n(e.code,{children:"\\0"})]}),`
`,n(e.li,{children:"rogue CA"}),`
`]}),`
`,n(e.p,{children:"Social Engineering:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"typosquat: v instead of u, 0 instead of o etc."}),`
`,i(e.li,{children:["sub domain: ",n(e.code,{children:"valid.com.scam.io"}),"."]}),`
`]}),`
`,n(e.h3,{children:"Authentication"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Challenge response:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["shared secret ",n(e.code,{children:"k"}),", ",n(e.strong,{children:"B"})," sends ",n(e.strong,{children:"A"})," request"]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," challenges B with ",n(e.code,{children:"m"}),", ",n(e.strong,{children:"B"})," reply with ",n(e.code,{children:"t = mac(m, k)"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," accepts ",n(e.code,{children:"t"}),". ",n(e.strong,{children:"A"})," authenticated ",n(e.strong,{children:"B"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["PKC",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"A"})," issues challenge ",n(e.code,{children:"r"}),". ",n(e.strong,{children:"B"})," uses private key, signs ",n(e.code,{children:"r"}),", sends signed ",n(e.code,{children:"r"})," + ",n(e.code,{children:"B"})," certificate."]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," verifies certificate, then extracts public key from cert, verify signature of ",n(e.code,{children:"r"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Post authentication"}),": mallory can still intercept after authentication. Therefore do key exchange during authentication, keep shared secret, session key ",n(e.code,{children:"k"}),". (e.g. station to station protocol)"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["PKC key exchange:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"A"})," generate public/private key, send public key to ",n(e.strong,{children:"B"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"B"})," chooses secret ",n(e.code,{children:"k"}),", encrypts with public key from ",n(e.strong,{children:"A"}),". send to ",n(e.strong,{children:"A"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," decrypts using private key to get ",n(e.code,{children:"k"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Diffie Hellman key-exchange (if + authenticated key exchange == Station to Station protocol)",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"A"}),", ",n(e.strong,{children:"B"})," agree upon ",n(e.code,{children:"g"}),", ",n(e.code,{children:"p"}),". Both known to public. ",n(e.code,{children:"p"})," = large prime."]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," chooses ",n(e.code,{children:"a"}),", computes ",n(e.code,{children:"x = g ^ a % p"}),", send ",n(e.code,{children:"x"})," to ",n(e.strong,{children:"B"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"B"})," chooses ",n(e.code,{children:"b"}),", computes ",n(e.code,{children:"y = g ^ b % p"}),", send ",n(e.code,{children:"y"})," to ",n(e.strong,{children:"A"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"A"})," gets private key ",n(e.code,{children:"k"})," with ",n(e.code,{children:"y ^ a % p"}),", vice versa for ",n(e.strong,{children:"B"}),"."]}),`
`,i(e.li,{children:["ASSUMPTION: given ",n(e.code,{children:"g ^ a % p"}),", ",n(e.code,{children:"g ^ b % p"}),", hard to find ",n(e.code,{children:"g ^ ab % p"}),"."]}),`
`,i(e.li,{children:["CANNOT GUARD AGAINST INTERCEPTION: mallory can intercept, send own ",n(e.code,{children:"g ^ m % p"}),"."]}),`
`,i(e.li,{children:["Station to station: ",n(e.strong,{children:"A"})," knows ",n(e.strong,{children:"B"})," public key. ",n(e.strong,{children:"B"})," signs ",n(e.code,{children:"y"})," using private key. ",n(e.strong,{children:"A"})," verifies ",n(e.code,{children:"y"}),", computes rest as per usual."]}),`
`]}),`
`]}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Single Sign On: After first manual authentication, server send auth token to user, browser keeps token, auto resend each time user visits site. token has expiry date."}),`
`]}),`
`,n(e.h3,{children:"Mutual Authentication"}),`
`,i(e.p,{children:[n(e.strong,{children:"A"})," knows ",n(e.strong,{children:"B"})," public key, vice versa. public keys known as ",n(e.strong,{children:"Master Key"}),"/",n(e.strong,{children:"Long term key"}),". Carry out Authenticated Key Exchange, e.g. STS. obtain session key ",n(e.code,{children:"k"}),"."]}),`
`,n(e.h3,{children:"TLS/SSL"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["uses long term keys (server's public keys, via certificate). (unilateral, auth Server) Authenticated key exchange in TLS handshake, establish session keys ",n(e.code,{children:"t"}),", ",n(e.code,{children:"k"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"t"})," for mac, ",n(e.code,{children:"k"})," for encryption."]}),`
`,i(e.li,{children:["data in message = ",n(e.code,{children:"Encrypt(#seq no + message, k) + mac(entire encrypted front part, t)"}),"."]}),`
`,n(e.li,{children:"Protects b/w layer 5 & 4 -> attacker @ layer 4 cannot see raw data, can see TCP header, TLS header."}),`
`]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"TCP init (Client SYN Server, Server ACK Client, Client ACK Server, TCP established)"}),`
`,i(e.li,{children:["Alice send ",n(e.code,{children:"ClientHello"})," to server"]}),`
`,i(e.li,{children:["Server reply ",n(e.code,{children:"ServerHello"})," w/ certificate to alice"]}),`
`,n(e.li,{children:"Alice does key exchange session key w/ server public key in cert"}),`
`,n(e.li,{children:"Server establish session key"}),`
`]}),`
`,n(e.h3,{children:"TLS Renegotiation attack"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"MITM in layer 3 (Network/IP)"}),`
`]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Alice ",n(e.code,{children:"ClientHello"})," Server"]}),`
`,i(e.li,{children:["MITM intercept Alice ",n(e.code,{children:"ClientHello"}),", stores."]}),`
`,i(e.li,{children:["MITM ",n(e.code,{children:"ClientHello"})," Server"]}),`
`,i(e.li,{children:["Server reply ",n(e.code,{children:"ServerHello"})," w/ cert"]}),`
`,i(e.li,{children:["MITM establish session key ",n(e.code,{children:"k(m)"}),"."]}),`
`,n(e.li,{children:"MITM sends some data, e.g."}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`GET /test?q=query;address=mitm HTTP/1.1
X-Ignore-This:
`})}),`
`,i(e.ol,{start:"7",children:[`
`,i(e.li,{children:["MITM forward alice ",n(e.code,{children:"ClientHello"}),"."]}),`
`,i(e.li,{children:["Server sees a renegotiation, Alice sees nothing wrong. new session key ",n(e.code,{children:"k(a)"})," established."]}),`
`,n(e.li,{children:"Alice then sends valid data, e.g."}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`GET /test?lmao=69;address=alice HTTP/1.1
Cookie: alicecookie
`})}),`
`,i(e.ol,{start:"10",children:[`
`,n(e.li,{children:"Server treats requests as part of continuous packet, appends information:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`GET /test?q=query;address=mitm HTTP/1.1
X-Ignore-This: GET /test?lmao=69;address=alice HTTP/1.1
Cookie: alicecookie
`})}),`
`,i(e.ol,{start:"11",children:[`
`,i(e.li,{children:["Alice is hack. header is ignored, ",n(e.code,{children:"Cookie"})," on newline appended to MITM request, authorized."]}),`
`]}),`
`,n(e.h2,{children:"Lecture 5 + 9: Websec"}),`
`,n(e.p,{children:`|-|
|5. Application (HTTPS, hostname)|
|4. Transport (port, TCP/UDP)|
|3. Network (IP datagrams)|
|2. Link (MAC addr)|
|1. Physical|`}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Man In The Middle:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.code,{children:"MITM sits in Layer 3"}),": MITM can see/modify input/output of layer 3, including private key @ layer 3."]}),`
`,i(e.li,{children:[n(e.code,{children:"MITM sits just below Layer 3/ in b/w 2 & 3"}),": can modify output of Layer 3, but not internal data/input @ layer 3."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["UDP ",n(e.code,{children:"DatagramSend(src port, dest ip, dest port, msg)"}),", msg at most 65KB. UDP no result returned."]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["TCP ",n(e.code,{children:"P = open_connect(2, \u201C33.43.100.2\u201D, 65533); send(P, out_message); read (P, in_message); close_connection(P);"})]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"DNS attack: normal DNS query DNS server, get ans w/ UDP. If attacker in same network, can sniff/inject spoofed data into channel."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Attacker sniff Alice request for DNS w/ ",n(e.code,{children:"QueryID=0x6A"}),"."]}),`
`,i(e.li,{children:["Attacker send spoofed response with QID ",n(e.code,{children:"0x6A"})," before DNS server replies"]}),`
`,n(e.li,{children:"Alice accept first response with spoofed IP."}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:'ARP Poisoning: Attacker connected to same "router" switch, poison switch table with spoofed MAC addr'}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Attacker can redirect packets to self, act as MITM in layer 2."}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Denial Of Service attack:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Reflection attack: attacker send request to intermediate nodes, nodes flood target with requests. (DNS reflection: query DNS resolver with spoofed src as target ip)"}),`
`,n(e.li,{children:"Amplification attack: attacker send 1 request to intermediate nodes, node send multiple responses to target, amps attack. (ICMP ping w/ spoofed src as target, all connected hosts echo reply to victim. nowadays ping broadcast disabled)"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["Address Bar spoofing: ",n(e.code,{children:"\\0"})," attack, phishing link"]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Tools"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Wireshark: MITM in layer 2."}),`
`,n(e.li,{children:"Nmap: port scan"}),`
`]}),`
`,n(e.h3,{children:"Mitigation"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"TLS/SSL @ b/w layer 5 & 4 (prevents MITM @ 4 & below, but useless against attacker @ 5)"}),`
`,n(e.li,{children:"WPA2: b/w layer 2 & 1, encrypt + mac IP header + datagram body. Attacker can still sniff dest mac addr of request"}),`
`,n(e.li,{children:"IPSec: layer 3, integrity + authenticity (no confidentiality)"}),`
`,i(e.li,{children:["Firewall (ingress + egress filtering (TCP/IP header). If scans packet payload also, == deep packet inspection)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Packet filters (TCP/IP header)"}),`
`,n(e.li,{children:"Stateful Inspection (Deep packet inspection)"}),`
`,n(e.li,{children:"Proxy (modify packets)"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Intrusion Detection Systems",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Attack signature detection: well known attack on certain port/src ip etc."}),`
`,n(e.li,{children:"Anomaly detection: e.g. sudden surge in packets @ port"}),`
`,n(e.li,{children:"Behaviour based IDS: based on human behaviour, e.g. download habits"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Security Operation Center: IT/security team"}),`
`,n(e.li,{children:"Security Information and Event Management: Tools used by SOC"}),`
`]}),`
`,n(e.h3,{children:"L9: Cookies"}),`
`,i(e.p,{children:["TCP Handshake, send ",n(e.code,{children:"Set-Cookie: id"}),", client automatircally sends ",n(e.code,{children:"Cookie: id"})," each time user visits server."]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"same-origin"}),": cookie can only be sent to original server that set the cookie(match ",n(e.code,{children:"protocol"})," [http vs https], ",n(e.code,{children:"hostname"}),", ",n(e.code,{children:"port number"}),"), cannot send elsewhere."]}),`
`,n(e.li,{children:"session cookie, deleted once browser closed, secure cookies: only work on https"}),`
`,i(e.li,{children:["Token based auth: after user authenticate, user receive token ",n(e.code,{children:"t"}),". Subsequent requests user send ",n(e.code,{children:"Authorization: t"}),", accepted as authentic user."]}),`
`]}),`
`,n(e.h3,{children:"Attacks"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["XSS: when server returns response html that renders with user input. 1. ",n(e.strong,{children:"reflection xss"}),": redirect to legit website with script in params, 2. ",n(e.strong,{children:"Stored xss"}),": store script in website, e.g. xss in profile name",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Attacker makes user click on link to website ",n(e.code,{children:"legit.com"}),", with xss'd parameters, e.g. ",n(e.code,{children:"?query=<script>...<\/script>"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"legit.com"})," returns html containing injected script"]}),`
`,n(e.li,{children:"browser executes script when rendering"}),`
`,n(e.li,{children:"Website can be defaced/cookie stolen."}),`
`]}),`
`]}),`
`,i(e.li,{children:["XSRF: session riding, mitigated by forcing authentication info, e.g. token, in request param ",n(e.code,{children:"?token=..."}),", since malicious party dont know.",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Alice"})," log into ",n(e.code,{children:"bank.com"}),", then visits ",n(e.code,{children:"malicious.com"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"malicious.com"})," trick ",n(e.strong,{children:"Alice"})," into clicking on ",n(e.code,{children:"bank.com/transfer?to=attacker&amt=6969"}),"."]}),`
`,i(e.li,{children:["Since ",n(e.strong,{children:"Alice"})," alr logged into ",n(e.code,{children:"bank.com"}),", cookie sent with request, ",n(e.code,{children:"bank.com"})," accepts."]}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"OTHERS"}),":"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Drive-by-Download: unintentional download, w/ (actually click on malicious link) or w/o authorization (on legitimate site, script e.g. on ads execute code w/o notification)"}),`
`,n(e.li,{children:"Web bugs/beacon: track user activity, e.g. facebook like button, check email read. can be tiny image, first time users download. repeat user wont download = visited."}),`
`,n(e.li,{children:"Clickjacking (User Interface redress attack): e.g. put transparent button, redirect user to unintended page"}),`
`,n(e.li,{children:"Click fraud/ click farm: click on ads to bankrupt ad revenue/ generate ad revenue"}),`
`]}),`
`,n(e.h2,{children:"Lecture 6: Access Control"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"principal"}),"/",n(e.code,{children:"subject"}),": user, wants to access ",n(e.code,{children:"Object"})," via ",n(e.code,{children:"operation"}),". ",n(e.code,{children:"Reference monitor"})," grants/denies request."]}),`
`,n(e.li,{children:"discretionary access control: owner decides access rights"}),`
`,n(e.li,{children:"mandatory access control: system wide policy decides"}),`
`]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Access control matrix: columns = files, rows = users, each entry = {rwx} etc."}),`
`,n(e.li,{children:"Access Control List: store access rights as a list, e.g. b.exe -> (root, {r,x}) -> (Alice, {w})"}),`
`,n(e.li,{children:"Capabilities: List of each user + access rights for each file, e.g. Alice -> (a.c, {rwx}) -> (b.exe, {r})"}),`
`,i(e.li,{children:["Intermediate control: group, (user | group | all -> rwx|r--|--x). groups can only be created by ",n(e.code,{children:"root"})," in unix, in ",n(e.code,{children:"etc/group"}),"."]}),`
`,i(e.li,{children:["Intermediate control: role, higher privilege access all lower + more. higher privilege = ",n(e.strong,{children:"lower ring"}),". Unix 2 rings, superuser + user.",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Bell lapadula, confidentiality",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"no read up, subject can only read security below current clearance, prevent info leakage"}),`
`,i(e.li,{children:["no write down, subject can ",n(e.strong,{children:"append"})," (not delete/modify) objects of higher clearance, prevent higher level leak info to lower level."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Biba, integrity:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"no write up: prevent unauth modification to higher clearance"}),`
`,n(e.li,{children:"no read down: prevent reading forged daat from lower clearance"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["unix, ",n(e.code,{children:"s"})," allow user execute w/ permission of owner. Superuser, UID = 0. (e.g.: ",n(e.code,{children:"-r-sr-xr-x a.exe root"}),", any user can open ",n(e.code,{children:"a.exe"}),", program can access files ",n(e.code,{children:"root"})," can access)"]}),`
`,n(e.li,{children:"Controlled escalation: appication w/ higher privileges executed by lower privileged user, access higher privileged data."}),`
`,i(e.li,{children:["unix, real UID = UID of invoker. effective UID = UID being executed as. If execute bit = ",n(e.code,{children:"s"}),", == UID of owner. (",n(e.strong,{children:"Add 4 to front if Set UID enabled"}),")"]}),`
`,i(e.li,{children:[n(e.code,{children:"PPID"})," = parent PID, ",n(e.code,{children:"PID"})," = process ID, ",n(e.code,{children:"UID"})," = effective userID, ",n(e.code,{children:"RUID"})," = Real UID"]}),`
`]}),`
`,n(e.h2,{children:"Lecture 7 + 8: Call stack"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Call stack tracks: parameters(x86), control flow (return addr etc.), local variables, previous stack frame"}),`
`]}),`
`,n(e.h3,{children:"Call stack attacks"}),`
`,n(e.p,{children:`|-|
|prev frame 0xFF|
|params|
|return addr|
|locals|
|next frame 0x00|`}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Overwrite existing execution code portion"}),`
`,i(e.li,{children:["Replace a memory location storing a code address used by ",n(e.code,{children:"jmp"}),"/",n(e.code,{children:"jz"})," etc."]}),`
`,i(e.li,{children:["Replace memory location storing offset: ",n(e.code,{children:"beq"})," etc. if carried on stack == ",n(e.code,{children:"stack smashing"})," (replace ra/param etc.)"]}),`
`]}),`
`,n(e.h2,{children:"Unsafe programming"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"printf"})," w/ arbitary user text: ",n(e.code,{children:'"%d%d%d"'})," get parsed, ",n(e.code,{children:"printf()"})," starts popping 4B (",n(e.code,{children:"sizeof(int)"}),") off the stack even if no params supplied to ",n(e.code,{children:"printf"}),".",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Mitigate with ",n(e.code,{children:'printf("%s", user_string)'})]}),`
`]}),`
`]}),`
`,i(e.li,{children:[n(e.code,{children:"\\0"})," handling: SSL, some browser verify cert together with ",n(e.code,{children:"\\0"}),", ok, address bar parse ",n(e.code,{children:"\\0"}),", display truncated address"]}),`
`,i(e.li,{children:["Buffer overflow: put 11 elements into array of 10. ",n(e.code,{children:"strcpy"})," (mitigated w/ ",n(e.code,{children:"strncpy"}),") Overwrites the extra 1 element"]}),`
`,i(e.li,{children:["Stack smashing: ",n(e.code,{children:"arr[0]"})," is at higher addr than ",n(e.code,{children:"arr[n]"})," (overflows downwards). overflow enough = overwrite ",n(e.code,{children:"rsp/ra"}),", jump to arbitary location",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Canary: random value placed just before return addr. if changed program terminates. disabled with ",n(e.code,{children:"fno-stack-protector"}),"."]}),`
`,i(e.li,{children:["Address Space Layout Randomisation: randomise offsets of certain codes -> attacker need info leak to find offset to use functions e.g. ",n(e.code,{children:"call()"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Script injection (SQL): unsanitised ",n(e.code,{children:"'$userinput'"}),", user enters ",n(e.code,{children:"a' or 1=1--"}),", bypass password check",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["parameterised queries: ",n(e.code,{children:`query = 'SELECT * FROM A WHERE name=?'; parameters.add("name", userinput);`})," -> SQL knows userinput is a string, does not parse input as sql code. searches for name ",n(e.code,{children:"a' or 1=1--"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["TOCTOU race condition: attacker change data in between system time of check & time of use:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"e.g. system check file accessible -> attacker change to sensitive file (e.g. change file to symbolic link to sensitive file) -> system read sensitive file"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Presentation topics"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Zoom vulnerabilities"}),`
`,n(e.li,{children:"Waiting room: Zoom servers would automatically send a live video stream of the meeting, as well as the meeting\u2019s decryption key, to all users in a meeting\u2019s waiting room, even though waiting room = unauthorized"}),`
`,n(e.li,{children:"Zoom chat vulnerable to zip bombs: symbolic links, file way bigger than zip when extracted"}),`
`,n(e.li,{children:"Windows zoom client fails to validate .msi update installer certificate, can have remote code execution w/ priv escalation"}),`
`,i(e.li,{children:["Singhealth COI, 1.5 million records from may 2015 - july 2018 accessed, Integrated Health Information Systems detect unusual activity in Singhealth's database. PM lee hsien loong personal data + outpatient records accessed.",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Employees did not have adequate levels of cybersecurity awareness, staff reported case, no one cared/ were sleeping on the job. Antivirus too old to update, must reinstall, server not maintained."}),`
`,n(e.li,{children:"Employees holding key roles in IT security did not act appropriately, only 1"}),`
`,n(e.li,{children:"Sophisticated persistent thread actor involved, state linked"}),`
`]}),`
`]}),`
`,i(e.li,{children:["OCBC stuff",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Website spoofing w/ phishing link"}),`
`,n(e.li,{children:"Spoofed sms, attacker set sender name (senderId) to OCBC, appear in same OCBC sms log. mitigation: banks no longer send links in sms"}),`
`,n(e.li,{children:"SS7 attacks: malicious node, claim to have access to victim phone number, 2FA sent to malicious node to forward to user"}),`
`,n(e.li,{children:"scamshield. only ios though"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Colonial pipeline: Darkside attack, russian cybercrime ransomware as a service group. May 7, 2021, 4.4 mil USD random paid",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"(IT) Billing infrastructure attacked, could not charge customers. 200GB data stolen."}),`
`,n(e.li,{children:"Panic buying, state of emergency w/ fuel shortages"}),`
`,n(e.li,{children:"Not state sponsored. state sponsored attacks usually not financially motivated, mostly political motivations e.g. snooping/actual destruction. Usually targeted, e.g. spear phishing."}),`
`,n(e.li,{children:"Supply chain attack: attack less secure parts to damage whole chain, colonial pipeline attacked, gas retailers no gas to sell."}),`
`,n(e.li,{children:"Operational Technology: Monitor events/processes/devices, make industrial/enterprise operations. Information Technology: organize/analyze data, produce/process info."}),`
`]}),`
`]}),`
`,i(e.li,{children:["Ransomware attack (WannaCry)",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"kill switch: ransomware keeps checking some website, once website was bought wannacry deleted itself, knows that researchers looking into its code. Possibly used to detect sandboxes: sandboxes make all urls accessible, attackers know url is not bought."}),`
`,n(e.li,{children:"ransomware: encrypt files, pay crypto @ personal tor onion link/ clearweb link to get decryption tool"}),`
`,n(e.li,{children:"Attacks Server Message Block protocol, malicious packets can execute arbitary code on windows. originally used by NSA called EternalBlue. Exploit stolen by shadow brokers, released publicly on Medium"}),`
`,n(e.li,{children:"outdated softwares vulnerable"}),`
`]}),`
`]}),`
`]})]})}function o(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}export{o as default};
