import request from '../../'

export interface IRecommendBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

export interface IHotPlayListCat {
  name: string
}

export interface INewAlbum {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags?: any
  blurPicUrl: string
  companyId: number
  pic: number
  artists: Artist[]
  alias: any[]
  copyrightId: number
  picId: number
  artist: Artist2
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  description: string
  tags: string
  status: number
  subType: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}
export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  trans: string
  alias: any[]
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}
export interface Artist {
  img1v1Id: number
  topicPerson: number
  trans: string
  alias: any[]
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  name: string
  id: number
  img1v1Id_str: string
}

export class RecommendApi {
  static getBanners() {
    return request.get<{
      banners: IRecommendBanner[]
    }>('/banner')
  }

  // 发现 推荐页热门歌单 分类
  static getHotPlayListCat() {
    return request.get<{
      tags: IHotPlayListCat[]
    }>('/playlist/hot')
  }
  // 发现 推荐页新碟
  static getNewAlbums() {
    return request.get<{
      total: number
      albums: INewAlbum[]
    }>('/album/new?limit=10')
  }
}
