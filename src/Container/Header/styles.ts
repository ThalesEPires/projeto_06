import { styled } from "styled-components"
import variaveis from "../../Styles/variaveis"
import { Imagem } from "../../Styles"

export const HeaderBar = styled.div`
    background-image: url(../../../images/background.png);

    .header-container {
        display: flex;
        height: 186px;
        width: 1024px;
        justify-content: space-between;
        margin: 0 auto;
    }

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