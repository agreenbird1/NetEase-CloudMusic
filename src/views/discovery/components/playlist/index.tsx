import { useAppDispatch, useAppSelector } from '@/store'
import { getPlayListCats, getPlayLists } from '@/store/discovery/playlist'
import { useEffect, type FC, type ReactNode, useState } from 'react'
import PlayListWrapper from './index.styled'
import PlayListCover from '@/components/PlayListCover'
import { shallowEqual } from 'react-redux'
import { ICatDetail } from '@/service/discovery/playlist'
import Carousel from '@/components/Carousel'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Playlist: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const defaultCat = searchParams.get('cat') || '全部'
  const defaultOrder = searchParams.get('order') || 'hot'

  const [cat, setCat] = useState(defaultCat)
  const [order, setOrder] = useState(defaultOrder)
  const [currentPage, setCurrentPage] = useState(1)
  const [showCats, setShowCats] = useState(false)
  const pageCount = 30

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
  const { total = 0, playlists } = useAppSelector(
    (state) => state.DiscoverySlice.PlaylistSlice.playlistsInfo,
    shallowEqual
  )

  useEffect(() => {
    dispatch(getPlayListCats())
    dispatch(
      // @ts-ignore
      getPlayLists({
        limit: pageCount,
        offset: 0,
      })
    )
  }, [dispatch])

  const changePage = (currentPage: number) => {
    dispatch(
      // @ts-ignore
      getPlayLists({
        limit: pageCount,
        offset: currentPage * (pageCount - 1),
      })
    )
    setCurrentPage(currentPage)
  }

  const changeOrder = (newOrder: string) => {
    setOrder(newOrder)
    setCurrentPage(1)
    dispatch(
      // @ts-ignore
      getPlayLists({
        limit: pageCount,
        offset: 0,
        order: newOrder,
        cat,
      })
    )
  }

  const changeCat = (newCat: string) => {
    setCat(newCat)
    setCurrentPage(1)
    setShowCats(false)
    dispatch(
      // @ts-ignore
      getPlayLists({
        limit: pageCount,
        offset: 0,
        order,
        cat: newCat,
      })
    )
  }

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
        <div
          className="hot"
          onClick={() => changeOrder(order === 'hot' ? 'new' : 'hot')}
        >
          {order === 'hot' ? '最新' : '最热'}
        </div>
        {showCats && (
          <ul className="cats-selector">
            <h3>
              <span onClick={() => changeCat('全部')}>全部风格</span>
            </h3>
            {categories &&
              Object.values(categories).map((k, i) => (
                <li key={k}>
                  <span>{k}</span>
                  <div>
                    {catList[i].map((cat) => (
                      <span key={cat.name} onClick={() => changeCat(cat.name)}>
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
      <ul className="playlists">
        {playlists &&
          playlists.map((p) => <PlayListCover key={p.id} playListItem={p} />)}
      </ul>
      {total ? (
        <Carousel
          currentPage={currentPage}
          total={total}
          pageCount={30}
          changePage={changePage}
        />
      ) : (
        <div className='empty'>没有找到您想要的资源！</div>
      )}
    </PlayListWrapper>
  )
}

export default Playlist
