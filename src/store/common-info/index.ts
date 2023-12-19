import { SongApi } from '@/service/common'
import { Track } from '@/service/discovery/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IInitialState {
  currentSong: Track
  lyric: {
    lrc: string
    tlyric: string
  }
}

export const getSongLyricThunk = createAsyncThunk('common/lyric', (id: string, { dispatch }) => {
  SongApi.getSongLyric(id).then((res) => {
    const { tlyric, lrc } = res
    dispatch(setCurrentLyric({ tlyric: tlyric.lyric, lrc: lrc.lyric }))
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
    lrc: '',
    tlyric: '',
  },
} as IInitialState

const CommonInfoSlice = createSlice({
  name: 'commonInfo',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
    setCurrentLyric: (state, action) => {
      state.lyric = action.payload
    },
  },
})

export const { setCurrentSong, setCurrentLyric } = CommonInfoSlice.actions
export default CommonInfoSlice.reducer
