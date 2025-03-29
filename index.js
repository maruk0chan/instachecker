// 1. navigate to the followers page using mobile viewport (Chrome)
// - press F12 to open devtools
// - press Ctrl/Cmd+shift+M switch to mobile mode

// 2. confirm the id span element by classname has not been changed
const idSpanElementClassName = '_ap3a _aaco _aacw _aacx _aad7 _aade' // DON'T ADD fullstop .

// 3. enter followerNum to match with followers or following number
const followerNum = 0 // change this to the number of followers/following you have
const followingNum = 0 // change this to the number of followers/following you have

// get whether the page is follower or following
const pageType = location.pathname
  .split('/')
  .filter((v) => v !== '')
  .at(-1)
let followNum = pageType === 'followers' ? followerNum : followingNum

if (followNum === 0) {
  console.log(
    'Please set the followerNum to the number of followers/following you have'
  )
}
const scrollToBottom = () => {
  // For modern browsers
  document.documentElement.scrollTop = document.documentElement.scrollHeight

  // For older browsers
  document.body.scrollTop = document.body.scrollHeight
}
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const getIdList = () => {
  const idNodeList = document.getElementsByClassName(idSpanElementClassName)
  let list = []
  for (const node of idNodeList) {
    const id = node.innerText
    list.push(id)
  }
  return { idList: list.sort(), length: list.length }
}

let shownFollowerNum = 0
let resultList

while (shownFollowerNum < followNum) {
  scrollToBottom()
  const { idList, length } = getIdList()
  resultList = idList
  shownFollowerNum = length
  await delay(500)
}

const stringifiedResultList = JSON.stringify(resultList)
localStorage.setItem(
  pageType === 'followers' ? 'followers' : 'following',
  stringifiedResultList
)

// 4. find difference if the page is following
if (pageType === 'followers') {
  console.log('Finish saving followers list. Now go to following page')
} else {
  const arrayDifference = (arr1, arr2) => {
    // Create sets from the arrays to make comparisons easier
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    // Use the filter method to find elements in arr1 that are not in arr2
    const difference = [...set1].filter((item) => !set2.has(item))

    return difference
  }

  const followers = JSON.parse(localStorage.getItem('followers'))
  const following = JSON.parse(localStorage.getItem('following'))

  const accountIDontFollow = arrayDifference(followers, following)
  console.log("I'm not following: ", accountIDontFollow)
  const accountNotFollowingMe = arrayDifference(following, followers)
  console.log('Not following me: ', accountNotFollowingMe)

  // ignore first run and ONLY save second run time
  const today = new Date().toISOString()

  const existingHistory = JSON.parse(
    localStorage.getItem('instachecker_history')
  )

  // get last time run results
  const lastTimeRunResults = Object.values(existingHistory).find((v, i) => {
    if (Object.keys(existingHistory).length - 1 === i) {
      return v
    }
  })
  const lastTimeFollowers = lastTimeRunResults.followers ?? []
  const lastTimeFollowing = lastTimeRunResults.following ?? []

  // compare with past followers and following
  const newFollowers = followers.filter((f) => !lastTimeFollowers.includes(f))
  const goneFollowers = lastTimeFollowers.filter((f) => !followers.includes(f))
  const newFollowing = following.filter((f) => !lastTimeFollowing.includes(f))
  const unFollowing = lastTimeFollowing.filter((f) => !following.includes(f))

  console.log('newFollowers', newFollowers)
  console.log('newFollowing', newFollowing)
  console.log('goneFollowers', goneFollowers)
  console.log('unFollowing', unFollowing)

  // create localStorage object
  localStorage.setItem(
    'instachecker_history',
    JSON.stringify({
      ...existingHistory,
      [today]: {
        followers,
        following,
        followerNum,
        followingNum,
        accountIDontFollow,
        accountNotFollowingMe,
      },
    })
  )
}
