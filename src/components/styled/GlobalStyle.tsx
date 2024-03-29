import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: radial-gradient(#c44, #111);
        margin: 0;
        padding: 50px 0px 0px 0px;
        min-height: calc(100vh - 50px);
    }
`

export default GlobalStyle;