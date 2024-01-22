import styled from "styled-components"
import variaveis from "../../Styles/variaveis"

type InputGroupProps = {
    maxWidth?: string
}

type RowProps = {
    marginTop?: string
}

export const Row = styled.div<RowProps>`
    display: flex;
    column-gap: 24px;
    margin-top: ${(props) => props.marginTop || '0'};
    align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
    flex: auto;
    margin-bottom: 16px;

    max-width: ${(props) => props.maxWidth || 'auto'};

label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
}

input,
select {
    height: 32px;
    padding: 0 8px;
    width: 100%;
`

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
        margin-bottom: 8px;
    }

    label {
        margin: 8px 0;
    }

    input {
        border: none;
        background-color: ${variaveis.bege}
    }
`

export const Button = styled.button`
    background-color: ${variaveis.bege};
    color: ${variaveis.rose};
    border: none;
    cursor: pointer;
    margin-top: 8px;
    width: 100%;
    height: 24px;
    font-weight: 700;
    font-size: 14px;
`