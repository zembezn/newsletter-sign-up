
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background: hsl(234, 29%, 20%);
    display: flex;
    min-height: 100vh;
    align-items: center;
    font-size: 16px;
    justify-content: center;
}

img {
    width: 100%;
}

`

export default GlobalStyles