import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '@/views/discover/c-views/recommend/service/recommendService'
export const fetchBannersAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)
interface IRecommendState {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})
export default recommendSlice.reducer
export const { changeBannersAction } = recommendSlice.actions
