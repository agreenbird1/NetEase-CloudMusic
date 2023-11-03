import { Link, Outlet } from 'react-router-dom'
import { AppFooter, AppHeader } from './app.styled'

function App() {
  return (
    <>
      <AppHeader>
        <div className="logo">
          <img
            src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg"
            alt="logo"
          />
          <span>网易云音乐</span>
        </div>
        <Link className="link" to="">
          我的音乐
        </Link>
        <Link className="link" to="">
          关注
        </Link>
        <Link className="link" to="">
          商城
        </Link>
        <Link className="link" to="">
          音乐人
        </Link>
        <Link className="link" to="">
          云推歌
        </Link>
        <Link className="link" to="">
          下载客户端
        </Link>
      </AppHeader>
      <Outlet></Outlet>
      <AppFooter>asdasdasdsad</AppFooter>
    </>
  )
}

export default App
