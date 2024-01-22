import restaurante1 from "../../../images/restaurante1.png"
import restaurante2 from "../../../images/restaurante2.png"
import estrela from "../../../images/estrela.png"
import * as S from './styles'
import { MainContainer } from "../../Styles"
import { useNavigate } from "react-router-dom"
import HomeHeader from "../HomeHeader"

const ListaDeItens = () => {
    const navigate = useNavigate()

    const goToRestaurant = () => {
        navigate('/restaurante')
    }

    return (
        <>
            <HomeHeader />
            <MainContainer>
                <S.ListaItens>
                    <S.Itens>
                        <S.Imagem src={restaurante1} />
                        <S.DivTitle>
                            <S.Title>Hioki Sushi</S.Title>
                            <S.Notas>
                                <S.Title>4.9</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</S.Descricao>
                        <S.Button type="button">Saiba mais</S.Button>
                    </S.Itens>
                    <S.Itens>
                        <S.Imagem src={restaurante2} />
                        <S.DivTitle>
                            <S.Title>La Dolce Vita Trattoria</S.Title>
                            <S.Notas>
                                <S.Title>4.6</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                        <S.Button type="button" onClick={goToRestaurant}>Saiba mais </S.Button>
                    </S.Itens>
                    <S.Itens>
                        <S.Imagem src={restaurante2} />
                        <S.DivTitle>
                            <S.Title>La Dolce Vita Trattoria</S.Title>
                            <S.Notas>
                                <S.Title>4.6</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                        <S.Button type="button" onClick={goToRestaurant}>Saiba mais</S.Button>
                    </S.Itens>
                    <S.Itens>
                        <S.Imagem src={restaurante2} />
                        <S.DivTitle>
                            <S.Title>La Dolce Vita Trattoria</S.Title>
                            <S.Notas>
                                <S.Title>4.6</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                        <S.Button type="button" onClick={goToRestaurant}>Saiba mais</S.Button>
                    </S.Itens>
                    <S.Itens>
                        <S.Imagem src={restaurante2} />
                        <S.DivTitle>
                            <S.Title>La Dolce Vita Trattoria</S.Title>
                            <S.Notas>
                                <S.Title>4.6</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                        <S.Button type="button" onClick={goToRestaurant}>Saiba mais</S.Button>
                    </S.Itens>
                    <S.Itens>
                        <S.Imagem src={restaurante2} />
                        <S.DivTitle>
                            <S.Title>La Dolce Vita Trattoria</S.Title>
                            <S.Notas>
                                <S.Title>4.6</S.Title>
                                <S.EstrelaImg src={estrela} />
                            </S.Notas>
                        </S.DivTitle>
                        
                        <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                        <S.Button type="button" onClick={goToRestaurant}>Saiba mais</S.Button>
                    </S.Itens>
                </S.ListaItens>
            </MainContainer>
        </>
    )
}

export default ListaDeItens