import styled from 'styled-components'

const AlbumCoverWrapper = styled.div`
  flex-shrink: 0;
  .img-wrapper {
    background: url('https://s2.music.126.net/style/web2/img/coverall.png?9802dbcaf51b0fd4c333eed800da299b')
      no-repeat;
    background-position: 0 -570px;
    cursor: pointer;
    img {
      height: 100%;
    }
  }

  .info {
    width: 100%;
    .name,
    .artist {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .name {
      margin: 6px 0 2px;
    }
    .artist {
      color: #666;
    }
  }
`

export default AlbumCoverWrapper
