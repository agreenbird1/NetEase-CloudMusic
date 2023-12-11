import type { FC, ReactNode } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import DiscoveryWrapper from './index.styled'

interface IProps {
  children?: ReactNode
}

const Discovery: FC<IProps> = () => {
  const location = useLocation()
  return (
    <DiscoveryWrapper>
      <nav>
        <NavLink
          to="/discovery"
          className={({ isActive }) =>
            isActive && location.pathname == '/discovery' ? 'active' : ''
          }
        >
          推荐
        </NavLink>
        <NavLink to="/discovery/toplist">排行榜</NavLink>
        <NavLink to="/discovery/playlist">歌单</NavLink>
        <NavLink to="/discovery/djradio">主播电台</NavLink>
        <NavLink to="/discovery/artist">歌手</NavLink>
        <NavLink to="/discovery/album">新碟上架</NavLink>
      </nav>
      <Outlet />
    </DiscoveryWrapper>
  )
}

export default Discovery
