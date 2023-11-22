import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import 'normalize.css'
import '@/assets/css/reset.css'

import router from './router'
import { Provider } from 'react-redux'
import { persistor, store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}></RouterProvider>
    </PersistGate>
  </Provider>
)
