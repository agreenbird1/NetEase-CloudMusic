import type { FC, ReactNode } from 'react'
import pcImg from '@/assets/images/download-pc.jpeg'
import windowsImg from '@/assets/images/download-windows.png'
import macImg from '@/assets/images/download-mac.png'
import mobileImg from '@/assets/images/download-mobile.jpeg'
import androidImg from '@/assets/images/download-android.png'
import iosImg from '@/assets/images/download-ios.png'
import DownloadWrapper from './index.styled'
interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return (
    <DownloadWrapper>
      <div className="pc">
        <h3>在电脑上听</h3>
        <img height="273" src={pcImg} alt="pc" />
        <div className="download-buttons">
          <img height="44" src={windowsImg} alt="windows" />
          <img height="44" src={macImg} alt="mac" />
        </div>
        <div className="download">下载电脑端</div>
      </div>
      <div style={{ marginLeft: '100px' }} className="mobile">
        <h3>在手机上听</h3>
        <img height="273" src={mobileImg} alt="mobile" />
        <div className="download-buttons">
          <img height="44" src={androidImg} alt="android" />
          <img height="44" src={iosImg} alt="ios" />
        </div>
        <div className="download">下载手机端</div>
      </div>
    </DownloadWrapper>
  )
}

export default Download
