import { type FC, type ReactNode, memo, useEffect } from 'react'
import HotArtistWrapper from './index.styled'
import { useAppDispatch, useAppSelector } from '@/store'
import { getHotArtist } from '@/store/discovery/recommend'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const HotArtist: FC<IProps> = () => {
  const navigate = useNavigate()
  const hotArtist = useAppSelector(
    (state) => state.DiscoverySlice.RecommendSlice.hotArtist
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getHotArtist())
  }, [dispatch])
  return (
    <HotArtistWrapper>
      {hotArtist &&
        hotArtist.map((artist) => (
          <div
            onClick={() => navigate(`/artist?id=${artist.id}`)}
            className="artist-item"
            key={artist.id}
          >
            <img width={62} height={62} src={artist.img1v1Url} alt="" />
            <div className="artist-info">
              <h4 className="name">{artist.name}</h4>
              <div className="desc">Hello, 我是 {artist.name}</div>
            </div>
          </div>
        ))}
    </HotArtistWrapper>
  )
}

export default memo(HotArtist)
