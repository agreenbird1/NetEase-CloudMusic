import { type FC, type ReactNode, memo } from 'react'
import PlayListCoverWrapper from './index.styled'
import { IPlayListItem } from '@/service/discovery/playlist'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  playListItem: IPlayListItem
}

const PlayListCover: FC<IProps> = ({ playListItem }) => {
  const navigate = useNavigate()

  return (
    <PlayListCoverWrapper>
      <div
        className="img-wrapper"
        onClick={() => navigate(`/playlist?id=${playListItem.id}`)}
      >
        {playListItem.highQuality && <i className="high-score"></i>}
        <img width={140} src={playListItem.coverImgUrl} draggable="false" />
        <div className="counts">
          <span className="Headphones"></span>
          <span className="number">
            {Math.floor(playListItem.playCount / 10000)}万
          </span>
          <span className="play"></span>
        </div>
      </div>
      <div className="info">
        <div
          className="desc"
          onClick={() => navigate(`/playlist?id=${playListItem.id}`)}
        >
          {playListItem.description}
        </div>
        <div
          className="creator"
          onClick={() =>
            navigate(`/user/home?id=${playListItem.creator.userId}`)
          }
        >
          <span style={{ color: '#999' }}>by </span>
          <span style={{ color: '#666' }}>{playListItem.creator.nickname}</span>
        </div>
      </div>
    </PlayListCoverWrapper>
  )
}

export default memo(PlayListCover)
