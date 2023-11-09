import { Outlet } from 'react-router-dom'
import { AppWrapper } from './app.styled'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

function App() {
  return (
    <>
      <AppHeader />
      <AppWrapper className="wrapper">
        <Outlet></Outlet>
      </AppWrapper>
      <AppFooter />
    </>
  )
}

export default App
