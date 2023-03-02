import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'up' | 'down'
}
const initialState: IState = {
  count: 0,
  message: 'Hello Redux',
  address: 'Tokyo',
  height: 100,
  direction: 'up'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
