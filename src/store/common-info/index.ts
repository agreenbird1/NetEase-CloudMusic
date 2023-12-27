import { SongApi } from '@/service/common'
import { Track } from '@/service/discovery/playlist'
import parseLyric, { ILyricItem } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type PlayMode = 0 | 1 | 2 // 列表循环 随机 单曲循环

export interface IInitialState {
  currentSong: Track
  lyric: {
    lrc: ILyricItem[]
    tlyric: ILyricItem[]
  }
  playing: boolean
  currentList: Track[]
  playMode: PlayMode
}

export const getSongLyricThunk = createAsyncThunk('common/lyric', (id: string, { dispatch }) => {
  SongApi.getSongLyric(id).then((res) => {
    const { tlyric, lrc } = res
    dispatch(setCurrentLyric({ tlyric: parseLyric(tlyric.lyric), lrc: parseLyric(lrc.lyric) }))
  })
})

const initialState = {
  currentSong: {
    name: '',
    ar: [
      {
        name: '',
      },
    ],
    al: {
      picUrl: 'https://s4.music.126.net/style/web2/img/default/default_album.jpg',
    },
    dt: 0,
  },
  lyric: {
    lrc: [] as any,
    tlyric: [] as any,
  },
  playing: false,
  currentList: [] as any,
  playMode: 0,
} as IInitialState

const CommonInfoSlice = createSlice({
  name: 'commonInfo',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
      if (state.currentList.findIndex((song) => song.id === action.payload.id) === -1) {
        state.currentList.push(action.payload)
      }
    },
    setCurrentLyric: (state, action) => {
      state.lyric = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    addSong: (state, action) => {
      if (state.currentList.findIndex((song) => song.id === action.payload.id) === -1) {
        state.currentList.push(action.payload)
      }
    },
    removeSong: (state, action) => {
      state.currentList.splice(action.payload, 1)
    },
    clearList: (state) => {
      state.currentList = []
    },
    changePlayMode: (state, action) => {
      state.playMode = action.payload
    },
  },
})

export const { setCurrentSong, setCurrentLyric, setPlaying, addSong, removeSong, clearList, changePlayMode } =
  CommonInfoSlice.actions
export default CommonInfoSlice.reducer
