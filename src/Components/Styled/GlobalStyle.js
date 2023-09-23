
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: hsl(234, 29%, 20%);
    display: flex;
    min-height: 100vh;
    align-items: center;
    font-size: 18px;
    justify-content: center;
}

img {
    width: 100%;
    padding-left: 10px;
    padding-right: 8px;
}

`

export default GlobalStyles