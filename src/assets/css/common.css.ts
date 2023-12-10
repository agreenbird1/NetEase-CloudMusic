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
}

export default commonCss
