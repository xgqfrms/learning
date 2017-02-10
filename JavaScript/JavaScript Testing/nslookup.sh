Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

G:\JavaScript Testing>nslookup -type=PTR 208.97.177.124.in-addr.arpa
Server:  phicomm.me
Address:  192.168.2.1

Non-authoritative answer:
208.97.177.124.in-addr.arpa     name = CPE-124-177-97-208.lns6.cha.bigpond.net.au

G:\JavaScript Testing>nslookup -type=PTR 208.97.177.124
Server:  phicomm.me
Address:  192.168.2.1

Non-authoritative answer:
124.177.97.208.in-addr.arpa     name = apache2-argon.william-floyd.dreamhost.com

G:\JavaScript Testing>nslookup -type=PTR 208.97.177.124 in-addr.arpa
*** Can't find server address for 'in-addr.arpa':
Server:  phicomm.me
Address:  192.168.2.1

Non-authoritative answer:
124.177.97.208.in-addr.arpa     name = apache2-argon.william-floyd.dreamhost.com

G:\JavaScript Testing>
