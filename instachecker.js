let requestHeaders = {
  'x-asbd-id': '359341',
  'x-csrftoken': 'PiaAUpFKo1h7NQfdrgGceaJGzH8b9jZJ',
  'x-ig-app-id': '936619743392459',
  'x-ig-www-claim': 'hmac.AR16vzo3NLi6b4blY4zkRabTxUczXUSwgjemC5O_m4lsTW_q',
  'x-requested-with': 'XMLHttpRequest',
  'x-web-session-id': 'za65qk:juzqbv:1s4e7f',
}
let follower_usernames = new Set()
let following_usernames = new Set()
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

await fetchAll('followers', follower_usernames)
await fetchAll('following', following_usernames)

const arrayDifference = (arr1, arr2) => {
  // Create sets from the arrays to make comparisons easier
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  // Use the filter method to find elements in arr1 that are not in arr2
  const difference = [...set1].filter((item) => !set2.has(item))

  return difference
}

const accountIDontFollow = arrayDifference(
  follower_usernames,
  following_usernames
)
console.log("I'm not following: ", accountIDontFollow)
const accountNotFollowingMe = arrayDifference(
  following_usernames,
  follower_usernames
)
console.log('Not following me: ', accountNotFollowingMe)
