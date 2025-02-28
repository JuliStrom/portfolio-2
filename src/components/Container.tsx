import styled from "styled-components";
import {theme} from "../styles/Theme";


export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 2px;
    @media ${theme.media.tablet} {
        padding: 0 16px;
    }
 
`
