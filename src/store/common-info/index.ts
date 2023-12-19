import { Track } from '@/service/discovery/playlist'
import { createSlice } from '@reduxjs/toolkit'

export interface IInitialState {
  currentSong: Track
}

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
} as IInitialState

const CommonInfoSlice = createSlice({
  name: 'commonInfo',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
  },
})

export const { setCurrentSong } = CommonInfoSlice.actions
export default CommonInfoSlice.reducer
