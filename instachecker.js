let requestHeaders = {
  "accept": "*/*",
  "accept-language": "ja,en-US;q=0.9,en;q=0.8,zh-TW;q=0.7,zh;q=0.6",
  "priority": "u=1, i",
  "sec-ch-prefers-color-scheme": "dark",
  "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
  "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.193\", \"Chromium\";v=\"143.0.7499.193\", \"Not A(Brand\";v=\"24.0.0.0\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": "\"\"",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-ch-ua-platform-version": "\"26.1.0\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-asbd-id": "359341",
  "x-csrftoken": "PiaAUpFKo1h7NQfdrgGceaJGzH8b9jZJ",
  "x-ig-app-id": "936619743392459",
  "x-ig-www-claim": "hmac.AR16vzo3NLi6b4blY4zkRabTxUczXUSwgjemC5O_m4lsTW_q",
  "x-requested-with": "XMLHttpRequest",
  "x-web-session-id": "sr544g:juzqbv:7ftux4"
}
let next_max_id = null
let follower_usernames = []

const firstFetch = () =>
  fetch(
    'https://www.instagram.com/api/v1/friendships/9299519515/followers/?count=12&search_surface=follow_list_page',
    {
      headers: requestHeaders,
      referrer: 'https://www.instagram.com/lun.lunan/followers/',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    }
  )

const nextFetch = (next_max_id) =>
  fetch(
    `https://www.instagram.com/api/v1/friendships/9299519515/followers/?count=12&max_id=${next_max_id}&search_surface=follow_list_page`,
    {
      headers: requestHeaders,
      referrer: 'https://www.instagram.com/lun.lunan/followers/',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    }
  )

firstFetch()
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    next_max_id = json.next_max_id
    follower_usernames = [
      ...follower_usernames,
      ...json.users.map((user) => user.username),
    ]
    console.log(json)
    while
  })
  .catch(console.error)

nextFetch(next_max_id)
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    next_max_id = json.next_max_id
    follower_usernames = [
      ...follower_usernames,
      ...json.users.map((user) => user.username),
    ]
    console.log(json)
  })
  .catch(console.error)

