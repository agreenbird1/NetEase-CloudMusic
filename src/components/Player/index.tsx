import { useState, type FC, type ReactNode, useEffect } from 'react'
import PlayerWrapper from './index.styled'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import storage from '@/utils/storage'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  const localLocked = storage.getStorage<boolean>('player_locked')
  const [locked, setLocked] = useState(Boolean(localLocked))

  // 存储到本地
  useEffect(() => {
    storage.setStorage('player_locked', locked)
  }, [locked])

  return (
    <PlayerWrapper>
      <div
        className={classNames('player', {
          'player-locked': locked,
        })}
      >
        <div className="bg"></div>
        <div className="lock">
          <span
            className={classNames('lock-button', {
              locked: locked,
              unlocked: !locked,
            })}
            onClick={() => setLocked(!locked)}
          ></span>
        </div>
        <div className="player-bar">
          <div className="play-btns">
            <span className="play-btn"></span>
            <span className="play-btn"></span>
            <span className="play-btn"></span>
          </div>
          <div className="music">
            <Link to="/song">
              <img
                src="https://p2.music.126.net/aJWtwvdYRXvKUpAE2C6NoA==/109951168919708423.jpg?param=34y34"
                alt="song"
              />
            </Link>
          </div>
          <div className="play">
            <div className="play-info">
              <span className="song-name">你不是真正的快乐</span>
              <span className="player-name">邓紫棋</span>
            </div>
            <div className="play-progress">
              <div className="progress-bar">
                <div className="bar-bg">
                  {/* 歌曲预加载进度 */}
                  <div className="ready-bar"></div>
                  {/* 实际播放进度 */}
                  <div className="cur-bar">
                    <span className="cur-btn"></span>
                  </div>
                </div>
              </div>
              <div className="time">
                <span>00:45</span>/ 04:17
              </div>
            </div>
          </div>
          <div className="operation1">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="operation2">
            <span></span>
            <span></span>
            <span>1</span>
          </div>
        </div>
      </div>
    </PlayerWrapper>
  )
}

export default Player
