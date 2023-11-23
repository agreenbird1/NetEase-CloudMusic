import commonCss from '@/assets/css/common.css'
import styled from 'styled-components'

const HotAlbumWrapper = styled.div`
  margin-top: 20px;

  .list-wrapper {
    ${commonCss.center}
    height: 184px;
    margin-top: 30px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;

    .move-wrapper {
      display: flex;
      width: 645px;
      gap: 11px;
      overflow: hidden;
      margin-left: 11px;
    }
  }
`

export default HotAlbumWrapper
