import { combineReducers } from '@reduxjs/toolkit'
import RecommendSlice from './recommend'

const DiscoverySlice = combineReducers({ RecommendSlice })

export default DiscoverySlice
