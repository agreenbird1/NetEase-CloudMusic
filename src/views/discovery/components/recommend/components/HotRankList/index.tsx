import { type FC, type ReactNode, memo, useEffect } from 'react'
import HotRankListWrapper from './index.styled'
import SectionHeader from '../SectionHeader'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRankLists } from '@/store/discovery/recommend'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const HotRankList: FC<IProps> = () => {
  const rankList = useAppSelector(
    (state) => state.DiscoverySlice.RecommendSlice.rankList
  )

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRankLists())
  }, [dispatch])
  return (
    <HotRankListWrapper>
      <SectionHeader title="榜单" more="/discovery/toplist" />
      {rankList && (
        <ul className="content-wrapper">
          {rankList.map((listItem) => (
            <li className="list-item" key={listItem.id}>
              <div className="list-cover">
                <img
                  src={listItem.coverImgUrl}
                  draggable="false"
                  title={listItem.name}
                />
                <div className="cover-content">
                  <h3
                    onClick={() =>
                      navigate(`/discovery/toplist?id=${listItem.id}`)
                    }
                  >
                    {listItem.name}
                  </h3>
                  <div className="btns">
                    <span className="play"></span>
                    <span className="add"></span>
                  </div>
                </div>
              </div>
              <ol className="track-list">
                {listItem.tracks?.slice(0, 10)?.map((track, i) => (
                  <li key={track.id} className="track">
                    <span className="index">{i + 1}</span>
                    <span
                      className="name"
                      onClick={() => navigate(`/song?id=${track.id}`)}
                    >
                      {track.name}
                    </span>
                    <div className="opener">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </li>
                ))}
              </ol>
              <div
                className="all"
                onClick={() => navigate(`/discovery/toplist?id=${listItem.id}`)}
              >
                查看全部 &gt;
              </div>
            </li>
          ))}
        </ul>
      )}
    </HotRankListWrapper>
  )
}

export default memo(HotRankList)
