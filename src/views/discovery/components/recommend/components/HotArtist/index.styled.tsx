import styled from 'styled-components'

const HotArtistWrapper = styled.div`
  padding: 20px 0 14px 20px;
  border-left: 1px solid #d3d3d3;
  .artist-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .artist-info {
      height: 62px;
      border: 1px solid #e9e9e9;
      border-left: none;
      padding: 8px 14px 8px;
      .name {
        font-size: 14px;
      }
      .desc {
        margin-top: 8px;
        color: #666;
        font-size: 12px;
      }
    }
    &:hover {
      background: #fafafa;
      cursor: pointer;
    }
  }
`

export default HotArtistWrapper
