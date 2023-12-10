import { PlayListApi } from './../../service/discovery/playlist/index'
import { RecommendApi } from '@/service/discovery/recommend/index'
import type { IPlayListItem } from './../../service/discovery/playlist/index'
import type {
  IHotPlayListCat,
  IRecommendBanner,
  INewAlbum,
} from '@/service/discovery/recommend/index'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getRecommendBanners = createAsyncThunk(
  'recommend/banners',
  async () => {
    const { banners } = await RecommendApi.getBanners()
    return banners
  }
)

export const getRecommendHotPlayList = createAsyncThunk(
  'recommend/hotPlayList',
  async () => {
    const { tags } = await RecommendApi.getHotPlayListCat()
    const { playlists } = await PlayListApi.getPlayLists({
      limit: 10,
      offset: 0,
      order: 'hot',
    })
    return {
      tags,
      playlists,
    }
  }
)

export const getRecommendNewAlbums = createAsyncThunk(
  'recommend/newAlbums',
  async () => {
    const { albums } = await RecommendApi.getNewAlbums()
    return albums
  }
)

export const getRankLists = createAsyncThunk('recommend/ranklists', async () => {
  const res = await Promise.all([
    PlayListApi.getPlayListDetail(19723756),
    PlayListApi.getPlayListDetail(3779629),
    PlayListApi.getPlayListDetail(2884035),
  ])
  return res.map((item) => item.playlist)
})

interface IRecommendState {
  banners: IRecommendBanner[]
  hotCats: IHotPlayListCat[]
  hotPlayList: IPlayListItem[]
  newAlbums: INewAlbum[]
  rankList: IPlayListItem[]
}

const initialState = {} as IRecommendState

const RecommendSlice = createSlice({
  name: 'recommendSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRecommendBanners.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(getRecommendHotPlayList.fulfilled, (state, { payload }) => {
        state.hotCats = payload.tags
        state.hotPlayList = payload.playlists
      })
      .addCase(getRecommendNewAlbums.fulfilled, (state, { payload }) => {
        state.newAlbums = payload
      })
      .addCase(getRankLists.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.rankList = payload
      })
  },
})

export default RecommendSlice.reducer
