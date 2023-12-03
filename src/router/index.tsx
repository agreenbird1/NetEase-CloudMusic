import { createHashRouter } from 'react-router-dom'

import App from '../app'
import My from '@/views/my/index'
import Friend from '@/views/friend/index'
import Download from '@/views/download/index'
import Recommend from './../views/discovery/components/recommend/index'
import TopList from './../views/discovery/components/toplist/index'
import PlayList from './../views/discovery/components/playlist/index'
import Discovery from '@/views/discovery/index'
import ArtList from './../views/discovery/components/artlist/index'
import DjRadio from './../views/discovery/components/djradio/index'
import Album from './../views/discovery/components/album/index'
import ErrorPage from '@/views/error/index'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
            path: '/discovery/toplist',
            element: <TopList />,
          },
          {
            path: '/discovery/playlist',
            element: <PlayList />,
          },
          {
            path: '/discovery/djradio',
            element: <DjRadio />,
          },
          {
            path: '/discovery/artlist',
            element: <ArtList />,
          },
          {
            path: '/discovery/album',
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
