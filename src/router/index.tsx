import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import Discovery from './../views/discovery/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
        path: '/',
        element: <Discovery />,
    }]
  },
])

export default router
