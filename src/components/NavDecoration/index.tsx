import type { FC, ReactNode } from 'react'
import NavDecorationWrapper from "./index.styled"

interface IProps {
  children?: ReactNode
}

const NavDecoration: FC<IProps> = () => {
  return <NavDecorationWrapper></NavDecorationWrapper>
}

export default NavDecoration
