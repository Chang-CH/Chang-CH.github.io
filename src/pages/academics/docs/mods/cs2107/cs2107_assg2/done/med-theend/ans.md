1. Looking at `end.c` we notice `NAME_MAX_LENGTH` is `16` but the buffer read by `read_str()` is `20`.
2. The flag is not contained in the code, so we need some form of RCE
3. We have a `system(command);` evaluating the code in `app.stats.logger` so the goal must be to overflow and write to it.
4. Since `app.stats.logger` is after the `app.selected.*`, and the unsafe `strcpy` is used to directly write an arbit
2. We can exploit it by eliminating null character `\0` to give us an arbitary length string.
3. We need to create a long enough name to overwrite `app.logger` to execute arbitary code.
4. Using IDA, we can see that `dest` is at `0x68`, while logger is at `0x88`.
5. There must be no bytes of 0, since it can be treated as a null character.
6. enter a name of at least 16 length, then height, weight etc. must not be 1 in any of their 4 bytes. `2147483647` was used
7. use `select_person` to `strcpy` the string to overwrite `app.stats.logger`.
8. enter the command to run as the name of the next consecutive person.
9. `ls` used to browse the files. `cat flag.txt` used to extract the answer.
 


2. `system(command);` allows rce, but `>> log.txt` prevents us from reading it. Thus we must overflow `>> log.txt` wtih whitespaces.
3. BMI must be 