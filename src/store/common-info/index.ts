import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSong: {
    name: '情非得已 (童声版)',
    id: 33894312,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 122455,
        name: '群星',
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 75,
    st: 0,
    rt: null,
    fee: 0,
    v: 717,
    crbt: null,
    cf: '',
    al: {
      id: 3263929,
      name: '热门华语275',
      picUrl:
        'https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg',
      tns: [],
      pic_str: '109951166361218466',
      pic: 109951166361218460,
    },
    dt: 267232,
    h: {
      br: 320000,
      fid: 0,
      size: 10691439,
      vd: -23075,
      sr: 44100,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6414880,
      vd: -23075,
      sr: 44100,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4276601,
      vd: -23075,
      sr: 44100,
    },
    sq: null,
    hr: null,
    a: null,
    cd: '1',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 524416,
    originCoverType: 0,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 717,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    mv: 0,
    publishTime: 1388505600004,
  },
}

const CommonInfoSlice = createSlice({
  name: 'commonInfo',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
  },
})

export const { setCurrentSong } = CommonInfoSlice.actions
export default CommonInfoSlice.reducer
