import { ILoginResponse } from './../../service/common/index'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ILoginResponse = {} as ILoginResponse

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState(state, { payload }: PayloadAction<ILoginResponse>) {
      for (const key in payload) {
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
          // @ts-ignore
          state[key] = payload[key]
        }
      }
    },
    clearLoginState(state) {
      for (const key in state) {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          // @ts-ignore
          state[key] = undefined
        }
      }
    },
  },
})

export const { setLoginState, clearLoginState } = AuthSlice.actions
export default AuthSlice.reducer
