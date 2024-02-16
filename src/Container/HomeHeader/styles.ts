import styled from "styled-components";
import variaveis from "../../Styles/variaveis";

export const Container = styled.div`
    display: grid;
    margin: 0 auto;
    height: 384px;
    background-image: url(../../../images/background.png);
`

export const Titulo = styled.h3`
    margin: 64px auto 40px;
    max-width: 540px;
    width: 100%;
    height: 84px;
    text-align: center;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    color: ${variaveis.rose}
`