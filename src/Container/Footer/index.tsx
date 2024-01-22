import logo from "../../../images/logo.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import twitter from "../../../images/twitter.png"
import * as S from './styles'

const Footer = () => {
    return (
        <S.Container>
            <S.LogoImg src={logo} />
            <S.RedesSociais>
                <S.RedesSociaisIcons src={instagram} />
                <S.RedesSociaisIcons src={facebook} />
                <S.RedesSociaisIcons src={twitter} />
            </S.RedesSociais>
            <S.Rodape>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </S.Rodape>
        </S.Container>
    )
}

export default Footer