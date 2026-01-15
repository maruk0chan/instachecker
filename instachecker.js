let requestHeaders = {
  'x-asbd-id': '359341',
  'x-csrftoken': 'PiaAUpFKo1h7NQfdrgGceaJGzH8b9jZJ',
  'x-ig-app-id': '936619743392459',
  'x-ig-www-claim': 'hmac.AR16vzo3NLi6b4blY4zkRabTxUczXUSwgjemC5O_m4lsTW_q',
  'x-requested-with': 'XMLHttpRequest',
  'x-web-session-id': 'za65qk:juzqbv:1s4e7f',
}
let followers = new Set()
let following = new Set()
let user_id = '9299519515'
let user_username = 'lun.lunan'

const fetchUsers = (type, maxId) =>
  fetch(
    `https://www.instagram.com/api/v1/friendships/${user_id}/${type}/?count=12${
      maxId ? `&max_id=${maxId}` : ''
    }&search_surface=follow_list_page`,
    {
      headers: requestHeaders,
      referrer: `https://www.instagram.com/${user_username}/${type}/`,
    }
  )

async function fetchAll(type, usernames) {
  let nextMaxId
  while (true) {
    try {
      const json = await (await fetchUsers(type, nextMaxId)).json()
      json.users.forEach((user) => usernames.add(user.username))
      console.log(json)
      if (!json.next_max_id) break
      nextMaxId = json.next_max_id
    } catch (error) {
      console.error(error)
      break
    }
  }
}

fetchAll('followers', followers)
await fetchAll('following', following)

const arrayDifference = (arr1, arr2) => {
  // Create sets from the arrays to make comparisons easier
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  // Use the filter method to find elements in arr1 that are not in arr2
  const difference = [...set1].filter((item) => !set2.has(item))

  return difference
}

const accountIDontFollow = arrayDifference(followers, following)
console.log("I'm not following: ", accountIDontFollow)
const accountNotFollowingMe = arrayDifference(following, followers)
console.log('Not following me: ', accountNotFollowingMe)

const today = new Date().toISOString()

const defaultHistory = {
  followers: [],
  following: [],
  followerNum: 0,
  followingNum: 0,
  accountIDontFollow: [],
  accountNotFollowingMe: [],
  newFollowers: [],
  newFollowing: [],
  goneFollowers: [],
  unFollowing: [],
}

const existingHistory = JSON.parse(
  localStorage.getItem('instachecker_history')
) ?? {
  [today]: defaultHistory,
}

// get last time run results
const lastTimeRunResults = Object.values(existingHistory).find((v, i) => {
  if (existingHistory.length === 0) return defaultHistory
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

// if no changes
if (
  newFollowers.length === 0 &&
  goneFollowers.length === 0 &&
  newFollowing.length === 0 &&
  unFollowing.length === 0
) {
  console.log('No changes and no log will be saved')
} else {
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
        newFollowers,
        newFollowing,
        goneFollowers,
        unFollowing,
      },
    })
  )
  console.log('Log has been saved')
}
