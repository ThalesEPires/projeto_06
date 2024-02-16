import styled from "styled-components";
import variaveis from "../../Styles/variaveis";

export const Card = styled.li`
    width: 474px;
    height: 400px;
    border: 2px solid ${variaveis.rose};
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
    line-height: 22px;
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