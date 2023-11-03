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

const AppFooter = styled.footer``

export { AppHeader, AppFooter }
