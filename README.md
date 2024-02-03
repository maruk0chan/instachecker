# instachecker

## What is this?
A script to find the difference between followers and account you following.

## How to use?
1. Use Google Chrome browser
2. Press Ctrl/Cmd+Alt+I to open Devtools "Console" tab
3. Press Ctrl/Cmd+shift+M to switch to mobile mode
4. Copy [index.js](https://github.com/maruk0chan/instachecker/blob/main/index.js) and change the `followerNum` and `followingNum` from 0 to the number of your current account followers and following
6. Go to https://www.instagram.com/[your_id]/followers/
8. Paste the [index.js](https://github.com/maruk0chan/instachecker/blob/main/index.js) script and run it by pressing Enter/Return key
9. It starts scrolling to the end of the list and a message will pop up
10. Go to https://www.instagram.com/[your_id]/followering/
11. Repeat step 8
12. You will get the result printed in the console

*The results are also saved in local storage with key `instachecker_history` (Under `Application` tab in Devtools)

## Disclaimer
The script is only for education and testing purpose. Please do not run without understanding the content.  
[WARNING from META](https://www.facebook.com/selfxss)
