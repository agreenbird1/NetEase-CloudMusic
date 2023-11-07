import styled from "styled-components";

const DiscoveryWrapper = styled.section`
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c20b0d;
        border-bottom: 1px solid #a40011;
        height: 35px;
        gap: 20px;
        a {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            color: #fff;
            &:hover {
                background: #9B0909;
            }
        }
        .active {
            background: #9B0909;
        }
    }
`
export default DiscoveryWrapper