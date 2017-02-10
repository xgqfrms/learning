

Starting Nmap 7.12 ( https://nmap.org ) at 2017-02-11 02:24 China Standard Time

NSE: Loaded 138 scripts for scanning.

NSE: Script Pre-scanning.

Initiating NSE at 02:24

Completed NSE at 02:24, 0.00s elapsed

Initiating NSE at 02:24

Completed NSE at 02:24, 0.00s elapsed

Initiating Ping Scan at 02:24

Scanning 121.201.63.168 [4 ports]

Completed Ping Scan at 02:24, 2.15s elapsed (1 total hosts)

Initiating Parallel DNS resolution of 1 host. at 02:24

Completed Parallel DNS resolution of 1 host. at 02:24, 0.28s elapsed

Initiating SYN Stealth Scan at 02:24

Scanning 121.201.63.168 (121.201.63.168) [1000 ports]

Discovered open port 3306/tcp on 121.201.63.168

Discovered open port 80/tcp on 121.201.63.168

Discovered open port 22/tcp on 121.201.63.168

Discovered open port 8080/tcp on 121.201.63.168

Discovered open port 8888/tcp on 121.201.63.168

Completed SYN Stealth Scan at 02:25, 25.63s elapsed (1000 total ports)

Initiating Service scan at 02:25

Scanning 5 services on 121.201.63.168 (121.201.63.168)

Completed Service scan at 02:25, 11.23s elapsed (5 services on 1 host)

Initiating OS detection (try #1) against 121.201.63.168 (121.201.63.168)

Retrying OS detection (try #2) against 121.201.63.168 (121.201.63.168)

Initiating Traceroute at 02:25

Completed Traceroute at 02:25, 6.06s elapsed

Initiating Parallel DNS resolution of 4 hosts. at 02:25

Completed Parallel DNS resolution of 4 hosts. at 02:25, 0.07s elapsed

NSE: Script scanning 121.201.63.168.

Initiating NSE at 02:25

Completed NSE at 02:25, 12.79s elapsed

Initiating NSE at 02:25

Completed NSE at 02:25, 0.00s elapsed

Nmap scan report for 121.201.63.168 (121.201.63.168)

Host is up (0.14s latency).

Not shown: 989 filtered ports

PORT      STATE  SERVICE    VERSION

22/tcp    open   ssh        OpenSSH 5.3 (protocol 2.0)

| ssh-hostkey: 

|_  2048 50:e9:44:87:86:c3:0f:85:ab:41:5e:33:1e:5b:6a:c1 (RSA)

80/tcp    open   http       nginx 1.9.3

| http-methods: 

|_  Supported Methods: GET HEAD POST OPTIONS

|_http-server-header: nginx/1.9.3

|_http-title: Did not follow redirect to http://www.qlcoder.com/

3306/tcp  open   mysql      MySQL (unauthorized)

5000/tcp  closed upnp

5900/tcp  closed vnc

8080/tcp  open   http       nginx 1.9.3

| http-methods: 

|_  Supported Methods: GET HEAD POST OPTIONS

|_http-server-header: nginx/1.9.3

|_http-title: Did not follow redirect to http://www.qlcoder.com/

8888/tcp  open   http       nginx 1.9.3

|_http-server-header: nginx/1.9.3

|_http-title: Error

9090/tcp  closed zeus-admin

10012/tcp closed unknown

18040/tcp closed unknown

18101/tcp closed unknown

Device type: general purpose|firewall|storage-misc

Running (JUST GUESSING): Linux 2.6.X|3.X|4.X (92%), WatchGuard Fireware 11.X (92%), Synology DiskStation Manager 5.X (91%), FreeBSD 6.X (85%)

OS CPE: cpe:/o:linux:linux_kernel:2.6.32 cpe:/o:watchguard:fireware:11.8 cpe:/o:linux:linux_kernel cpe:/a:synology:diskstation_manager:5.1 cpe:/o:linux:linux_kernel:3.10 cpe:/o:linux:linux_kernel:4.0 cpe:/o:freebsd:freebsd:6.2

Aggressive OS guesses: Linux 2.6.32 (92%), WatchGuard Fireware 11.8 (92%), Synology DiskStation Manager 5.1 (91%), Linux 2.6.39 (91%), Linux 3.10 (91%), Linux 2.6.32 or 3.10 (91%), Linux 3.4 (91%), Linux 3.1 - 3.2 (89%), Linux 2.6.32 - 2.6.39 (89%), Linux 4.0 (86%)

No exact OS matches for host (test conditions non-ideal).

Uptime guess: 0.048 days (since Sat Feb 11 01:17:02 2017)

Network Distance: 22 hops

TCP Sequence Prediction: Difficulty=262 (Good luck!)

IP ID Sequence Generation: All zeros



TRACEROUTE (using port 5900/tcp)

HOP RTT       ADDRESS

1   0.00 ms   phicomm.me (192.168.2.1)

2   62.00 ms  100.107.0.1

3   ... 15

16  40.00 ms  112.90.178.18

17  ... 21

22  107.00 ms 121.201.63.168 (121.201.63.168)



NSE: Script Post-scanning.

Initiating NSE at 02:25

Completed NSE at 02:25, 0.00s elapsed

Initiating NSE at 02:25

Completed NSE at 02:25, 0.00s elapsed

Read data files from: H:\Program Files (x86)\Nmap

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .

Nmap done: 1 IP address (1 host up) scanned in 70.28 seconds

           Raw packets sent: 5121 (229.504KB) | Rcvd: 187 (9.793KB)
