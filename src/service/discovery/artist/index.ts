import request from '../../'

// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队
export type IArtistType = -1 | 1 | 2 | 3
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
export type IArtistArea = -1 | 7 | 96 | 8 | 16 | 0

export interface IArtist {
  albumSize: number
  alias: string[]
  briefDesc: string
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

export class ArtistApi {
  static getArtists(params: {
    limit: number
    offset: number
    type?: IArtistType
    area?: IArtistArea
  }) {
    return request.get<{
      artists: IArtist[]
    }>('/artist/list', params)
  }
}
