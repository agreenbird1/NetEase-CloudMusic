import { getSongLyricThunk } from './../common-info/index'

export const setLyric = (store: any) => (next: any) => (action: any) => {
  const { payload } = next(action)
  const { type } = action
  if (type === 'commonInfo/setCurrentSong') {
    store.dispatch(getSongLyricThunk(payload.id))
  }
}
