# shutdown command windows 10


https://gist.github.com/


## `shutdown command`

`shutdown -s -t XXXX`

`shutdown -s -t 7200`

`shutdown -r -t XXXX`

`shutdown -r -t 7200`
 
`shutdown -a`


`shutdown /?`
 


https://www.cnet.com/how-to/put-a-shutdown-timer-on-your-windows-desktop-with-this-command/


```md
Create a shutdown timer for Windows

To create a shutdown timer manually, open Command Prompt and type the command `shutdown -s -t XXXX`. 
The "XXXX" should be the time in seconds you want to elapse before the computer shuts down. 
For instance, if you want the computer to shut down in 2 hours, the command should look like `shutdown -s -t 7200`.

If you want to restart your computer on a delay, use `shutdown -r -t XXXX` instead.

To cancel the timer, open the Run window or Command Prompt again and enter `shutdown -a`.

```


https://technet.microsoft.com/en-us/library/cc770416(v=ws.11).aspx



```md

# Using a command line

Membership in the Administrators group, or equivalent, on the remote computer is the minimum required to complete this procedure.
To restart or shut down a remote computer and document the reason using the command line
Click Start, click All Programs, click Accessories, and click Command Prompt.
Type shutdown /[r|s] /m \\ComputerName /c "Comment" /d [u|p] <xx>:<yy> and then press ENTER.


Value   Description
/r
Restarts the remote computer.
/s
Shuts down the remote computer.
/m \\ ComputerName
Specifies the destination computer.
/c " Comment "
Enables you to comment in detail about the reason for the shutdown. You can use a maximum of 511 characters. Comments must be enclosed in quotation marks.
/d [u|p] xx : yy
Lists the reason for the system restart or shutdown, where xx specifies a major reason number from 0 through 255, and yy specifies a minor reason number from 0 through 65,535.
/force
Forces the computer to shut down if other users are logged in. If this is not used and other users are logged in to the remote computer, the computer will not shut down or restart.
ImportantImportant
If you force the computer to shut down or restart, logged in users will not have the opportunity to save their work.
/t xxx
Sets the time-out period before the system shuts down or restarts to xxx seconds. The valid range is 0-600, with a default of 30. Using the /t flag implies the /force option.
For more detailed information about the shutdown command and additional options, type shutdown /? at the command prompt.



```

https://www.isunshare.com/windows-10/4-ways-to-set-auto-shutdown-in-windows-10.html


http://www.digitalcitizen.life/7-ways-shut-down-or-restart-windows-10-pc-or-device

http://www.digitalcitizen.life/7-ways-launch-command-prompt-windows-7-windows-8

https://www.lifewire.com/shutdown-command-2618100





![](https://fthmb.tqn.com/bZdRLlKXoyHedDLjd3jWcTyT5HA=/768x0/filters:no_upscale()/about/shutdown-command-587958c65f9b584db38cff91.png)




![shutdown help](https://cloud.githubusercontent.com/assets/18028768/26030460/d1efbe28-3886-11e7-8e81-ab0c4255e8be.png)


![shutdown-command](https://cloud.githubusercontent.com/assets/18028768/26030461/d1f6ce20-3886-11e7-985c-6edde094e7d7.png)



# 2016 Google hosts 持续更新【更新于:2017-05】

https://laod.cn/hosts/2016-google-hosts.html

https://laod.cn/hosts/2017-google-hosts.html


https://iiio.io/download/20170509/


提取码：https 解压密码：laod.cn


Windows 开始 -> 运行 -> 输入cmd -> 在CMD窗口输入: ipconfig /flushdns


https://laod.cn/code-audit/how-does-google-find-our-pages.html

https://laod.cn/code-audit/jquery-is-not-a-function.html




```sh
Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

C:\Users\xray>shutdown -h

C:\Users\xray>shutdown /?
Usage: shutdown [/i | /l | /s | /r | /g | /a | /p | /h | /e | /o] [/hybrid] [/soft] [/fw] [/f]
    [/m \\computer][/t xxx][/d [p|u:]xx:yy [/c "comment"]]

    No args    Display help. This is the same as typing /?.
    /?         Display help. This is the same as not typing any options.
    /i         Display the graphical user interface (GUI).
               This must be the first option.
    /l         Log off. This cannot be used with /m or /d options.
    /s         Shutdown the computer.
    /r         Full shutdown and restart the computer.
    /g         Full shutdown and restart the computer. After the system is
               rebooted, restart any registered applications.
    /a         Abort a system shutdown.
               This can only be used during the time-out period.
               Combine with /fw to clear any pending boots to firmware.
    /p         Turn off the local computer with no time-out or warning.
               Can be used with /d and /f options.
    /h         Hibernate the local computer.
               Can be used with the /f option.
    /hybrid    Performs a shutdown of the computer and prepares it for fast startup.
               Must be used with /s option.
    /fw        Combine with a shutdown option to cause the next boot to go to the
               firmware user interface.
    /e         Document the reason for an unexpected shutdown of a computer.
    /o         Go to the advanced boot options menu and restart the computer.
               Must be used with /r option.
    /m \\computer Specify the target computer.
    /t xxx     Set the time-out period before shutdown to xxx seconds.
               The valid range is 0-315360000 (10 years), with a default of 30.
               If the timeout period is greater than 0, the /f parameter is
               implied.
    /c "comment" Comment on the reason for the restart or shutdown.
               Maximum of 512 characters allowed.
    /f         Force running applications to close without forewarning users.
               The /f parameter is implied when a value greater than 0 is
               specified for the /t parameter.
    /d [p|u:]xx:yy  Provide the reason for the restart or shutdown.
               p indicates that the restart or shutdown is planned.
               u indicates that the reason is user defined.
               If neither p nor u is specified the restart or shutdown is
               unplanned.
               xx is the major reason number (positive integer less than 256).
               yy is the minor reason number (positive integer less than 65536).

Reasons on this computer:
(E = Expected U = Unexpected P = planned, C = customer defined)
Type    Major   Minor   Title

 U      0       0       Other (Unplanned)
E       0       0       Other (Unplanned)
E P     0       0       Other (Planned)
 U      0       5       Other Failure: System Unresponsive
E       1       1       Hardware: Maintenance (Unplanned)
E P     1       1       Hardware: Maintenance (Planned)
E       1       2       Hardware: Installation (Unplanned)
E P     1       2       Hardware: Installation (Planned)
E       2       2       Operating System: Recovery (Unplanned)
E P     2       2       Operating System: Recovery (Planned)
  P     2       3       Operating System: Upgrade (Planned)
E       2       4       Operating System: Reconfiguration (Unplanned)
E P     2       4       Operating System: Reconfiguration (Planned)
  P     2       16      Operating System: Service pack (Planned)
        2       17      Operating System: Hot fix (Unplanned)
  P     2       17      Operating System: Hot fix (Planned)
        2       18      Operating System: Security fix (Unplanned)
  P     2       18      Operating System: Security fix (Planned)
E       4       1       Application: Maintenance (Unplanned)
E P     4       1       Application: Maintenance (Planned)
E P     4       2       Application: Installation (Planned)
E       4       5       Application: Unresponsive
E       4       6       Application: Unstable
 U      5       15      System Failure: Stop error
 U      5       19      Security issue (Unplanned)
E       5       19      Security issue (Unplanned)
E P     5       19      Security issue (Planned)
E       5       20      Loss of network connectivity (Unplanned)
 U      6       11      Power Failure: Cord Unplugged
 U      6       12      Power Failure: Environment
  P     7       0       Legacy API shutdown

C:\Users\xray>

```










