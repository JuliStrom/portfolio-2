import React from "react";
import {Icon} from "./Icon";
import styled from "styled-components";
import {theme} from "../styles/Theme";


export const Logo: React.FC = () => {
    return (
        <HolderLogo>
            <a href="#">
                <Icon width={'16px'} height={"17px"} viewBox={"0 0 16 17"} iconId={'logo'}/>
                <span>&nbsp;Elias</span>
            </a>

        </HolderLogo>
    );
}

 const HolderLogo = styled.div`
     display: inline-block;
     justify-items: center;
     z-index: 998;
     span {
         color: ${theme.colors.fontActive};
     }   
`