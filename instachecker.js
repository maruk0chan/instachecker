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
let followerEndpoint = `https://www.instagram.com/api/v1/friendships/${user_id}/followers/?count=12&search_surface=follow_list_page`
let followingEndpoint = `https://www.instagram.com/api/v1/friendships/${user_id}/following/?count=12&search_surface=follow_list_page`

const fetchFollowers = (maxId) =>
  fetch(`${followerEndpoint}${maxId ? `&max_id=${maxId}` : ''}`, {
    headers: requestHeaders,
    referrer: `https://www.instagram.com/${user_username}/followers/`,
  })

const fetchFollowing = (maxId) =>
  fetch(`${followingEndpoint}${maxId ? `&max_id=${maxId}` : ''}`, {
    headers: requestHeaders,
    referrer: `https://www.instagram.com/${user_username}/following/`,
  })

async function fetchAllFollowers() {
  let nextMaxId
  while (true) {
    try {
      const json = await (await fetchFollowers(nextMaxId)).json()
      json.users.forEach((user) => follower_usernames.add(user.username))
      console.log(json)
      if (!json.next_max_id) break
      nextMaxId = json.next_max_id
    } catch (error) {
      console.error(error)
      break
    }
  }
}
async function fetchAllFollowing() {
  let nextMaxId
  while (true) {
    try {
      const json = await (await fetchFollowing(nextMaxId)).json()
      json.users.forEach((user) => following_usernames.add(user.username))
      console.log(json)
      if (!json.next_max_id) break
      nextMaxId = json.next_max_id
    } catch (error) {
      console.error(error)
      break
    }
  }
}
fetchAllFollowers()
fetchAllFollowing()
