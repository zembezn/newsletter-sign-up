
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: hsl(234, 29%, 20%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 16px;
}

p {
    align-items: center;
    color: hsl(234, 29%, 20%);
}
`

export default GlobalStyles