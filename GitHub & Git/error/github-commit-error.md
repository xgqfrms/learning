# github-commit-error


https://gist.github.com/xgqfrms-GitHub/1908b6f4f858345ecfb0fb57fef24857


这个问题可能是由于使用了不兼容版本的cygwin DLL。

```sh
Windows PowerShell
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

      2 [main] ssh-agent (4388) C:\Users\xray\AppData\Local\GitHub\PortableGit_f02737a78695063deace08e96d5042710d3e32db\usr\bin\ssh-agent.exe: *** fatal error - cygheap base mismatch detected - 0x13A7408/0x1417408.
This problem is probably due to using incompatible versions of the cygwin DLL.
Search for cygwin1.dll using the Windows Start->Find/Search facility
and delete all but the most recent version.  The most recent version *should*
reside in x:\cygwin\bin, where 'x' is the drive on which you have
installed the cygwin distribution.  Rebooting is also suggested if you
are unable to find another cygwin DLL.
      1 [main] ssh-agent 2584 fork: child -1 - forked process 4388 died unexpectedly, retry 0, exit code 0xC0000142, errno 11
fork: Resource temporarily unavailable
Could not open a connection to your authentication agent.
G:\wwwRoot\learning [gh-pages ↑13]>

``` 


















