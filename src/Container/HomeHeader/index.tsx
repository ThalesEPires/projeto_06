import logo from '../../../public/images/logo.png'
import { MainContainer } from '../../Styles'
import * as S from './styles'
import { Imagem } from '../../Styles'


const HomeHeader = () => {
    return (
        <>
            <MainContainer>
                <S.Container>
                    <Imagem src={logo} />
                    <S.Titulo>Viva experiências gastronômicas no conforto da sua casa</S.Titulo>
                </S.Container>
            </MainContainer>
        </>
    )
}

export default HomeHeader