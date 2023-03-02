import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import recommendReducer from '../views/discover/c-views/recommend/store/recommendStore'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})
// 导出state类型
// type GetStateFnType = typeof store.getState
// export type IRootState = ReturnType<GetStateFnType> // 获取函数返回值类型
// export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector //自动导出类型
// export const useAppDispatch = () => useDispatch<typeof store.dispatch>() //自动导出类型

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
