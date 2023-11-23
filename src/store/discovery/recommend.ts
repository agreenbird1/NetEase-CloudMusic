import { RecommendApi } from '@/service/discovery/recommend/index'
import type {
  IHotPlayListCat,
  IPlayListItem,
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
    const { playlists } = await RecommendApi.getHotPlayList()
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

interface IRecommendState {
  banners: IRecommendBanner[]
  hotCats: IHotPlayListCat[]
  hotPlayList: IPlayListItem[]
  newAlbums: INewAlbum[]
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
  },
})

export default RecommendSlice.reducer
