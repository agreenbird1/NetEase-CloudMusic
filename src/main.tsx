import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'normalize.css'
import '@/assets/css/reset.css'

import router from './router'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
