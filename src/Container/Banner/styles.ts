import styled from "styled-components";
import variaveis from "../../Styles/variaveis";

export const BannerContainer = styled.div`
    position: relative;
    display: flex;
`

export const BannerImg = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
`

export const Tipo = styled.p`
    position: absolute;
    z-index: 1;
    top: 24px;
    left: 170px;
    height: 33px;
    color: ${variaveis.branco};
    font-weight: 100; 
    font-size: 32px;
    line-height: 32px;
`

export const Name = styled.h3`
    position: absolute;
    z-index: 1;
    bottom: 34px;
    left: 170px;
    height: 33px;
    color: ${variaveis.branco};
    font-weight: bold; 
    font-size: 32px;
    line-height: 38px;
`