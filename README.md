# instachecker

## What is this?
A script to find the difference between followers and account you following.

## How to use?
1. Use Google Chrome browser
2. Press F12 to open Devtools
3. Press Ctrl/Cmd+shift+M to switch to mobile mode
4. Match `followerNum` and `followingNum` in `index.js` with your current account followers and following
5. Go to https://www.instagram.com/[your_id]/followers/
6. Go to "Console" tab in Devtools (Ctrl/Cmd+alt+I)
7. Paste the `index.js` script and run it by pressing Enter/Return key
8. Wait until it automatically scrolls to the bottom and a message will tell you to go to following page
9. Repeat step 7
10. You will get the result printed in the console

*The results are also saved in local storage with key `instachecker_history`
