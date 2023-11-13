import type { FC, ReactNode } from 'react'
import HeaderAvatarWrapper from './index.styled'
import { useAppDispatch, useAppSelector } from '@/store'
import { AuthApi } from '@/service/common'
import { clearLoginState } from '@/store/auth'

interface IProps {
  children?: ReactNode
}

const HeaderAvatar: FC<IProps> = () => {
  const userProfile = useAppSelector((state) => state.AuthSlice.profile)
  const dispatch = useAppDispatch()

  const logout = () => {
    AuthApi.logout().then(() => {
      dispatch(clearLoginState())
    })
  }

  return (
    <HeaderAvatarWrapper>
      <div className="avatar-wrapper">
        <img src={userProfile.avatarUrl} alt="头像" />
      </div>
      <ul className="avatar-menu">
        <li>
          <i style={{ backgroundPosition: '0 -80px' }}></i>
          我的主页
        </li>
        <li>
          <i style={{ backgroundPosition: '-20px -120px' }}></i>
          我的消息
        </li>
        <li>
          <i style={{ backgroundPosition: '0 -100px' }}></i>
          我的等级
        </li>
        <li>
          <i style={{ backgroundPosition: '0 -221px' }}></i>
          VIP会员
        </li>
        <li>
          <i style={{ backgroundPosition: '0 -140px' }}></i>
          个人设置
        </li>
        <li>
          <i style={{ backgroundPosition: '-20px -142px' }}></i>
          实名认证
        </li>
        <li onClick={logout}>
          <i style={{ backgroundPosition: '0 -200px' }}></i>
          退出
        </li>
      </ul>
    </HeaderAvatarWrapper>
  )
}

export default HeaderAvatar
