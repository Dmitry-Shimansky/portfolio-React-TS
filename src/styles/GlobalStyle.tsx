import { createGlobalStyle } from "styled-components";
import {Theme} from "./Theme";

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
        font-family: 'Poppins', 'DM Sans', 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${Theme.colors.primaryBg};
        color: ${Theme.colors.font};
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }
    
    section {
        padding: 100px 0;
        
        @media ${Theme.media.mobile} {
            padding: 80px 0;
        }
    }
    
    section:nth-of-type(odd) {
        background-color: ${Theme.colors.primaryBg};
    }
    section:nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBg};
    }
`