import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const PlayListCoverWrapper = styled.div`
  .img-wrapper {
    position: relative;
    cursor: pointer;
    width: 140px;
    height: 140px;
    .counts {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 27px;
      ${commonCss.vCenter}
      background: url('https://s2.music.126.net/style/web2/img/coverall.png?9802dbcaf51b0fd4c333eed800da299b')
        no-repeat;
      background-position: 0 -537px;
      color: #ccc;
      font-size: 12px;
      .Headphones {
        width: 14px;
        height: 11px;
        background: url('https://s2.music.126.net/style/web2/img/iconall.png?9c2082701f2449f1abb6bc53b5e15405')
          no-repeat;
        background-position: 0 -24px;
        margin: 0 5px 0 10px;
      }
      .play {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        width: 16px;
        height: 17px;
        background-position: 0 0;
        background: url('https://s2.music.126.net/style/web2/img/iconall.png?9c2082701f2449f1abb6bc53b5e15405')
          no-repeat;
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
    .high-score {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      background: url('https://s2.music.126.net/style/web2/img/icon2.png?d1ad273b5d6066b7603f50a2372b003a')
        no-repeat;
      background-position: -135px -220px;
      opacity: 0.9;
    }
  }
  .info {
    .desc {
      font-size: 14px;
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 8px 0 4px;
      cursor: pointer;
    }
    .creator {
      width: 140px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .creator span,
    .desc {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default PlayListCoverWrapper
