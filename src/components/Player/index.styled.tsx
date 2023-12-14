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
        background: url(https://p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991.png)
          no-repeat 0 0;
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
