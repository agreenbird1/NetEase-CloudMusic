import type { FC, ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import DiscoveryWrapper from './index.styled'

interface IProps {
  children?: ReactNode
}

const Discovery: FC<IProps> = () => {
  const location = useLocation()
  return (
    <DiscoveryWrapper>
      <nav>
        <Link
          className={classnames({ active: location.pathname == '/discovery' })}
          to="/discovery"
        >
          推荐
        </Link>
        <Link
          className={classnames({
            active: location.pathname == '/discovery/toplist',
          })}
          to="/discovery/toplist"
        >
          排行榜
        </Link>
        <Link
          className={classnames({
            active: location.pathname == '/discovery/playlist',
          })}
          to="/discovery/playlist"
        >
          歌单
        </Link>
        <Link
          className={classnames({
            active: location.pathname == '/discovery/djradio',
          })}
          to="/discovery/djradio"
        >
          主播电台
        </Link>
        <Link
          className={classnames({
            active: location.pathname == '/discovery/artlist',
          })}
          to="/discovery/artlist"
        >
          歌手
        </Link>
        <Link
          className={classnames({
            active: location.pathname == '/discovery/album',
          })}
          to="/discovery/album"
        >
          新碟上架
        </Link>
      </nav>
      <Outlet />
    </DiscoveryWrapper>
  )
}

export default Discovery
