import request from '../index'


/**
 * 包含登录注册，token相关
 */
export class AuthApi {
  // 二维码登录前获取二维码生成key
  static generateQRCodeKey() {
    request.get('/login/qr/key')
  }
  // 根据qr key生成二维码
  static generateQRCode(key: string, qrimg = true) {
    request.get('/login/qr/create', {
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
    request.get('/login/qr/create', {
      key,
    })
  }
  // 刷新token，验证码登录下（token过期）可用。
  static refreshToken() {
    request.get('/login/refresh')
  }
  // 发送手机验证码
  static sendCode(phone: string) {
    request.get('/login/refresh', { phone })
  }
  // 验证验证码
  static verifyCode(phone: string, captcha: string) {
    request.get('/captcha/verify', { phone, captcha })
  }
}
