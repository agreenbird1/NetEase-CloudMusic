import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const PlayerWrapper = styled.div`
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
  .player {
    position: absolute;
    zoom: 1;
    top: -7px;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    transition: top 0.5s ease;
    &:hover {
      top: -53px;
    }

    .player-bar {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      display: flex;
      width: 980px;
      height: 47px;
      color: #fff;
      .play-btns {
        width: 137px;
        padding-top: 6px;
        .play-btn {
          display: inline-block;
          width: 28px;
          height: 28px;
          margin: 5px 8px 0 0;
          cursor: pointer;
        }
        .play-btn:nth-child(1) {
          background-position: 0 -130px;
          &:hover {
            background-position: -30px -130px;
          }
        }
        .play-btn:nth-child(3) {
          background-position: -80px -130px;
          &:hover {
            background-position: -110px -130px;
          }
        }
        .play-btn:nth-child(2) {
          width: 36px;
          height: 36px;
          margin-top: 0;
          background-position: 0 -204px;
          &:hover {
            background-position: -40px -204px;
          }
        }
        .playing {
          background-position: 0 -165px !important;
          &:hover {
            background-position: -40px -165px !important;
          }
        }
      }
    }

    .playlist {
      position: absolute;
      bottom: calc(100% - 6px);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      height: 300px;
      background: #161615;
      border-radius: 6px 6px 0 0;
      overflow: hidden;
      .playlist-wrapper {
        width: 553px;
        .title {
          ${commonCss.vCenter}
          justify-content: space-between;
          padding: 0 20px;
          .title-content {
            font-size: 14px;
            color: #e2e2e2;
            font-weight: bold;
          }
          .clear {
            ${commonCss.center}
            gap: 2px;
            font-size: 12px;
            color: #ccc;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
              color: #e2e2e2;
            }
          }
        }
        .playlist-content {
          .song {
            display: flex;
            align-items: center;
            color: #ccc;
            cursor: pointer;
            font-size: 12px;
            height: 28px;
            &:hover,
            &.active {
              color: #fff;
              background: #000;
              box-shadow: 0 0 0 1px #3e3c3c;
            }
            &:hover {
              .operation1 {
                visibility: unset;
              }
            }
            &.active {
              .play-btn {
                visibility: unset;
              }
            }
            .play-btn {
              visibility: hidden;
              width: 20px;
              height: 28px;
              padding-left: 10px;
              background: url(https://s2.music.126.net/style/web2/img/frame/playlist.png?872237551e830cebc89ddff76caf4058)
                no-repeat;
              background-position: -174px 8px;
            }
            .name {
              width: 260px;
              padding-left: 10px;
            }
            .ar-name {
              width: 80px;
              padding-left: 10px;
              ${commonCss.ellipsis}
            }
            .time {
              width: 45px;
              padding-left: 10px;
            }
            .operation1 {
              visibility: hidden;
              width: 88px;
              padding-left: 10px;
              scale: 0.9;
            }
            .delete-btn {
              background: url(https://s2.music.126.net/style/web2/img/frame/playlist.png?872237551e830cebc89ddff76caf4058)
                no-repeat;
              background-position: -51px 0;
              width: 20px;
              height: 18px;
              margin-left: 10px;
              margin-top: 5px;
            }
          }
        }
        .no-content {
          color: #aaa;
          padding-top: 85px;
          text-align: center;
          line-height: 43px;
          font-size: 12px;
          i {
            display: inline-block;
            width: 36px;
            height: 29px;
            margin-right: 3px;
            vertical-align: middle;
            background: url(https://s2.music.126.net/style/web2/img/frame/playlist.png?872237551e830cebc89ddff76caf4058)
              no-repeat;
            background-position: -138px 0;
          }
          span {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .lyrics-wrapper {
        width: 420px;
        background: #272827;
        .title {
          ${commonCss.center}
          span {
            width: 30px;
            color: #616161;
            &:hover {
              color: #7c7c7c;
            }
          }
          .title-content {
            text-align: center;
            font-size: 14px;
            color: #fff;
            flex: 1;
          }
          .close {
            cursor: pointer;
          }
        }
        .lyrics-content-wrapper {
          overflow-y: scroll;
          margin: 20px 0;
          &::-webkit-scrollbar {
            width: 8px; /* 滚动条的宽度 */
          }

          /* 设置滚动条的轨道样式 */
          &::-webkit-scrollbar-track {
            background-color: #272827; /* 滚动条轨道的背景颜色 */
          }

          /* 设置滚动条滑块的样式 */
          &::-webkit-scrollbar-thumb {
            background-color: #888; /* 滚动条滑块的背景颜色 */
            border-radius: 4px; /* 滚动条滑块的圆角 */
          }

          /* 设置滚动条滑块悬停时的样式 */
          &::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* 滚动条滑块悬停时的背景颜色 */
          }
          .lyrics {
            height: 220px;
            width: 354px;
            margin: 0 auto;
            .lyric {
              color: #989898;
              text-align: center;
              font-size: 12px;
              min-height: 32px;
              line-height: 32px;
            }
            .active {
              font-size: 14px;
              color: #fff;
            }
          }
        }
      }
      .title {
        background: #1e1e1e;
        height: 40px;
      }
    }

    .music {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 35px;
        height: 35px;
        margin: 6px 15px 0 0;
        border-radius: 3px;
      }
    }

    .play {
      width: 581px;
      .play-info {
        display: flex;
        align-items: center;
        gap: 15px;
        height: 28px;
        font-size: 12px;
        span {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .song-name {
          color: #e8e8e8;
        }
        .player-name {
          color: #9b9b9b;
        }
      }
      .play-progress {
        display: flex;
        align-items: center;
        font-size: 12px;
        .progress-bar {
          width: 466px;
          margin-right: 15px;
          .bar-bg {
            position: relative;
            height: 9px;
            background: #181818;
            border-radius: 5px;
            box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
            .ready-bar {
              position: absolute;
              height: 9px;
              border-radius: 5px;
              background: #535353;
            }
            .cur-bar {
              position: relative;
              height: 9px;
              background: #c70b0d;
              border-radius: 5px;
              .cur-btn {
                position: absolute;
                top: -7px;
                right: -13px;
                width: 22px;
                height: 24px;
                margin-left: -11px;
                cursor: pointer;
                background: url('https://s2.music.126.net/style/web2/img/iconall.png?3e746411716a04735638b6660887d68b')
                  no-repeat;
                background-position: 0 -250px;
                &:hover {
                  background-position: 0 -280px;
                }
              }
            }
          }
        }
        .time {
          color: #797979;
          span {
            color: #a1a1a1;
          }
        }
      }
    }
    .operation1,
    .operation2 {
      height: 47px;
      display: flex;
      align-items: center;
      gap: 2px;
      span {
        width: 25px;
        height: 25px;
        cursor: pointer;
        background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?cfe8bcbc552989bb8ccb3cea082c6d09)
          no-repeat;
      }
    }
    .operation1 {
      span:nth-child(1) {
        background: url(https://p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991.png) no-repeat 0 0;
        &:hover {
          background-position-y: -25px;
        }
      }
      span:nth-child(2) {
        background-position: -88px -163px;
        &:hover {
          background-position: -88px -189px;
        }
      }
      span:nth-child(3) {
        background-position: -114px -163px;
        &:hover {
          background-position: -114px -189px;
        }
      }
    }
    .operation2 {
      margin-left: 20px;
      span:nth-child(1) {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      span:nth-child(2) {
        background-position: -3px -344px;
        &:hover {
          background-position: -33px -344px;
        }
      }
      span:nth-child(3) {
        width: 59px;
        line-height: 25px;
        text-align: center;
        font-size: 12px;
        padding-left: 19px;
        box-sizing: border-box;
        background-position: -42px -68px;
        color: #666;
        &:hover {
          background-position: -42px -98px;
        }
      }
    }

    .lock,
    .bg,
    .lock-button,
    .play-btn {
      background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?cfe8bcbc552989bb8ccb3cea082c6d09)
        no-repeat;
    }
    .bg {
      height: 53px;
      zoom: 1;
      background-position: 0 0;
      background-repeat: repeat-x;
      background-size: 100% 616px;
    }
    .lock {
      position: absolute;
      top: -14px;
      right: 15px;
      width: 52px;
      height: 67px;
      background-position: 0 -380px;
      .lock-button {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
      }
      .locked {
        background-position: -100px -380px;

        &:hover {
          background-position: -100px -400px;
          cursor: pointer;
        }
      }
      .unlocked {
        background-position: -80px -380px;
        &:hover {
          background-position: -80px -400px;
          cursor: pointer;
        }
      }
    }
  }
  .player-locked {
    top: -53px;
  }
`

export default PlayerWrapper
