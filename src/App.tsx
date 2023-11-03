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
      <AppFooter>
        <div className="footer-content">
          <ul className="links-wrapper">
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>音乐开放平台</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>云村交易所</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>Amped Studio</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>X Studio虚拟歌手</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>用户认证</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>音乐交易平台</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>云推歌</span>
            </li>
            <li className="link">
              <a href="https://developer.music.163.com/st/developer"></a>
              <span>赞赏</span>
            </li>
          </ul>
          <div className="copy">
            <ul className="policy">
              <li>服务条款</li>
              <li>隐私政策</li>
              <li>儿童隐私政策</li>
              <li>版权投诉</li>
              <li>投资者关系</li>
              <li>广告合作</li>
              <li>联系我们</li>
            </ul>
            <p>
              网易公司版权所有©1997-2023杭州乐读科技有限公司运营：浙网文[2021]
              1186-054号 浙公网安备 33010902002564号
            </p>
          </div>
        </div>
      </AppFooter>
    </>
  )
}

export default App
