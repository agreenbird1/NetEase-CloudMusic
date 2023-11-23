import { type FC, type ReactNode, memo, useEffect } from 'react'
import HotPlayListWrapper from './index.styled'
import PlayListCover from '@/components/PlayListCover'
import { useAppDispatch, useAppSelector } from '@/store'
import { getRecommendHotPlayList } from '@/store/discovery/recommend'
import SectionHeader from '../SectionHeader'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const HotPlayList: FC<IProps> = () => {
  const { hotCats, hotPlayList } = useAppSelector((state) => ({
    hotCats: state.DiscoverySlice.RecommendSlice.hotCats,
    hotPlayList: state.DiscoverySlice.RecommendSlice.hotPlayList,
  }))
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecommendHotPlayList())
  }, [dispatch])

  return (
    <HotPlayListWrapper>
      <SectionHeader title="热门推荐" more="/discovery/playlist">
        <div className="header-cats">
          {hotCats &&
            hotCats.map((cat) => (
              <Link to={`/discovery/playlist?cat=${cat.name}`} key={cat.name}>
                {cat.name}
              </Link>
            ))}
        </div>
      </SectionHeader>

      {hotPlayList && (
        <div className='list-wrapper'>
          {hotPlayList.slice(0, 8).map((item) => (
            <PlayListCover key={item.id} playListItem={item} />
          ))}
        </div>
      )}
    </HotPlayListWrapper>
  )
}

export default memo(HotPlayList)
