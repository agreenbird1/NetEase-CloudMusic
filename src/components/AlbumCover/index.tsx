import { type FC, type ReactNode, memo } from 'react'
import AlbumCoverWrapper from './index.styled'
import { INewAlbum } from '@/service/discovery/recommend'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  album: INewAlbum
}

const AlbumCover: FC<IProps> = ({ album }) => {
  const navigate = useNavigate()
  return (
    <AlbumCoverWrapper style={{ width: '118px' }}>
      <div
        className="img-wrapper"
        style={{ height: '100px' }}
        onClick={() => navigate(`/album?id=${album.id}`)}
      >
        <img src={album.picUrl} draggable="false" />
      </div>
      <div className="info">
        <div className="name" onClick={() => navigate(`/album?id=${album.id}`)}>
          {album.name}
        </div>
        <div
          className="artist"
          onClick={() => navigate(`/artist?id=${album.artist.id}`)}
        >
          {album.artist.name}
        </div>
      </div>
    </AlbumCoverWrapper>
  )
}

export default memo(AlbumCover)
