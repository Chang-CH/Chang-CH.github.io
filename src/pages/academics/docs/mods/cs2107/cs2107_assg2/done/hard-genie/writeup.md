CS2107{y0u_4r3_the_rEAL_gEn1e}

1. We notice scanf is taken as signed int but passed to ask_genie as unsigned int, overflow with -1000 to pass <48 check
2. release is 48 bytes away from &agic pouch. enter 48 garbage inputs
3. address of execute_genie is 0x4013a9, but a check after ask_genie checks the address, so we cannot use it. x/10i at 0x4013a9 - 0xa reveals no-op used to pad before execute_genie. jump to 0x4013a8 instead.
4. passed.