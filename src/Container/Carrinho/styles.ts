import styled from "styled-components";
import variaveis from "../../Styles/variaveis";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: ${variaveis.rose};
    z-index: 1;
    display: block;

    &.invisible {
        display: none;
    }
`

export const Img = styled.img`
    width: 80px;
    height: 80px;
`

export const Lixeira = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 220px;
`

export const CartItem = styled.li`
    display: flex;
    margin: 8px;
    width: 344px;
    height: 100px;
    background-color: ${variaveis.bege};
    padding: 8px;
`

export const Title = styled.h4`
    font-weight: 900;
    font-size: 18px;
    line-height: 20px;
    color: ${variaveis.rose};
`

export const Price = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${variaveis.rose};
    margin-top: 16px;
`

export const Infos = styled.div`
    display: block;
    margin-left: 8px;
`

export const Valor = styled.div`
    margin: 40px 8px 16px;
    display: flex;
    width: 344px;
    height: 16px;
    justify-content: space-between;
    color: ${variaveis.bege};
`

export const Value = styled.h5`
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
`

export const Button = styled.button`
    margin: 0 8px;
    width: 344px;
    height: 24px;
    background-color: ${variaveis.bege};
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: ${variaveis.rose};
`