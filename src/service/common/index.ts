import request from '../index'
import { BaseData } from '../type'


export interface IUserProfile {
    avatarUrl: string
    backgroundUrl: string
    nickname: string
    description: string
    detailDescription: string
}

export interface ILoginResponse {
    profile: IUserProfile
    token: string
    cookie: string
    loginType: number
    account: any
}

/**
 * 包含登录注册，token相关
 */
export class AuthApi {
  // 二维码登录前获取二维码生成key
  static generateQRCodeKey() {
    return request.get<BaseData<{
      code: number
      unikey: string
    }>>('/login/qr/key')
  }
  // 根据qr key生成二维码
  static generateQRCode(key: string, qrimg = true) {
    return request.get<BaseData<{
      qrurl: string
      qrimg: string
    }>>('/login/qr/create', {
      key,
      qrimg,
    })
  }
  /**
   * 轮训查询登录状态
   * 如扫码后返回502,则需加上noCookie参数,如&noCookie=true
   * @param key
   * @returns code 800-二维码过期 801-等待扫码 802-待确认 803-登录成功(含cookies),
   */
  static checkScanCodeStatus(key: string) {
    return request.get('/login/qr/check', {
      key,
    })
  }
  // 刷新token，验证码登录下（token过期）可用。
  static refreshToken() {
    return request.get('/login/refresh')
  }
  // 发送手机验证码
  static sendCode(phone: string) {
    return request.get('/captcha/sent', { phone })
  }
  // 验证验证码
  static verifyCode(phone: string, captcha: string) {
    return request.get('/captcha/verify', { phone, captcha })
  }
  static loginByCaptcha(phone: string, captcha: string) {
    return request.get<ILoginResponse>('/login/cellphone', { phone, captcha })
  }
}
