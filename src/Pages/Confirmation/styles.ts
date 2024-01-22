import styled from "styled-components"
import variaveis from "../../Styles/variaveis"

export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: ${variaveis.rose};
    color: ${variaveis.bege};
    font-weight: 700;
    z-index: 1;
    padding: 32px 8px;

    h3 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }
`

export const Button = styled.button`
    background-color: ${variaveis.bege};
    color: ${variaveis.rose};
    border: none;
    cursor: pointer;
    margin-top: 24px;
    width: 100%;
    height: 24px;
    font-weight: 700;
    font-size: 14px;
`