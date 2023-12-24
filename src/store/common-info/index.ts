import { SongApi } from '@/service/common'
import { Track } from '@/service/discovery/playlist'
import parseLyric, { ILyricItem } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IInitialState {
  currentSong: Track
  lyric: {
    lrc: ILyricItem[]
    tlyric: ILyricItem[]
  }
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
