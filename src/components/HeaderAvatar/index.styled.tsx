import styled from 'styled-components'

const HeaderAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 100%;
  &:hover {
    .avatar-menu {
      display: block;
    }
  }
  .avatar-wrapper {
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .avatar-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    z-index: 3;
    li {
      display: flex;
      align-items: center;
      height: 34px;
      padding-left: 24px;
      color: #ccc;
      font-size: 12px;
      &:hover {
        background: #353535;
        color: #fff;
        cursor: pointer;
      }
      i {
        display: inline-block;
        margin-right: 8px;
        width: 18px;
        height: 18px;
        background: url('https://s2.music.126.net/style/web2/img/frame/toplist.png?bf54ffda13443d0c377c9036b4fe5283')
          no-repeat 0 9999px;
      }
    }
  }
`

export default HeaderAvatarWrapper
