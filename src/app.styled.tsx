import styled from 'styled-components'

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: #242424;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    span {
      font-size: 30px;
      color: #eee;
      font-family: Arial, Helvetica, sans-serif;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  .link {
    color: #ccc;
    outline: none;
    height: 100%;
    line-height: 70px;
    padding: 0 19px;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`

const AppFooter = styled.footer`
  background: #f2f2f2;
  .footer-content {
    width: 980px;
    margin: 0 auto;
    .links-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 33px;
      .link {
        width: 45px;
        margin-left: 80px;
        text-align: center;
        color: #666;
        span {
          display: inline-block;
          width: 100px;
          margin-top: 10px;
          margin-left: -27.5px;
          font-weight: 400;
          font-size: 12px;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
        }
        a {
          display: block;
          background: url('../src/assets/images/foot_list.png');
          background-size: 220px 220px;
          width: 45px;
          height: 45px;
        }
      }
      li:nth-child(1) a {
        background-position: -170px -5px;
        &:hover {
          background-position: -5px -115px;
        }
      }
      li:nth-child(2) a {
        background-position: -5px -170px;
        &:hover {
          background-position: -60px -170px;
        }
      }
      li:nth-child(3) a {
        background-position: -5px -60px;
        &:hover {
          background-position: -60px -5px;
        }
      }
      li:nth-child(4) a {
        background-position: -5px -170px;
        &:hover {
          background-position: -60px -170px;
        }
      }
      li:nth-child(5) a {
        background-position: -60px -60px;
        &:hover {
          background-position: -115px -5px;
        }
      }
      li:nth-child(6) a {
        background-position: -115px -115px;
        &:hover {
          background-position: -5px -5px;
        }
      }
      li:nth-child(7) a {
        background-position: -5px -170px;
        &:hover {
          background-position: -60px -170px;
        }
      }
      li:nth-child(8) a {
        background-position: -170px -115px;
        &:hover {
          background-position: -60px -115px;
        }
      }
    }
    .copy {
      padding-top: 44px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      font-size: 12px;
      .policy {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          padding: 0 10px;
          border-right: 1px solid #ccc;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        li:last-child {
          border-right: unset;
        }
      }
    }
  }
`

export { AppHeader, AppFooter }
