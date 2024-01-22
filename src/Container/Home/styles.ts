import styled from "styled-components";
import variaveis from "../../Styles/variaveis";

export const ListaItens = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    width: 1024px;
    height: 1290px;
    margin: 80px 170px 120px;
`

export const Itens = styled.li`
    width: 474px;
    height: 400px;
    border: 2px solid ${variaveis.rose};
`

export const Imagem = styled.img`
    width: 100%;
    height: 220px;
`

export const EstrelaImg = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 4px;
`

export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

export const Notas = styled.div`
    display: flex;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: ${variaveis.rose};
    line-height: 22px;
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