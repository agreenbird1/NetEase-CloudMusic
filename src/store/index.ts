import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AuthSlice from './auth'
import DiscoverySlice from './discovery'

const persistConfig = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: {
    AuthSlice: persistReducer(persistConfig, AuthSlice),
    DiscoverySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭redux序列化检测
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
