import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AuthSlice from './auth'
import DiscoverySlice from './discovery'
import CommonInfoSlice from './common-info'
import { setLyric } from './middleware/set-lyric'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  AuthSlice: persistReducer(persistConfig, AuthSlice),
  DiscoverySlice,
  CommonInfoSlice: persistReducer(persistConfig, CommonInfoSlice),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭redux序列化检测
      serializableCheck: false,
    }).concat(setLyric),
})

export const persistor = persistStore(store)

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
