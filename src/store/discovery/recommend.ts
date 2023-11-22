import { RecommendApi } from './../../service/discovery/recommend/index'
import type { IRecommendBanner } from './../../service/discovery/recommend/index'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getRecommendBanners = createAsyncThunk(
  'recommend/banners',
  async () => {
    const { banners } = await RecommendApi.getBanners()
    return banners
  }
)

interface IRecommendState {
  banners: IRecommendBanner[]
}

const initialState = {} as IRecommendState

const RecommendSlice = createSlice({
  name: 'recommendSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRecommendBanners.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
  },
})

export default RecommendSlice.reducer
