# instachecker

## What is this?
A script to find the difference between followers and account you following.

## How to use?
1. Use Google Chrome browser
2. Press Ctrl/Cmd+Alt+I to open Devtools "Console" tab
3. Press Ctrl/Cmd+shift+M to switch to mobile mode
4. Copy [index.js](https://github.com/maruk0chan/instachecker/blob/main/index.js) and change the `followerNum` and `followingNum` from 0 to the number of your current account followers and following
5. Confirm the class name is correct (press Ctrl/Cmd+shift+C to click the id or right click the id and select "Inspect")
![image](https://github.com/maruk0chan/instachecker/assets/104617343/a9ec4a1c-0234-4d4c-8e59-3abf5f23c2c6)
6. Go to https://www.instagram.com/[your_id]/followers/
7. Paste the [index.js](https://github.com/maruk0chan/instachecker/blob/main/index.js) script and press Enter/Return key to execute
8. It starts scrolling to the end of the list and a message will pop up
9. Go to https://www.instagram.com/[your_id]/followering/
10. Paste the [index.js](https://github.com/maruk0chan/instachecker/blob/main/index.js) script and press Enter/Return key to execute
11. You will get the result printed in the console

*The results are also saved in local storage with key `instachecker_history` (Under `Application` tab in Devtools)

## Disclaimer
The script is only for education and testing purpose. Please do not run without understanding the content.  
[WARNING from META](https://www.facebook.com/selfxss)
