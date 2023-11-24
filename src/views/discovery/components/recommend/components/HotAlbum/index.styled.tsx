import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const HotAlbumWrapper = styled.div`
  margin-top: 20px;

  .list-wrapper {
    position: relative;
    ${commonCss.center}
    height: 184px;
    margin-top: 30px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    .left-button,
    .right-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 17px;
      height: 17px;
      background: url('https://s2.music.126.net/style/web2/img/index/index.png?3cefa69390f4dc11ae92a49d9595c782')
        no-repeat;
      cursor: pointer;
    }
    .left-button {
      left: 10px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .right-button {
      right: 10px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .move-wrapper {
      width: 634px;
      overflow: hidden;
      .move-content {
        display: flex;
        gap: 11px;
      }
    }
  }
`

export default HotAlbumWrapper
