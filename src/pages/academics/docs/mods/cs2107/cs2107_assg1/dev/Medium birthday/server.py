# /usr/bin/python3
import os
from hashlib import sha512

FLAG = <REDACTED>

art = """
                           I     I     I
(          (    *         |V|   |V|   |V|        )   *   )       (
 )   *      )             | |   | |   | |        (       (   *    )
(          (           (*******************)    *       *    )    *
 (     (    (           (    *         *    )               )    (
)   * )    )          (   \|/       \|/   )         *    (      )
 (     (     *          (<<<<<<<<<*>>>>>>>>>)               )    (
)     )        ((*******************************))       (  *   )
 (     (   *     ((         HAPPY BIRTHDAY!!!!    ))      * )    (
) *   )        ((   *    *   *    *    *    *   ))   *   (      )
 (     (         ((  \|/  \|/ \|/  \|/  \|/  \|/  ))        )    (
*)     )        ((^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^))       (      )
(     (   (**********************************************) )  * (
"""

event = os.urandom(20)

def check(q1, q2) :
    return sha512(event + q1).digest()[:6] == sha512(event + q2).digest()[:6]

print(art)
print("\n૮ ˶ᵔ ᵕ ᵔ˶ ა It's Grandma Susan'oo's Birthday Party!!! ૮ ˶ᵔ ᵕ ᵔ˶ ა\n")
print(F"YOU COME AT THE RIGHT TIME! IT'S TIME FOR THE PRIZE GIVING EVENT - {event.hex()}\n")
print("Grandma Susan'oo has thought of a s'mple RULE to decide the winners!") 
print("Send hee two funny jokes and make her laugh!!!")
print("You will get the prize if you succesfully make her say SUSA ANOO!!\n")
q1 = input("Now send your first joke : ").encode()
q2 = input("Now send your second joke : ").encode()
if (q1 == q2) :
    print("Repeating your jokes doesn't make it funnier...")
    exit()
if (check(q1, q2)) :
    print("SUSA ANOO!!!")
    print(f"Here's your flag : {FLAG}")
else:
    print("Oof you failed... Grandma Susan'oo is CRYINGGGG!")
    print("Try again next year!")