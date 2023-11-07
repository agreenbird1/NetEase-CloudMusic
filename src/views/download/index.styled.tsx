import styled from 'styled-components'

const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 668px;
  background-color: #222;
  & > div {
    height: 556px;
    width: 476px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      color: #ddd;
      margin-bottom: 20px;
    }
    .download-buttons {
      display: flex;
      gap: 20px;
      height: 44px;
      margin-bottom: 20px;
      img {
        cursor: pointer;
      }
    }
    .download {
      width: 300px;
      height: 65px;
      margin: 0 auto;
      border-radius: 65px;
      background-color: #fff;
      color: #d10000;
      font-size: 22px;
      line-height: 65px;
      text-align: center;
      cursor: pointer;
    }
  }
`

export default DownloadWrapper
