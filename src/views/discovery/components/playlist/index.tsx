import { useAppDispatch, useAppSelector } from '@/store'
import { getPlayListCats, getPlayLists } from '@/store/discovery/playlist'
import { useEffect, type FC, type ReactNode, useState } from 'react'
import PlayListWrapper from './index.styled'
import PlayListCover from '@/components/PlayListCover'
import { shallowEqual } from 'react-redux'
import { ICatDetail } from '@/service/discovery/playlist'
import Carousel from '@/components/Carousel'

interface IProps {
  children?: ReactNode
}

const Playlist: FC<IProps> = () => {
  const [cat] = useState('全部')
  const [showCats, setShowCats] = useState(false)

  const dispatch = useAppDispatch()
  const { categories, catList } = useAppSelector((state) => {
    const { categories, sub } = state.DiscoverySlice.PlaylistSlice.cats
    const catList: Record<string, ICatDetail[]> = {}
    sub?.forEach((s) => {
      if (catList[s.category]) catList[s.category].push(s)
      else catList[s.category] = []
    })
    return {
      categories,
      catList,
    }
  }, shallowEqual)
  const { total, playlists } = useAppSelector(
    (state) => state.DiscoverySlice.PlaylistSlice.playlistsInfo,
    shallowEqual
  )

  useEffect(() => {
    dispatch(getPlayListCats())
    dispatch(
      // @ts-ignore
      getPlayLists({
        limit: 35,
        offset: 0,
      })
    )
  }, [dispatch])

  return (
    <PlayListWrapper>
      <div className="title">
        <h3>
          {cat}
          <div className="choose" onClick={() => setShowCats(!showCats)}>
            选择分类{''}
            <iconpark-icon className="icon" name="ChevronDown"></iconpark-icon>
          </div>
        </h3>
        <div className="hot">热门</div>
        {showCats && (
          <ul className="cats-selector">
            <h3>
              <span>全部风格</span>
            </h3>
            {categories &&
              Object.values(categories).map((k, i) => (
                <li key={k}>
                  <span>{k}</span>
                  <div>
                    {catList[i].map((cat) => (
                      <span key={cat.name}>{cat.name}</span>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
      <ul className="playlists">
        {playlists &&
          playlists.map((p) => <PlayListCover key={p.name} playListItem={p} />)}
      </ul>
      <Carousel total={total} pageCount={30} />
    </PlayListWrapper>
  )
}

export default Playlist
