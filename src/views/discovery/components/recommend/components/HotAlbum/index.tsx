import { type FC, type ReactNode, memo, useEffect, useState } from 'react'
import HotAlbumWrapper from './index.styled'
import SectionHeader from '../SectionHeader'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRecommendNewAlbums } from '@/store/discovery/recommend'
import AlbumCover from '@/components/AlbumCover'

interface IProps {
  children?: ReactNode
}

const HotAlbum: FC<IProps> = () => {
  const newAlbums = useAppSelector(
    (state) => state.DiscoverySlice.RecommendSlice.newAlbums
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecommendNewAlbums())
  }, [dispatch])

  const [moveX, setMoveX] = useState(0)
  const changeMoveX = () => {
    setMoveX(moveX ? 0 : -645)
  }
  return (
    <HotAlbumWrapper>
      <SectionHeader title="新碟上架" more="/discovery/album" />
      {newAlbums && (
        <div className="list-wrapper">
          <span className="left-button" onClick={() => changeMoveX()}></span>
          <span className="right-button" onClick={() => changeMoveX()}></span>
          <div className="move-wrapper">
            <div
              className="move-content"
              style={{ transform: `translateX(${moveX}px)` }}
            >
              {newAlbums.map((album) => (
                <AlbumCover key={album.id} album={album} />
              ))}
            </div>
          </div>
        </div>
      )}
    </HotAlbumWrapper>
  )
}

export default memo(HotAlbum)
