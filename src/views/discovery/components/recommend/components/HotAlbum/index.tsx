import { type FC, type ReactNode, memo, useEffect } from 'react'
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
  return (
    <HotAlbumWrapper>
      <SectionHeader title="新碟上架" more="/discovery/album" />
      {newAlbums && (
        <div className="list-wrapper">
          <div className="move-wrapper">
            {newAlbums.map((album) => (
              <AlbumCover key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </HotAlbumWrapper>
  )
}

export default memo(HotAlbum)
