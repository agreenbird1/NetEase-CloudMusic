import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const SectionHeaderWrapper = styled.h3`
  ${commonCss.vCenter}
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  height: 35px;
  .left {
    ${commonCss.vCenter}
    gap: 8px;
    .dot {
      width: 15px;
      height: 15px;
      background: url('https://s2.music.126.net/style/web2/img/index/index.png?3cefa69390f4dc11ae92a49d9595c782')
        no-repeat;
      background-position: -235px -164px;
    }
    .title {
      font-size: 20px;
      font-weight: normal;
      cursor: pointer;
    }
  }
  .right {
    ${commonCss.vCenter}
    cursor: pointer;
    color: #666;
    font-size: 12px;
    .arrow {
      margin-left: 8px;
      width: 12px;
      height: 12px;
      background: url('https://s2.music.126.net/style/web2/img/index/index.png?3cefa69390f4dc11ae92a49d9595c782')
        no-repeat;
      background-position: 0 -240px;
    }
  }
`

export default SectionHeaderWrapper
