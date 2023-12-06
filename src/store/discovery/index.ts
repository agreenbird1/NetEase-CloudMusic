import { combineReducers } from '@reduxjs/toolkit'
import RecommendSlice from './recommend'
import PlaylistSlice from './playlist'

const DiscoverySlice = combineReducers({ RecommendSlice, PlaylistSlice })

export default DiscoverySlice
