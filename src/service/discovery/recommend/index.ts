import request from '../../'

export class RecommendApi {
  static getBanners() {
    return request.get('/banner')
  }
}
