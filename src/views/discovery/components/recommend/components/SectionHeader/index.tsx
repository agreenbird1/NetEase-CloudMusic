import { type FC, type ReactNode, memo } from 'react'
import SectionHeaderWrapper from './index.styled'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title: string
  more: string
}

const SectionHeader: FC<IProps> = ({ title, more, children }) => {
  const navigate = useNavigate()
  return (
    <SectionHeaderWrapper>
      <div className="left">
        <span className="dot"></span>
        <span className="title">{title}</span>
        {children}
      </div>
      <div className="right" onClick={() => navigate(more)}>
        <span>更多</span>
        <span className='arrow'></span>
      </div>
    </SectionHeaderWrapper>
  )
}

export default memo(SectionHeader)
