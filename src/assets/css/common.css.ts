import { css } from 'styled-components'

const commonCss = {
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  vCenter: css`
    display: flex;
    align-items: center;
  `,
  hCenter: css`
    display: flex;
    justify-content: center;
  `,
  hoverActive: css`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
  ellipsis: css`
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 溢出隐藏 */
    text-overflow: ellipsis; /* 显示省略号 */
  `,
}

export default commonCss
