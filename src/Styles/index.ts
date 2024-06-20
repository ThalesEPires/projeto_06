import styled, { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`

export const Imagem = styled.img`
    display: flex;
    margin: 40px auto;
    width: 126px;
    height: 60px;
`