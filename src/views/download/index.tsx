import type { FC, ReactNode } from 'react'
import DownloadWrapper from './index.styled'
interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return (
    <DownloadWrapper>
      <div className="pc">
        <h3>在电脑上听</h3>
        <img height="273" src="/src/assets/images/download-pc.jpeg" alt="pc" />
        <div className="download-buttons">
          <img
            height="44"
            src="/src/assets/images/download-windows.png"
            alt="windows"
          />
          <img
            height="44"
            src="/src/assets/images/download-mac.png"
            alt="mac"
          />
        </div>
        <div className="download">下载电脑端</div>
      </div>
      <div style={{ marginLeft: '100px' }} className="mobile">
        <h3>在手机上听</h3>
        <img
          height="273"
          src="/src/assets/images/download-mobile.jpeg"
          alt="mobile"
        />
        <div className="download-buttons">
          <img
            height="44"
            src="/src/assets/images/download-android.png"
            alt="android"
          />
          <img
            height="44"
            src="/src/assets/images/download-ios.png"
            alt="ios"
          />
        </div>
        <div className="download">下载手机端</div>
      </div>
    </DownloadWrapper>
  )
}

export default Download
