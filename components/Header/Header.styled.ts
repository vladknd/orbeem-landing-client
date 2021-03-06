import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: ${colors.darkBg};
    width: 100%;
    height: 100px;
    padding: 0px 20px; 
    /* @media (max-width: 600px) {
        height: 200px;   
    } */

    position: fixed; 
    z-index: 5;
    
`

export const HeaderSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 900px;
    height: 10px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
`
export const HeaderLink = styled.a`
    margin: 0px 15px;
    color: white;
    opacity: 0.7;
    &:hover {
        opacity: 0.9;
    }
`

export const AccountContainer = styled.div`
    height: 50px;
    border-radius: 25px;
    background-color: rgba(112, 112, 112, 0.24);
    color: white;
    text-align: center;
    padding: 15px;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid #6d52d1;
        background-color: rgba(112, 112, 112, 0.14);
    }
`