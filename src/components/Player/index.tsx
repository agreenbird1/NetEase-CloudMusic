import { useState, type FC, type ReactNode, useEffect, useRef } from 'react'
import PlayerWrapper from './index.styled'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import storage from '@/utils/storage'
import { useAppDispatch, useAppSelector } from '@/store'
import dayjs from 'dayjs'
import { clearList, removeSong, setPlaying, setCurrentSong } from '@/store/common-info'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  let preX = 0 // 鼠标移动播放进度
  const barWidth = 466

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    currentSong,
    lyric: { lrc },
    playing,
    currentList,
  } = useAppSelector((state) => state.CommonInfoSlice)

  const localLocked = storage.getStorage<boolean>('player_locked')
  const [locked, setLocked] = useState(Boolean(localLocked))
  const [progress, setProgress] = useState(0)
  const [preloadTime, setPreloadTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const [showPlayList, setShowPlayList] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lyricRef = useRef<HTMLDivElement>(null)
  const wheelRef = useRef<{
    wheeling: boolean
    timer: NodeJS.Timeout
  }>({
    wheeling: false,
    timer: undefined as unknown as NodeJS.Timeout,
  })

  // 存储到本地
  useEffect(() => {
    storage.setStorage('player_locked', locked)
  }, [locked])

  const mmFormat = (time: number) => {
    return dayjs(time).format('mm:ss')
  }

  const changePlaying = () => {
    dispatch(setPlaying(!playing))
  }

  useEffect(() => {
    if (!currentSong.id) return
    if (playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [playing, currentSong.id])

  const playEnded = () => {
    dispatch(setPlaying(false))
    setProgress(0)
  }

  const timeUpdate = () => {
    const newTime = audioRef.current!.currentTime * 1000
    setProgress(newTime)
    const preIndex = currentIndex
    let newIndex = lrc.length - 1
    lrc.findIndex((item, index) => {
      if (item.time >= newTime) {
        newIndex = index - 1
        return true
      }
    })
    if (preIndex !== newIndex) {
      setCurrentIndex(newIndex)
      if (!wheelRef.current.wheeling && lyricRef.current) {
        const { offsetTop, offsetHeight } = (lyricRef.current!.children[0].children[newIndex] as HTMLDivElement) || {}
        const top = 110
        if (offsetTop + offsetHeight / 2 > top) {
          lyricRef.current!.scrollTo({
            top: offsetTop - top - offsetHeight,
            behavior: 'smooth',
          })
        }
      }
    }
  }

  // 当使用鼠标滚轮歌词时候，歌词不随播放滚动
  const lyricWheel = () => {
    wheelRef.current.wheeling = true
    clearTimeout(wheelRef.current.timer)
    wheelRef.current.timer = setTimeout(() => {
      wheelRef.current.wheeling = false
    }, 3000)
  }

  const clickBar: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!currentSong.id) return
    if (!(e.target as HTMLSpanElement).classList.contains('cur-btn')) {
      const rect = document.querySelector('.bar-bg')!.getBoundingClientRect()!
      const offsetX = e.clientX - rect.left
      audioRef.current!.currentTime = (offsetX / rect.width) * audioRef.current!.duration
    }
  }

  const moveTime = (e: MouseEvent) => {
    const moveX = e.clientX - preX
    preX = e.clientX
    const moveProgress = (moveX / barWidth) * audioRef.current!.duration
    audioRef.current!.currentTime += moveProgress
  }

  const startMoveTime = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!currentSong.id) return
    preX = e.clientX
    document.addEventListener('mouseleave', endMoveTime, false)
    document.addEventListener('mousemove', moveTime, false)
    document.addEventListener('mouseup', endMoveTime, false)
  }

  const endMoveTime = () => {
    preX = 0
    document.removeEventListener('mousemove', moveTime)
    document.removeEventListener('mouseup', endMoveTime)
  }

  const cutSong = (num: 1 | -1) => {
    if (!currentList.length) return
    const currentIndx = currentList.findIndex((song) => song.id === currentSong.id)
    if (currentIndex !== -1) {
      let newIndex = currentIndx + num
      if (newIndex === currentList.length) newIndex = 0
      if (newIndex === -1) newIndex = currentList.length - 1
      dispatch(setCurrentSong(currentList[newIndex]))
    }
  }

  return (
    <PlayerWrapper>
      <div
        className={classNames('player', {
          'player-locked': locked || showPlayList,
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
        {/* 播放列表和歌词 */}
        {showPlayList && (
          <div className="playlist">
            <div className="playlist-wrapper">
              <div className="title">
                <span className="title-content">播放列表({currentList.length})</span>
                <span className="clear" onClick={() => dispatch(clearList())}>
                  <iconpark-icon style={{ fontSize: '16px' }} name="delete-9le67n53"></iconpark-icon>
                  清除
                </span>
              </div>
              {currentList.length ? (
                <ul className="playlist-content">
                  {currentList.map((song, index) => (
                    <li
                      className={classNames('song', {
                        active: song.id === currentSong.id,
                      })}
                      key={song.id}
                      onClick={() => dispatch(setCurrentSong(song))}
                    >
                      <span className="play-btn"></span>
                      <span className="name">{song.name}</span>
                      <div className="operation1">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span className="ar-name">{song.ar.map((artist) => artist.name).join(',')}</span>
                      <span className="time">{mmFormat(song.dt)}</span>
                      <span className="delete-btn" onClick={() => dispatch(removeSong(index))}></span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-content">
                  <i className="ico ico-face"></i> 你还没有添加任何歌曲
                  <br />
                  去首页
                  <span onClick={() => navigate('/discovery')} className="f-tdu">
                    发现音乐
                  </span>
                  ，或在
                  <span onClick={() => navigate('/my')} className="f-tdu">
                    我的音乐
                  </span>
                  收听自己收藏的歌单。
                </div>
              )}
            </div>
            <div className="lyrics-wrapper">
              <div className="title">
                <span></span>
                <p className="title-content">{currentSong.name}</p>
                <span className="close" onClick={() => setShowPlayList(false)}>
                  <iconpark-icon className="icon" name="close-1"></iconpark-icon>
                </span>
              </div>
              <div className="lyrics-content-wrapper" ref={lyricRef} onWheel={() => lyricWheel()}>
                <div className="lyrics">
                  {lrc?.length &&
                    lrc.map((lrcItem, index) => (
                      <div key={lrcItem.time} className={classNames('lyric', { active: index === currentIndex })}>
                        {lrcItem.content}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="player-bar">
          <div className="play-btns">
            <span className="play-btn" onClick={() => cutSong(-1)}></span>
            <span className={classNames('play-btn', { playing })} onClick={() => changePlaying()}></span>
            <span className="play-btn" onClick={() => cutSong(1)}></span>
          </div>
          <div className="music">
            <Link to="/song">
              <img src={currentSong.al.picUrl} alt="song" />
            </Link>
          </div>
          <div className="play">
            <div className="play-info">
              <span className="song-name">{currentSong.name}</span>
              <span className="player-name">{currentSong.ar.map((artist) => artist.name).join(',')}</span>
            </div>
            <div className="play-progress">
              <div className="progress-bar">
                <div className="bar-bg" onClick={clickBar}>
                  {/* 歌曲预加载进度 */}
                  <div
                    className="ready-bar"
                    style={{
                      width: `${(preloadTime / currentSong.dt) * 100}%`,
                    }}
                  ></div>
                  {/* 实际播放进度 */}
                  <div
                    className="cur-bar"
                    style={{
                      width: `${(progress / currentSong.dt) * 100}%`,
                    }}
                  >
                    <span className="cur-btn" onMouseDown={startMoveTime}></span>
                  </div>
                  <audio
                    ref={audioRef}
                    src={`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3 `}
                    onProgress={() => setPreloadTime(audioRef.current!.buffered.end(0) * 1000)}
                    onLoad={() => setPreloadTime(currentSong.dt)}
                    onTimeUpdate={() => timeUpdate()}
                    onEnded={() => playEnded()}
                  ></audio>
                </div>
              </div>
              <div className="time">
                <span>{mmFormat(progress)}</span>/ {mmFormat(currentSong.dt)}
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
            <span onClick={() => setShowPlayList(!showPlayList)}>{currentList.length}</span>
          </div>
        </div>
      </div>
    </PlayerWrapper>
  )
}

export default Player
