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

export class RecommendApi {
  static getBanners() {
    return request.get<{
      banners: IRecommendBanner[]
    }>('/banner')
  }
}
