import styled from "styled-components";
import { MainContainer } from "../../Styles";
import variaveis from "../../Styles/variaveis";

export const Container = styled(MainContainer)`
    background-color: ${variaveis.bege};
    height: 298px;
    display: grid;
`

export const LogoImg = styled.img`
    margin: 40px auto 32px;
`

export const RedesSociais = styled.div`
    margin: 0 auto;
    display: flex;
    width: 88px;
    height: 24px;
`

export const RedesSociaisIcons = styled.img`
    margin: 0 4px;
    width: 24px;
    height: 24px;
`

export const Rodape = styled.p`
    margin: 0 auto;
    width: 480px;
    Height: 24px;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    text-align: center;
    color: ${variaveis.rose};
`