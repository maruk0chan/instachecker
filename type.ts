export interface Response {
  users: User[]
  big_list: boolean
  page_size: number
  next_max_id: string
  groups: Group[]
  more_groups_available: boolean
  has_more: boolean
  should_limit_list_of_followers: boolean
  use_clickable_see_more: boolean
  show_spam_follow_request_tab: boolean
  follow_ranking_token: string
  status: string
}

export interface Group {
  group: string
  title: string
  context: string
  facepile: User[]
  subtitle: string
  subtitle_button_text: string
  category: string
  actions: string[]
  show_hashtag_icon: boolean
}

export interface User {
  strong_id__: string
  pk: string
  pk_id: string
  full_name: string
  fbid_v2?: string
  third_party_downloads_enabled?: number
  id: string
  profile_pic_id?: string
  profile_pic_url?: string
  is_verified?: boolean
  username: string
  is_private?: boolean
  has_anonymous_profile_picture?: boolean
  account_badges?: any[]
  latest_reel_media?: number
  reel_media_seen_timestamp?: number
}
