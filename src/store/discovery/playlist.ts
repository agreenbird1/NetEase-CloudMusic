import {
  ICatDetail,
  PlayListApi,
} from './../../service/discovery/playlist/index'
import { IPlayListItem } from '@/service/discovery/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IPlayListState {
  playlistsInfo: { playlists: IPlayListItem[]; total: number; more: boolean }
  cats: {
    categories: Record<string, string>
    sub: ICatDetail[]
  }
}

export const getPlayListCats = createAsyncThunk('playlist/cats', async () => {
  const { categories, sub } = await PlayListApi.getPlayListCats()
  return { categories, sub }
})

export const getPlayLists = createAsyncThunk(
  'playlist/playlists',
  async (payload) => {
    const { playlists, total, more } = await PlayListApi.getPlayLists(
      payload as any
    )
    return { playlists, total, more }
  }
)

const initialState = {
    playlistsInfo: {},
    cats: {}
} as IPlayListState

const PlayListSlice = createSlice({
  name: 'PlayListSlice',
  initialState,
  reducers: {},
  extraReducers(reducer) {
    reducer
      .addCase(getPlayListCats.fulfilled, (state, { payload }) => {
        state.cats = payload
      })
      .addCase(getPlayLists.fulfilled, (state, { payload }) => {
        state.playlistsInfo = payload
      })
  },
})

export default PlayListSlice.reducer
