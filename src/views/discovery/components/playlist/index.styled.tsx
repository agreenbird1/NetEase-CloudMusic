import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const PlayListWrapper = styled.div`
  position: relative;
  zoom: 1;
  width: 980px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #d3d3d3;

  .title {
    position: relative;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 24px;
      font-weight: normal;
      ${commonCss.center}
      display: inline-flex;
      .choose {
        width: 90px;
        height: 30px;
        ${commonCss.center}
        color: #0c73c2;
        font-size: 12px;
        margin-left: 12px;
        background: #fbfbfb;
        border: 1px solid #c4c4c4;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
          background: #eae9e9;
        }
        .icon {
          margin-left: 5px;
        }
      }
    }
    .hot {
      ${commonCss.center}
      width: 46px;
      height: 30px;
      color: #fff;
      font-size: 12px;
      background-color: #b20a0a;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .playlists {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    column-gap: 49px;
  }

  .cats-selector {
    position: absolute;
    z-index: 1;
    width: 700px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding-bottom: 15px;
    background: #fff;
    top: 100%;
    left: -30px;
    h3 {
      height: 60px;
      padding-left: 30px;
      font-weight: normal;
      border-bottom: 1px solid #e6e6e6;
      span {
        font-size: 12px;
        width: 75px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        border-radius: 4px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
        border: 1px solid #ccc;
        color: #333;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    li {
      display: flex;
      font-size: 12px;
      & > span {
        flex-shrink: 0;
        height: 40px;
        width: 100px;
        line-height: 40px;
        padding-left: 40px;
        border-right: 1px solid #e6e6e6;
        font-weight: bold;
      }
      & > div {
        padding-top: 13px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        span {
          border-right: 1px solid #e6e6e6;
          padding: 0 8px;
          height: 14px;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
`

export default PlayListWrapper
