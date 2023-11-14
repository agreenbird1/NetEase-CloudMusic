import { Outlet } from 'react-router-dom'
import { AppWrapper } from './app.styled'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import Player from '@/components/Player'

function App() {
  return (
    <>
      <AppHeader />
      <AppWrapper className="wrapper">
        <Outlet></Outlet>
      </AppWrapper>
      <AppFooter />
      <Player />
    </>
  )
}

export default App
