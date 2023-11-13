import type { FC, ReactNode } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavDecoration from '../NavDecoration'
import LoginDialog from '../LoginDialog'
import AppHeaderWrapper from './index.styled'
import HeaderAvatar from '../HeaderAvatar'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const token = useAppSelector((state) => state.AuthSlice.token)

  useEffect(() => {
    // 防止其余地址刷新重定向
    if (location.pathname == '/') navigate('/discovery')
  }, [navigate, location])
  return (
    <>
      <AppHeaderWrapper>
        <Link className="logo" to="/discovery">
          <img
            src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg"
            alt="logo"
          />
          <span>网易云音乐</span>
        </Link>
        <NavLink className="link" to="/discovery">
          发现音乐
        </NavLink>
        <NavLink className="link" to="/my">
          我的音乐
        </NavLink>
        <NavLink className="link" to="/friend">
          关注
        </NavLink>
        <Link
          className="link"
          target="_blank"
          to="https://music.163.com/store/product"
        >
          商城
        </Link>
        <Link
          className="link"
          target="_blank"
          to="https://music.163.com/st/musician"
        >
          音乐人
        </Link>
        <Link
          className="link"
          target="_blank"
          to="https://music.163.com/st/ad-song"
        >
          云推歌
        </Link>
        <NavLink className="link" to="/download">
          下载客户端
        </NavLink>
        <div className="search-input">
          <iconpark-icon name="search-9jg0dgeg"></iconpark-icon>
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>
        {token ? (
          <HeaderAvatar />
        ) : (
          <div className="login" onClick={() => setShowLoginDialog(true)}>
            登录
          </div>
        )}
      </AppHeaderWrapper>
      {!location.pathname.startsWith('/discovery') && <NavDecoration />}
      {showLoginDialog && (
        <LoginDialog handleClose={() => setShowLoginDialog(false)} />
      )}
    </>
  )
}

export default Home
