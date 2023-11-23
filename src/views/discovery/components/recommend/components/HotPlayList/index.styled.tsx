import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const HotPlayListWrapper = styled.div`
  .header-cats {
    ${commonCss.vCenter}
    gap: 8px;
    font-size: 12px;
    color: #666;
    font-weight: normal;
    align-self: end;
  }
  .list-wrapper {
    margin-top: 30px;
    display: flex;
    gap: 42px;
    flex-wrap: wrap;
  }
`

export default HotPlayListWrapper
