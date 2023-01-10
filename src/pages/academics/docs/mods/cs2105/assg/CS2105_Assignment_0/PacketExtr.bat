python PacketExtr.py < test/packets-a.in > run-a.out
cmp test/packets-a.out run-a.out

python PacketExtr.py < test/cases/PacketExtr/1.in > Packet1.out
cmp Packet1.out test/cases/PacketExtr/1.out

python PacketExtr.py < test/cases/PacketExtr/2.in > Packet2.out
cmp Packet2.out test/cases/PacketExtr/2.out

python PacketExtr.py < test/cases/PacketExtr/3.in > Packet3.out
cmp Packet3.out test/cases/PacketExtr/3.out