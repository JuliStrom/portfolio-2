import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {font} from "./FontCommon";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
        'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    min-width: 360px;
    background-color: ${theme.colors.secondaryBg};
}
a {
    text-decoration: none;
    color: ${theme.colors.font};
}
ul {
    list-style: none;
}
section {
    max-width: 1024px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    margin: 0 auto;
    padding: 62px 2px;
    position: relative;
    
}
button {
    background: none;
    border: 2px solid ${theme.colors.accent};
    color: ${theme.colors.font};
    cursor: pointer;
    letter-spacing: 2px;
    padding: 6px 18px;
    &:hover {
        border: 3px solid ${theme.colors.accent};
    }
    &:active {
        background-color: rgba(199, 120, 221, 0.2);;
    }
}
h2 {
    ${font({family: "'Fira Code', sans-serif", weight: 600, Fmax: 32, Fmin: 26})};
     strong {
        color: ${theme.colors.fontActive};
    }
}

h3 {
    ${font({family: "'Fira Code', sans-serif", weight: 500, Fmax: 24, Fmin: 20})};
}
h4 {
    ${font({family: "'Fira Code', sans-serif", weight: 400, Fmax: 24, Fmin: 20})};
}
h5 {
    ${font({family: "'Fira Code', sans-serif", weight: 600, Fmax: 16, Fmin: 12})};
    
}
 p {
     font-weight: 400;
     font-size: 16px;
     line-height: 1.4;
 }
 span {
     color: ${theme.colors.accent};
 }
`