import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const CarouselWrapper = styled.div`
  ${commonCss.center}
  height: 40px;
  .page-list {
    display: inline-flex;
    gap: 5px;
    margin: 0 10px;
    .item {
      height: 22px;
      padding: 0 8px;
      background-color: #fff;
      line-height: 22px;
      border: 1px solid #ccc;
      border-radius: 2px;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        border: 1px solid #666;
      }
      &.active {
        background-color: #e1151d;
        border: 1px solid #a2161b;
        color: #fff;
      }
    }
  }
  .button {
    display: inline-flex;
    padding: 5px 10px;
    font-size: 12px;
    background: #eeeeee;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
    color: #333;
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`

export default CarouselWrapper