const res = {
  users: [
    {
      strong_id__: '187175818',
      pk: '187175818',
      pk_id: '187175818',
      id: '187175818',
      full_name: 'Lai Him',
      fbid_v2: '17841401194542924',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3745734258293180599_187175818',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/566795943_18537835996039819_2263177742199731584_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=107\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=C2bZ3Aocc5wQ7kNvwEvmfdg\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfpInHCrPmNDKnzFmoTx4nEHXSaB0t4CT8J6TYPrLoXZxQ\u0026oe=696E912E\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'hurricane_him',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '1847984',
      pk: '1847984',
      pk_id: '1847984',
      id: '1847984',
      full_name: 'Dap',
      fbid_v2: '17841401679520028',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3566244686429969139_1847984',
      profile_pic_url:
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/479179571_18489924565055985_5557847198633918112_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-1.cdninstagram.com\u0026_nc_cat=109\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=OZIYmLfNEQYQ7kNvwGgGqk3\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afp9SIb2DSLA07iANSlhQ9PZKslFC0kD18ynXvcpgEn0RQ\u0026oe=696EAFD9\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'd_dddddap',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 1768474910,
    },
    {
      strong_id__: '1356990554',
      pk: '1356990554',
      pk_id: '1356990554',
      id: '1356990554',
      full_name: '🧚🏻‍♀️✨💫',
      fbid_v2: '17841401876641202',
      third_party_downloads_enabled: 0,
      profile_pic_id: '1943060832767514396_1356990554',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/46860667_2058362437587311_2644256247108337664_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=111\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=yfkbuMVDzeIQ7kNvwEYl8Qp\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfoS3qsY86hpu2jlRpRePdaM46w2S198zaEz9qXuv2Zz4w\u0026oe=696EBBC6\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'aliceintheidleland',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '24593449',
      pk: '24593449',
      pk_id: '24593449',
      id: '24593449',
      full_name: 'N G A M A N🌼',
      fbid_v2: '17841400523470384',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3762884389517826003_24593449',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/576006096_18540909334017450_743900865555008752_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=106\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=PPmo_fp4W-gQ7kNvwHRh6UX\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afp7K0o6qgXlPGcZu1W4AzNrL05zx5D3PxlnVIkpcwha6g\u0026oe=696E86F4\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'rrring_chan',
      is_private: false,
      has_anonymous_profile_picture: false,
      reel_media_seen_timestamp: 1768392460,
      account_badges: [],
      latest_reel_media: 1768392460,
    },
    {
      strong_id__: '73497008861',
      pk: '73497008861',
      pk_id: '73497008861',
      id: '73497008861',
      full_name: 'Milkshake',
      fbid_v2: '17841473465837126',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3593746579967586173_73497008861',
      profile_pic_url:
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/485635646_623248507261959_8187827752012245095_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-1.cdninstagram.com\u0026_nc_cat=103\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=us98RxGJ48kQ7kNvwHgWM6e\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afp-C1ojlrFN1chj0vC11uEjKOhA_ej4RLEuEfop04r32w\u0026oe=696EAC98\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'ilovmilkshake',
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '860555615',
      pk: '860555615',
      pk_id: '860555615',
      id: '860555615',
      full_name: 'Mei Mei',
      fbid_v2: '17841400348463446',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3061728401417852794_860555615',
      profile_pic_url:
        'https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/336812307_569450511615710_8618674644684734796_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-2.cdninstagram.com\u0026_nc_cat=102\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=ZnaScHpxz-MQ7kNvwHqxwMF\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afq5y3XCeu4tfqwJ8r9k-1d8YBoWb12h0T5Gix15IZ3Vzg\u0026oe=696EA4C0\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'shiba.gun.may',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '1518780431',
      pk: '1518780431',
      pk_id: '1518780431',
      id: '1518780431',
      full_name: 'Tom Tang',
      fbid_v2: '17841401812953730',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3078706749083834576_1518780431',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/340508006_518284353642022_5604260048451791211_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=110\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=lbpxfuDgXbcQ7kNvwFXb7JU\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfptlArzPUEuUTLOV9S-WnhhY3VKvcnfhR0-aEGyJrGhFw\u0026oe=696E9451\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'tomutang',
      is_private: true,
      has_anonymous_profile_picture: false,
      reel_media_seen_timestamp: 1768398300,
      account_badges: [],
      latest_reel_media: 1768398300,
    },
    {
      strong_id__: '5355621843',
      pk: '5355621843',
      pk_id: '5355621843',
      id: '5355621843',
      full_name: 'Ka Ka',
      fbid_v2: '17841405455299452',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3061834235813312333_5355621843',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/336325611_601175695210967_1072669134329475580_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MDAuYzIifQ\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=111\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=XrmL96hnVVcQ7kNvwHHwZsc\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afo-Bi636CjYPsgQHJtsvjeHE0Wfhe0CHoFQ3n533MmvHA\u0026oe=696E8A8C\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'ka_ka258',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '337648002',
      pk: '337648002',
      pk_id: '337648002',
      id: '337648002',
      full_name: 'Ka Ching Lee',
      fbid_v2: '17841401440065275',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3223515299701340384_337648002',
      profile_pic_url:
        'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/396729733_1322528595046714_8201657429378446289_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=110\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=TkYIAqAAmHoQ7kNvwGp3HeB\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfpJdHZINBKXuHXf0y3rLUlYSZIhCzd_lXLcYXSlgIc0Xw\u0026oe=696E8A3D\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'kachinglee',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '4767631152',
      pk: '4767631152',
      pk_id: '4767631152',
      id: '4767631152',
      full_name: 'reyu',
      fbid_v2: '17841404774585953',
      third_party_downloads_enabled: 0,
      profile_pic_url:
        'https://instagram.fgau1-4.fna.fbcdn.net/v/t51.2885-19/573323465_1219825463302212_7278921664109726296_n.png?stp=dst-jpg_e0_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xNTAuYzIifQ\u0026_nc_ht=instagram.fgau1-4.fna.fbcdn.net\u0026_nc_cat=1\u0026_nc_oc=Q6cZ2QErocRwTXXM7vqG_dYw7o3dv1eBDKHFExUCPVgg4r3yOG0BZbFCP2tNG6HhSv5jsuRxj0Lfhd0fYZpAz4lUse-h\u0026_nc_ohc=Vz-r0K6PSJQQ7kNvwEVtkmj\u0026_nc_gid=FEqlc_19AN62tW0JIr4qWw\u0026edm=AL4D0a4BAAAA\u0026ccb=7-5\u0026ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.3-ccb7-5\u0026oh=00_AfrqitBX-wgzlNW6IPuKyS5ORqzHOBruoxND5NO0i2zzOA\u0026oe=696E91AA\u0026_nc_sid=9e8221',
      is_verified: false,
      username: 'reeeeeyu',
      is_private: false,
      has_anonymous_profile_picture: true,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '77364334908',
      pk: '77364334908',
      pk_id: '77364334908',
      id: '77364334908',
      full_name: 'ほの',
      fbid_v2: '17841477487250541',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3748907870336405169_77364334908',
      profile_pic_url:
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/568083626_17848553715582909_7708912181793544079_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-1.cdninstagram.com\u0026_nc_cat=109\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=vxdbUYaCopoQ7kNvwFX1cwi\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afq9hoWLpeNIY0UcVWfDAYLTB7z-CLtYvC0wdYYvVGsOcg\u0026oe=696E8D29\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'hono.s_u_b.v3',
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      strong_id__: '76636399107',
      pk: '76636399107',
      pk_id: '76636399107',
      id: '76636399107',
      full_name: 'な　つ　め',
      fbid_v2: '17841476773219549',
      third_party_downloads_enabled: 0,
      profile_pic_id: '3706056890864815952_76636399107',
      profile_pic_url:
        'https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/537033084_17844023784559108_2614007951878495152_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-2.cdninstagram.com\u0026_nc_cat=104\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=P5NgYEPiHMwQ7kNvwH7CcTI\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfpZqcgMCYMu7au_GuvozzxKkbddTZjYEgvzwIPHPChxHg\u0026oe=696EAE8D\u0026_nc_sid=6ff7c8',
      is_verified: false,
      username: 'po__0711',
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
  ],
  big_list: true,
  page_size: 12,
  next_max_id:
    'QVFBZjhUOFlKbnU0ZjNVQ1M3Q09yR0Y0ZFFWMW8tYjEtdVhxQWRHZUx1VDBpdHBTTm05eDVHT2w1QUpJMjc1eEExTjVYV21hamduVkR6eHZvZDZ1NmU1Zg==',
  groups: [
    {
      group: 'non_recip_followers',
      title: 'あなたがフォローバックしていない人',
      context: 'crup_tokyo、他4人',
      facepile: [
        {
          strong_id__: '46176727800',
          pk: '46176727800',
          pk_id: '46176727800',
          full_name: '国際交流 / International party🎉',
          fbid_v2: '17841446314012090',
          third_party_downloads_enabled: 0,
          id: '46176727800',
          profile_pic_id: '2738813384852844541_46176727800',
          profile_pic_url:
            'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/270190156_3036458663331574_1723969110610839217_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=110\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=gqUf_Qh-5TMQ7kNvwEWVS-h\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfpsABPuUmKR3VaXpumdntHZbExtDqKlUCOLlCSFapGAhw\u0026oe=696EBAF1\u0026_nc_sid=6ff7c8',
          is_verified: false,
          username: 'crup_tokyo',
          is_private: true,
          has_anonymous_profile_picture: false,
          account_badges: [],
        },
        {
          strong_id__: '9405642451',
          pk: '9405642451',
          pk_id: '9405642451',
          full_name: '巧',
          fbid_v2: '17841409433535705',
          third_party_downloads_enabled: 0,
          id: '9405642451',
          profile_pic_id: '1921882688945675143_9405642451',
          profile_pic_url:
            'https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/46122927_272956680232625_7173228320765509632_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt6-1.cdninstagram.com\u0026_nc_cat=105\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=eMKvdW00ihMQ7kNvwGHXkcj\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afp80kGkElKUMIwiB74PJ9TbYGib7v_pS5jaMGgm3EcfMQ\u0026oe=696EB605\u0026_nc_sid=6ff7c8',
          is_verified: false,
          username: 'kimagure.montaku',
          is_private: true,
          has_anonymous_profile_picture: false,
          account_badges: [],
        },
      ],
      subtitle: '',
      subtitle_button_text: '',
      category: '',
      actions: ['remove_follower'],
      show_hashtag_icon: false,
    },
    {
      group: 'least_interacted_with_followers',
      title: 'やりとりが少ない人',
      context: 'tsugumifukuda、他49人',
      facepile: [
        {
          strong_id__: '2225385749',
          pk: '2225385749',
          pk_id: '2225385749',
          full_name: 'hodos  つぐみ',
          fbid_v2: '17841402212478173',
          third_party_downloads_enabled: 1,
          id: '2225385749',
          profile_pic_id: '3692493927908807987_2225385749',
          profile_pic_url:
            'https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/528226546_18474987853073750_952834494423690824_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-2.cdninstagram.com\u0026_nc_cat=102\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=eqOOoqSa-agQ7kNvwHi69sq\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afpc44qWvIi42qIr--ixxQ7WruRJEhG_oNWTjxz07lwF-g\u0026oe=696E9735\u0026_nc_sid=6ff7c8',
          is_verified: false,
          username: 'tsugumifukuda',
          is_private: false,
          has_anonymous_profile_picture: false,
          account_badges: [],
        },
        {
          strong_id__: '21287849485',
          pk: '21287849485',
          pk_id: '21287849485',
          full_name: 'Misaki',
          fbid_v2: '17841421164570981',
          third_party_downloads_enabled: 0,
          id: '21287849485',
          profile_pic_id: '2270141338823890375_21287849485',
          profile_pic_url:
            'https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/90392923_212373313168288_505984754202443776_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=scontent-nrt1-2.cdninstagram.com\u0026_nc_cat=104\u0026_nc_oc=Q6cZ2QE8B4P9IifP4avHU9gXVo2NR9z1qrQKv3XRK_c1uf0-BsToRyCWntay77q5Sf8V_vI\u0026_nc_ohc=L5vR7-ikolkQ7kNvwE1_TcE\u0026_nc_gid=7bvMxJWLd6ND6jiodkczQw\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfqqU18fBTuYgVbIKossmI_fPM-4IUgJJQRsibDrFLvbWw\u0026oe=696E8ED0\u0026_nc_sid=6ff7c8',
          is_verified: false,
          username: 'misamisa_0423',
          is_private: false,
          has_anonymous_profile_picture: false,
          account_badges: [],
        },
      ],
      subtitle: '過去90日間のやり取りが最も少ないアカウントです。',
      subtitle_button_text: '',
      category: '',
      actions: ['remove_follower'],
      show_hashtag_icon: false,
    },
    {
      group: 'self_deactivated_followers',
      title: '利用解除済みアカウント',
      context: '404__traum、他5人',
      facepile: [
        {
          strong_id__: '74707283779',
          pk: '74707283779',
          pk_id: '74707283779',
          full_name: 'Marianne',
          id: '74707283779',
          username: '404__traum',
        },
        {
          strong_id__: '66538680598',
          pk: '66538680598',
          pk_id: '66538680598',
          full_name: 'Marianne',
          id: '66538680598',
          username: '404_traum',
        },
      ],
      subtitle: '',
      subtitle_button_text: '',
      category: '',
      actions: ['remove_follower'],
      show_hashtag_icon: false,
    },
  ],
  more_groups_available: false,
  has_more: true,
  should_limit_list_of_followers: false,
  use_clickable_see_more: false,
  show_spam_follow_request_tab: false,
  follow_ranking_token: '04ed3383674f48459d8ffd4a6a04cb53|9299519515|osr',
  status: 'ok',
}

// export interface Response {
//   users: User[]
//   big_list: boolean
//   page_size: number
//   next_max_id: string
//   groups: Group[]
//   more_groups_available: boolean
//   has_more: boolean
//   should_limit_list_of_followers: boolean
//   use_clickable_see_more: boolean
//   show_spam_follow_request_tab: boolean
//   follow_ranking_token: string
//   status: string
// }

// export interface Group {
//   group: string
//   title: string
//   context: string
//   facepile: User[]
//   subtitle: string
//   subtitle_button_text: string
//   category: string
//   actions: string[]
//   show_hashtag_icon: boolean
// }

// export interface User {
//   strong_id__: string
//   pk: string
//   pk_id: string
//   full_name: string
//   fbid_v2?: string
//   third_party_downloads_enabled?: number
//   id: string
//   profile_pic_id?: string
//   profile_pic_url?: string
//   is_verified?: boolean
//   username: string
//   is_private?: boolean
//   has_anonymous_profile_picture?: boolean
//   account_badges?: any[]
//   latest_reel_media?: number
//   reel_media_seen_timestamp?: number
// }
