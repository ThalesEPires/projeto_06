import styled from "styled-components";
import variaveis from "../../Styles/variaveis";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
    width: 474px;
    height: 400px;
    border: 2px solid ${variaveis.rose};
    position: relative;
    text-decoration: none;
    color: ${variaveis.branco};
    display: block;
`

export const Image = styled.img`
    width: 100%;
    height: 220px;
`

export const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    margin: 8px;
    font-size: 18px;
    font-weight: 700;
    color: ${variaveis.rose};
    line-height: 22px;
`

export const Notas = styled.div`
    display: flex;
    

    img {
        margin-left: 8px;
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${variaveis.rose};
    line-height: 18px;
    margin: 8px;
`

export const Button = styled.button`
    width: 80px;
    height: 24px;
    margin-left: 8px;
    margin-bottom: 16px;
    background-color: ${variaveis.rose};
    color: ${variaveis.branco};
    border: none;
    cursor: pointer;
`

export const Tag = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    widht: 60px;
    max-height: 26px;
    background-color: ${variaveis.rose};
    color: ${variaveis.branco};
    font-weight: bold;
    font-size: 12px;
    padding: 6px 10px;

    &.destaque {
        right: 85px;
    }

    &.sem-destaque {
        display: none;
    }
`