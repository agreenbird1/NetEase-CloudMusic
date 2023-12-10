import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const HotRankListWrapper = styled.div`
  margin-top: 20px;
  .content-wrapper {
    margin-top: 20px;
    height: 472px;
    background: url('https://s2.music.126.net/style/web2/img/index/index_bill.png?cabfb5a2c7d7217f956e889c3f124ba7')
      no-repeat;
    display: flex;
    .list-item {
      font-size: 12px;
      width: 230px;
      .list-cover {
        display: flex;
        padding: 20px 0 0 19px;
        height: 120px;
        img {
          width: 80px;
          height: 80px;
        }
        .cover-content {
          margin: 6px 0 0 10px;
          h3 {
            font-size: 14px;
            ${commonCss.hoverActive}
          }
          .btns {
            margin-top: 10px;
            span {
              display: inline-block;
              background: url('https://s2.music.126.net/style/web2/img/index/index.png?67f8bc9bb7c9b0d5d33f86372cd92f6d')
                no-repeat;
              width: 22px;
              height: 22px;
              cursor: pointer;
            }
            .play {
              margin-right: 10px;
              background-position: -267px -205px;
              &:hover {
                background-position: -267px -235px;
              }
            }
            .add {
              background-position: -300px -205px;
              &:hover {
                background-position: -300px -235px;
              }
            }
          }
        }
      }
      .track-list {
        padding: 0;
        .track {
          position: relative;
          padding-left: 18px;
          height: 32px;
          ${commonCss.vCenter}
          &:hover {
            .opener {
              display: block;
            }
            .name {
              width: 100px;
            }
          }
          &:nth-child(-n + 3) {
            .index {
              color: #c10d0c;
            }
          }
          /*
            不可这样写，因为是nth-child基于父元素选择
            但是目前每个track下只有一个index，所以全部都会应用上
            .index:nth-child(-n + 3) {
                color: #c10d0c;
            }
          */
          .index {
            font-size: 16px;
            width: 35px;
            text-align: center;
            color: #666;
          }
          .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            ${commonCss.hoverActive}
          }
          .opener {
            display: none;
            position: absolute;
            margin-top: 4px;
            right: 10px;
            span {
              display: inline-block;
              background: url('https://s2.music.126.net/style/web2/img/index/index.png?67f8bc9bb7c9b0d5d33f86372cd92f6d')
                no-repeat;
              width: 17px;
              height: 17px;
              cursor: pointer;
              &:nth-child(1) {
                background-position: -267px -268px;
                margin-right: 10px;
                &:hover {
                  background-position: -267px -288px;
                }
              }
              &:nth-child(2) {
                background: url('https://s2.music.126.net/style/web2/img/icon.png?0859fac5ba24e7b1bf3f1a7c7ddfc04b')
                  no-repeat;
                background-position: 0 -700px;
                margin: 2px 6px 0 0;
                &:hover {
                  background-position: -22px -700px;
                }
              }
              &:nth-child(3) {
                background-position: -297px -268px;
                &:hover {
                  background-position: -297px -288px;
                }
              }
            }
          }
        }
      }
      .all {
        height: 32px;
        line-height: 32px;
        text-align: right;
        margin-right: 32px;
        ${commonCss.hoverActive}
      }
    }
  }
`

export default HotRankListWrapper
