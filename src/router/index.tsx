import { createHashRouter } from 'react-router-dom'

import App from '../App'
import Discovery from '@/views/discovery/index'
import My from '@/views/my/index'
import Friend from '@/views/friend/index'
import Download from '@/views/download/index'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Discovery />,
        children: [],
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
