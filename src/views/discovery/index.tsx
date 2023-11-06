import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discovery: FC<IProps> = () => {
  return (
    <div>
      Discovery
      <Outlet />
    </div>
  )
}

export default Discovery
