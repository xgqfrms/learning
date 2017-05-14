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


# 2016 Google hosts 持续更新【更新于:2017-05】

https://laod.cn/hosts/2016-google-hosts.html















