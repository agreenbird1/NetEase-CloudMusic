import { useEffect, type FC, type ReactNode } from 'react'
import DialogWrapper from './index.styled'

interface IProps {
  children?: ReactNode
}

const Dialog: FC<IProps> = (props) => {
  useEffect(() => {
    // 禁止弹窗下滚动
    const [{ scrollTop }] = document.getElementsByTagName('html')!
    const preventScroll = () => {
      window.scrollTo(0, scrollTop)
    }
    window.addEventListener('scroll', preventScroll)
    return () => window.removeEventListener('scroll', preventScroll)
  })

  return <DialogWrapper>{props.children}</DialogWrapper>
}
export default Dialog
