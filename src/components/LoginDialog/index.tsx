import { useState, type FC, type ReactNode } from 'react'
import LoginDialogWrapper from './index.styled'
import Dialog from '../Dialog'

interface IProps {
  children?: ReactNode
  handleClose: () => void
}

const LoginDialog: FC<IProps> = (props) => {
  const [loginType, setLoginType] = useState(1)
  const [errorMessage] = useState('')
  const close = () => {
    props.handleClose()
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
            <img
              height={200}
              src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg"
              alt=""
            />
            <p className="code-desc">
              使用<span>网易云音乐APP</span>扫码登录
            </p>
            <p className="other-way" onClick={() => setLoginType(2)}>
              使用验证码登录
            </p>
          </div>
        )}
        {loginType == 2 && (
          <div className="captcha">
            <div className="input-wrapper">
              <input
                className="phone-input"
                type="text"
                placeholder="请输入手机号"
              />
              <div className="captcha-input-wrapper">
                <input
                  className="captcha-input"
                  type="text"
                  placeholder="请输入验证码"
                />
                <span>获取验证码</span>
              </div>
              {errorMessage && (
                <p className="error-message">
                  <div>
                    <iconpark-icon
                      style={{ color: '#fff' }}
                      name="close-1"
                    ></iconpark-icon>
                  </div>
                  {errorMessage}
                </p>
              )}
              <div className="login-button">登录</div>
            </div>
            <p className="other-way" onClick={() => setLoginType(1)}>
              扫码登录
            </p>
          </div>
        )}
      </LoginDialogWrapper>
    </Dialog>
  )
}

export default LoginDialog
