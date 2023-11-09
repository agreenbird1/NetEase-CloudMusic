import type { FC, ReactNode } from 'react'
import DialogWrapper from './index.styled'

interface IProps {
  children?: ReactNode
}

const Dialog: FC<IProps> = (props) => {
  return <DialogWrapper>{props.children}</DialogWrapper>
}
export default Dialog
