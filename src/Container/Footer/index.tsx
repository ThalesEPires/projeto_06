import logo from "../Images/images/logo.png"
import facebook from "../Images/images/facebook.png"
import instagram from "../Images/images/instagram.png"
import twitter from "../Images/images/twitter.png"
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