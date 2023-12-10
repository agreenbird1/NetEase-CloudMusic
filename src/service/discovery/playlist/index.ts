import request from '../../'

export interface IPlayListItem {
  name: string
  id: number
  trackNumberUpdateTime: number
  status: number
  userId: number
  createTime: number
  updateTime: number
  subscribedCount: number
  trackCount: number
  cloudTrackCount: number
  coverImgUrl: string
  iconImgUrl?: any
  coverImgId: number
  description: string
  tags: string[]
  playCount: number
  trackUpdateTime: number
  specialType: number
  totalDuration: number
  creator: Creator
  tracks?: Track[]
  subscribers: Subscriber[]
  subscribed: boolean
  commentThreadId: string
  newImported: boolean
  adType: number
  highQuality: boolean
  privacy: number
  ordered: boolean
  anonimous: boolean
  coverStatus: number
  recommendInfo?: any
  socialPlaylistCover?: any
  recommendText?: any
  coverText?: any
  relateResType?: any
  relateResId?: any
  shareCount: number
  alg: string
  commentCount: number
}
export interface Subscriber {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: any
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail?: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
}
export interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: string[]
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
}
export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}
export interface ICatDetail {
  name: string
  category: string
}

// 歌曲信息
export interface Track {
    name: string
    id: number
    pst: number
    t: number
    ar: Ar[]
    alia: any[]
    pop: number
    st: number
    rt: string
    fee: number
    v: number
    crbt: any
    cf: string
    al: Al
    dt: number
    h: H
    m: M
    l: L
    sq: Sq
    hr: Hr
    a: any
    cd: string
    no: number
    rtUrl: any
    ftype: number
    rtUrls: any[]
    djId: number
    copyright: number
    s_id: number
    mark: number
    originCoverType: number
    originSongSimpleData: any
    tagPicList: any
    resourceState: boolean
    version: number
    songJumpInfo: any
    entertainmentTags: any
    awardTags: any
    single: number
    noCopyrightRcmd: any
    rtype: number
    rurl: any
    mst: number
    cp: number
    mv: number
    publishTime: number
  }

  export interface Ar {
    id: number
    name: string
    tns: any[]
    alias: any[]
  }

  export interface Al {
    id: number
    name: string
    picUrl: string
    tns: any[]
    pic_str: string
    pic: number
  }

  export interface H {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface M {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface L {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface Sq {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface Hr {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }


export class PlayListApi {
  // 歌单分类
  static getPlayListCats() {
    return request.get<{
      categories: Record<string, string>
      sub: ICatDetail[]
    }>('/playlist/catlist')
  }
  // 获取歌单
  static getPlayLists(params: {
    limit: number
    offset: number
    cat?: string
    order?: 'new' | 'hot'
  }) {
    return request.get<{
      playlists: IPlayListItem[]
      total: number
      more: boolean
    }>('/top/playlist', params)
  }

  static getPlayListDetail(id: number) {
    return request.get<{
        playlist: IPlayListItem
      }>('/playlist/detail', { id })
  }
}
