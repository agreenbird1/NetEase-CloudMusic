import { createHashRouter } from 'react-router-dom'

import App from '../app'
import My from '@/views/my/index'
import Friend from '@/views/friend/index'
import Download from '@/views/download/index'
import Recommend from './../views/discovery/components/recommend/index'
import TopList from './../views/discovery/components/toplist/index'
import Discovery from '@/views/discovery/index'
import ArtList from './../views/discovery/components/artlist/index'
import DjRadio from './../views/discovery/components/djradio/index'
import Album from './../views/discovery/components/album/index'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Discovery />,
        children: [
          {
            path: '/discovery',
            element: <Recommend />,
          },
          {
            path: 'toplist',
            element: <TopList />,
          },
          {
            path: 'playlist',
            element: <TopList />,
          },
          {
            path: 'djradio',
            element: <DjRadio />,
          },
          {
            path: 'artlist',
            element: <ArtList />,
          },
          {
            path: 'album',
            element: <Album />,
          },
        ],
      },
      {
        path: '/my',
        element: <My />,
      },
      {
        path: '/friend',
        element: <Friend />,
      },
      {
        path: '/download',
        element: <Download />,
      },
    ],
  },
])

export default router
