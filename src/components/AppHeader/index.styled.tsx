import styled from "styled-components"

const AppHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: #242424;
  min-width: 1330px;
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
    &.active {
      position: relative;
      color: #fff;
      background: #000;
      &::before {
        content: '';
        position: absolute;
        border: 6px solid transparent;
        border-bottom: 6px solid #c20b0d;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }
  }
  .search-input {
    background: #fff;
    color: #ccc;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    gap: 5px;
    input {
      font-size: 12px;
      color: #aaa;
    }
  }
  .login {
    color: #ccc;
    margin-left: 20px;
    cursor: pointer;
  }
`

export default AppHeaderWrapper