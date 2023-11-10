import {
  useState,
  type FC,
  type ReactNode,
  useEffect,
  useRef,
  FormEvent,
} from 'react'
import LoginDialogWrapper from './index.styled'
import Dialog from '../Dialog'
import { AuthApi } from '@/service/common'
import classNames from 'classnames'
import { phoneReg } from '@/constants'
interface IProps {
  children?: ReactNode
  handleClose: () => void
}

const LoginDialog: FC<IProps> = (props) => {
  const [loginType, setLoginType] = useState(2)
  const [qrImg, setQrImg] = useState('')
  const [qrImgStatus, setQrImgStatus] = useState(801) // 二维码状态，801 正常，800 已过期，802 待确认
  const timer = useRef<NodeJS.Timeout>()
  const codeTimer = useRef<NodeJS.Timeout>()
  const codeSendCountRef = useRef(60)
  const [codeSendCount, setCodeSendCount] = useState(codeSendCountRef.current)

  const [captchaInfo, setCaptchaInfo] = useState({
    phone: '17623352392',
    captcha: '',
  })
  const phoneInputRef = useRef()
  const captchaInputRef = useRef()
  const [errorMessage, setErrorMessage] = useState('')

  // 切换登录模式 需要重置状态
  const changeLoginType = (type: 1 | 2) => {
    setLoginType(type)
    if (type === 1) {
      getQRCode()
    } else {
      clearInterval(timer.current)
      setCaptchaInfo({
        phone: '',
        captcha: '',
      })
      setErrorMessage('')
    }
  }

  const getQRCode = async () => {
    clearInterval(timer.current)
    setQrImg('')
    const {
      data: { unikey },
    } = await AuthApi.generateQRCodeKey()
    const {
      data: { qrimg },
    } = await AuthApi.generateQRCode(unikey)
    setQrImgStatus(801)
    setQrImg(qrimg)
    timer.current = setInterval(() => {
      AuthApi.checkScanCodeStatus(unikey).then((res) => {
        console.log(res.code);

        if ([800, 803].includes(res.code)) {
          clearInterval(timer.current)
        }
        setQrImgStatus(res.code)
      })
    }, 1500)
  }

  useEffect(() => {
    // 卸载前移除timer
    return () => {
      clearInterval(timer.current)
      clearInterval(codeTimer.current)
    }
  }, [])

  const close = () => {
    props.handleClose()
  }

  const inputCaptcha = (
    e: FormEvent<HTMLInputElement>,
    key: 'phone' | 'captcha'
  ) => {
    setCaptchaInfo({
      ...captchaInfo,
      [key]: (e.target as HTMLInputElement).value,
    })
  }
  const checkPhone = () => {
    return new Promise((resolve, reject) => {
      // 状态而已
      if (captchaInfo.phone.trim()) {
        resolve('')
      } else {
        reject('')
        setErrorMessage('手机号不能为空!')
      }
      if (phoneReg.test(captchaInfo.phone)) {
        resolve('')
      } else {
        reject('')
        setErrorMessage('请输入正确的手机号!')
      }
    })
  }
  const sendCode = () => {
    checkPhone().then(() => {
      AuthApi.sendCode(captchaInfo.phone)
      codeTimer.current = setInterval(() => {
        codeSendCountRef.current--
        setCodeSendCount(codeSendCountRef.current)
        if (codeSendCountRef.current === 0) {
          clearInterval(codeTimer.current)
          codeTimer.current = undefined
          codeSendCountRef.current = 60
          setCodeSendCount(60)
        }
      }, 1000)
    })
  }
  const login = () => {
    checkPhone().then(() => {
      const captchaReg = /\d{4}/
      if (captchaReg.test(captchaInfo.captcha)) {
        AuthApi.verifyCode(captchaInfo.phone, captchaInfo.captcha).then(
          (res) => {
            if (res.code !== 200) {
              setErrorMessage('请输入正确的验证码！')
            }
          }
        )
      } else {
        setErrorMessage('请输入正确的验证码！')
      }
    })
  }

  return (
    <Dialog>
      <LoginDialogWrapper>
        <div className="login-header">
          <span>登录</span>
          <iconpark-icon
            style={{ color: '#eee', cursor: 'pointer' }}
            name="close-1"
            onClick={close}
          ></iconpark-icon>
        </div>
        {loginType == 1 && (
          <div className="code">
            <p className="code-title">扫码登录</p>
            {qrImg ? (
              <div className={classNames({ expired: qrImgStatus === 800 })}>
                <img height={200} src={qrImg} alt="qr code img" />
                {qrImgStatus === 800 && (
                  <span onClick={getQRCode}>重新获取</span>
                )}
                {qrImgStatus === 802 && <span>请在手机上确认</span>}
              </div>
            ) : (
              <div className="loading-qrimg">
                <iconpark-icon name="loading-02"></iconpark-icon>
              </div>
            )}
            <p className="code-desc">
              使用<span>网易云音乐APP</span>扫码登录
            </p>
            <p className="other-way" onClick={() => changeLoginType(2)}>
              使用验证码登录
            </p>
          </div>
        )}
        {loginType == 2 && (
          <div className="captcha">
            <div className="input-wrapper">
              <input
                ref={phoneInputRef.current}
                onInput={(e) => inputCaptcha(e, 'phone')}
                onFocus={() => setErrorMessage('')}
                className="phone-input"
                type="text"
                placeholder="请输入手机号"
              />
              <div className="captcha-input-wrapper">
                <input
                  ref={captchaInputRef.current}
                  onInput={(e) => inputCaptcha(e, 'captcha')}
                  onFocus={() => setErrorMessage('')}
                  className="captcha-input"
                  type="text"
                  placeholder="请输入验证码"
                />
                {codeTimer.current ? (
                  <span
                    style={{
                      backgroundColor: '#ddd',
                      color: '#999',
                      cursor: 'not-allowed',
                    }}
                  >
                    {codeSendCount}后重新发送
                  </span>
                ) : (
                  <span onClick={sendCode}>获取验证码</span>
                )}
              </div>
              {errorMessage && (
                <div className="error-message">
                  <div>
                    <iconpark-icon
                      style={{ color: '#fff' }}
                      name="close-1"
                    ></iconpark-icon>
                  </div>
                  {errorMessage}
                </div>
              )}
              <div className="login-button" onClick={login}>
                登录
              </div>
            </div>
            <p className="other-way" onClick={() => changeLoginType(1)}>
              扫码登录
            </p>
          </div>
        )}
      </LoginDialogWrapper>
    </Dialog>
  )
}

export default LoginDialog
