import { type FC, type ReactNode, useState } from 'react'
import ErrorPageWrapper from './index.styled'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const ErrorPage: FC<IProps> = () => {
  const navigate = useNavigate()
  const [countDown, setCountDown] = useState(3)

  const timer = setInterval(() => {
    setCountDown(countDown - 1)
    if (countDown - 1 == 0) navigate('/')
    clearInterval(timer)
  }, 1000)
  return (
    <ErrorPageWrapper>
      <h2>oops！</h2>
      <p>Sorry, an unexpected error has occurred</p>
      <p>we'll back to home soon, {countDown}s</p>
    </ErrorPageWrapper>
  )
}

export default ErrorPage
