import styled from "styled-components"
import { WIDTH_WRAPPER } from "../../const"

const AppWrapper = styled.div`
    background-color: #fff;
    width: ${WIDTH_WRAPPER}%;
    padding: 2rem;
    padding-top: calc(2rem + 35px);
    border-radius: 4px;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    position: absolute;
    left: ${(100 - WIDTH_WRAPPER) / 2}%;
    right: ${(100 - WIDTH_WRAPPER) / 2}%;
    top: 80px;
`

export default AppWrapper