import { useState, type FC, type ReactNode, useEffect, useRef } from "react";
import PlayerWrapper from "./index.styled";
import classNames from "classnames";
import { Link } from "react-router-dom";
import storage from "@/utils/storage";
import { useAppSelector } from "@/store";
import dayjs from "dayjs";

interface IProps {
  children?: ReactNode;
}

const Player: FC<IProps> = () => {
  let preX = 0; // 鼠标移动播放进度
  const barWidth = 466;
  const { currentSong } = useAppSelector((state) => state.CommonInfoSlice);
  const localLocked = storage.getStorage<boolean>("player_locked");
  const [locked, setLocked] = useState(Boolean(localLocked));
  const [progress, setProgress] = useState(0);
  const [preloadTime, setPreloadTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 存储到本地
  useEffect(() => {
    storage.setStorage("player_locked", locked);
  }, [locked]);

  const mmFormat = (time: number) => {
    return dayjs(time).format("mm:ss");
  };

  const changePlaying = () => {
    setPlaying(!playing);
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const playEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  const clickBar: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!(e.target as HTMLSpanElement).classList.contains("cur-btn")) {
      const rect = document.querySelector(".bar-bg")!.getBoundingClientRect()!;
      const offsetX = e.clientX - rect.left;
      audioRef.current!.currentTime = (offsetX / rect.width) * audioRef.current!.duration;
    }
  };

  const moveTime = (e: MouseEvent) => {
    const moveX = e.clientX - preX;
    preX = e.clientX;
    const moveProgress = (moveX / barWidth) * audioRef.current!.duration;
    audioRef.current!.currentTime += moveProgress;
  };

  const startMoveTime = (e: React.MouseEvent<HTMLDivElement>) => {
    preX = e.clientX;
    document.addEventListener("mouseleave", endMoveTime, false);
    document.addEventListener("mousemove", moveTime, false);
    document.addEventListener("mouseup", endMoveTime, false);
  };

  const endMoveTime = () => {
    preX = 0;
    document.removeEventListener("mousemove", moveTime);
    document.removeEventListener("mouseup", endMoveTime);
  };

  return (
    <PlayerWrapper>
      <div
        className={classNames("player", {
          "player-locked": locked,
        })}
      >
        <div className="bg"></div>
        <div className="lock">
          <span
            className={classNames("lock-button", {
              locked: locked,
              unlocked: !locked,
            })}
            onClick={() => setLocked(!locked)}
          ></span>
        </div>
        <div className="player-bar">
          <div className="play-btns">
            <span className="play-btn"></span>
            <span className={classNames("play-btn", { playing })} onClick={() => changePlaying()}></span>
            <span className="play-btn"></span>
          </div>
          <div className="music">
            <Link to="/song">
              <img src={currentSong.al.picUrl} alt="song" />
            </Link>
          </div>
          <div className="play">
            <div className="play-info">
              <span className="song-name">{currentSong.name}</span>
              <span className="player-name">{currentSong.ar.map((artist) => artist.name).join(",")}</span>
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
                    onTimeUpdate={() => setProgress(audioRef.current!.currentTime * 1000)}
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
            <span>1</span>
          </div>
        </div>
      </div>
    </PlayerWrapper>
  );
};

export default Player;
