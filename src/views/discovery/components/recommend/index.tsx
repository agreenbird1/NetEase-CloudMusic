import { useAppDispatch, useAppSelector } from '@/store'
import { getRecommendBanners } from '@/store/discovery/recommend'
import {
  useEffect,
  useRef,
  type FC,
  type ReactNode,
  useState,
  useCallback,
} from 'react'
import RecommendWrapper from './index.styled'
import classnames from 'classnames'
import downloadImg from '@/assets/images/recommend-download.png'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const banners = useAppSelector(
    (state) => state.DiscoverySlice.RecommendSlice.banners
  )
  useEffect(() => {
    dispatch(getRecommendBanners())
  }, [dispatch])

  const [bannerIdx, setBannerIdx] = useState(0)
  const autoplayTimer = useRef<NodeJS.Timeout>()
  const startAutoplay = useCallback(() => {
    autoplayTimer.current = setInterval(() => {
      setBannerIdx((p) => (p + 1 >= banners.length ? 0 : p + 1))
    }, 3000)
  }, [banners])
  const stopAutoplay = () => {
    clearInterval(autoplayTimer.current)
  }
  const controlBanner = (val: number) => {
    stopAutoplay()
    setBannerIdx((p) =>
      p + val >= banners.length ? 0 : p + 1 < 0 ? banners.length - 1 : p + 1
    )
    startAutoplay()
  }

  useEffect(() => {
    banners && startAutoplay()
    return () => {
      clearInterval(autoplayTimer.current)
    }
  }, [banners, startAutoplay])

  return (
    <RecommendWrapper>
      <ul className="banner-wrapper">
        <span className="left-btn" onClick={() => controlBanner(-1)}>
          <iconpark-icon name="ChevronLeft"></iconpark-icon>
        </span>
        <span className="right-btn" onClick={() => controlBanner(1)}>
          <iconpark-icon name="ChevronRight"></iconpark-icon>
        </span>
        <ul className="dots">
          {banners &&
            banners.map((_, index) => (
              <li
                key={index}
                className={classnames('dot', {
                  active: bannerIdx === index,
                })}
                onClick={() => setBannerIdx(index)}
              ></li>
            ))}
        </ul>
        {banners &&
          banners.map((banner, index) => (
            <li
              key={index}
              className={classnames('banner', {
                active: bannerIdx === index,
              })}
              style={{
                background: `url("${banner.imageUrl}?imageView&blur=40x20") center center no-repeat`,
                backgroundSize: '6000px auto',
              }}
              onMouseEnter={() => stopAutoplay()}
              onMouseLeave={() => startAutoplay()}
            >
              <div className="img-wrapper">
                <img src={banner.imageUrl} draggable="false" />
                <div className="download">
                  <img src={downloadImg} draggable="false" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </RecommendWrapper>
  )
}

export default Recommend
