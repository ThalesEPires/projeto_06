import { styled } from "styled-components"
import variaveis from "../../Styles/variaveis"
import { Imagem } from "../../Styles"

export const HeaderBar = styled.div`
    display: flex;
    height: 186px;
    justify-content: space-between;
    background-image: url(../../../images/background.png);

    h4 {
        margin: auto;
        color: ${variaveis.rose};
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        line-height: 21px;
        height: 20px;
    }
`

export const Logo = styled(Imagem)`
    margin: auto;
`