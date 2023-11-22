import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const RecommendWrapper = styled.section`
  .banner-wrapper {
    position: relative;
    height: 284px;
    .left-btn,
    .right-btn {
        position: absolute;
        top: 50%;
        ${commonCss.center}
        width: 37px;
        height: 63px;
        color: #fff;
        font-size: 48px;
        cursor: pointer;
        z-index: 2;
        &:hover {
            background: rgba(0,0,0,.3);
        }
    }
    .left-btn {
        transform: translate(-50%, -50%);
        left: calc(50% - 552px);
    }
    .right-btn {
        transform: translate(-50%, -50%);
        left: calc(50% + 552px);
    }
    .dots {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 128px);
        transform: translateX(-50%);
        ${commonCss.center}
        gap: 20px;
        z-index: 2;
        .dot {
            background: #fff;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
                background: red;
            }
            &.active {
                background: red;
            }
        }
    }
    .banner {
      position: absolute;
      height: 284px;
      width: 100%;
      opacity: 0;
      transition: opacity 0.5s linear;
      .img-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        ${commonCss.center}
        height: 100%;
        img {
          width: 730px;
          height: 284px;
          cursor: pointer;
        }
        .download {
          width: 254px;
          height: 100%;
          background: rgba(0,0,0,.3);
          img {
            width: 100%;
          }
        }
      }
    }
    .active {
      opacity: 1;
      z-index: 1;
    }
  }
`

export default RecommendWrapper
