import styled from "styled-components";
import variaveis from "../../Styles/variaveis";
import closeIcon from "../../../images/close.png"

export const ProductsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    max-width: 1024px;
    width: 100%;
    margin: 56px auto 120px;
`

export const ProductCard = styled.div`
    width: 320px;
    height: 340px;
    background-color: ${variaveis.rose};
    padding: 8px;

    img {
        width: 304px;
        height: 168px;
    }

    h5 {
        height: 20px;
        font-weight: 900px;
        font-size: 16px;
        color: ${variaveis.bege};
    }

    p {
        width: 304px;
        height: 88px;
        font-weight: 400px;
        font-size: 14px;
        color: ${variaveis.bege};
    }

    button {
        width: 100%;
        height: 24px;
        background-color: ${variaveis.bege};
        color: ${variaveis.rose};
        font-weight: 700px;
        font-size: 14px;
        border: none;
        cursor: pointer;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.is-visible {
        display: flex; 
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContent = styled.div`
    display: flex;
    width: 1024px;
    height: 344px;
    position: relative;
    z-index: 1;
    background-color: ${variaveis.rose};
    padding: 32px;

    div {
        display: block;
        margin-left: 24px;
    }

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    h4 {
        font-weight: 900;
        font-size: 18px;
        color: ${variaveis.branco};
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: ${variaveis.branco};
        margin: 16px 0;
    }

    button {
        width: 240px;
        height: 24px;
        font-weight: 700;
        font-size: 14px;
        background-color: ${variaveis.bege};
        color: ${variaveis.rose};
        border: none;
        cursor: pointer;
        padding: 4px;
    }

    .close-icon {
        background-image: url(${closeIcon});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 8px;
`