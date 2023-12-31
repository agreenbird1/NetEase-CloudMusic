import styled from "styled-components"

const DialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1300px;
    z-index: 999;
`

export default DialogWrapper