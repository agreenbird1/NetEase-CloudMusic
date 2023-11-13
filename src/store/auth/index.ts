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
  },
})

export const { setLoginState } = AuthSlice.actions
export default AuthSlice.reducer
