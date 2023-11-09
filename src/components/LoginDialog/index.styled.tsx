import styled from 'styled-components'

const LoginDialogWrapper = styled.div`
  width: 530px;
  height: 415px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .login-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2d2d2d;
    height: 38px;
    font-weight: bold;
    padding: 0 15px;
    color: #fff;
  }
  .code,
  .captcha {
    flex: 1;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    .other-way {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 15px;
      cursor: pointer;
      margin: 0;
      font-size: 14px;
      color: #2d2d2d;
    }
  }
  .code {
    .code-title {
      font-size: 20px;
      color: #2d2d2d;
      font-weight: 500;
    }
    .code-desc {
      color: #bbb;
      font-size: 12px;
      span {
        color: #0c73c2;
      }
    }
  }
  .captcha {
    .input-wrapper {
      padding: 80px 0 20px;
      input {
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 0 10px;
        font-size: 12px;
      }
      .phone-input {
        width: 320px;
      }
      .captcha-input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        .captcha-input {
          width: 192px;
        }
        span {
          width: 119px;
          height: 36px;
          border-radius: 20px;
          background: #ff3a3a;
          cursor: pointer;
          text-align: center;
          line-height: 36px;
          font-size: 14px;
          color: #fff;
        }
      }
      .login-button {
        margin-top: 20px;
        height: 36px;
        border-radius: 20px;
        background: #ff3a3a;
        color: #fff;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .error-message {
      font-size: 12px;
      color: #ff3a3a;
      display: inline-flex;
      align-items: center;
      margin-bottom: 0;
      div {
        height: 14px;
        width: 14px;
        background: #ff3a3a;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border-radius: 7px;
        margin-right: 5px;
      }
    }
  }
`

export default LoginDialogWrapper
