import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import { useEffect, useState } from "react"
import { Cardapio } from "../../types"
import { useParams } from "react-router-dom"
import BannerList from "../../Container/BannerList"

type ProductParams = {
    id: string
}

const Restaurantes = () => {
    const { id } = useParams() as ProductParams
    const [menu, setMenu] = useState<Cardapio[]>([])
    const [capa, setCapa] = useState<string>("")
    const [type, setType] =  useState<string>("")
    const [name, setName] =  useState<string>("")

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setMenu(res.cardapio);
                setCapa(res.capa);
                setType(res.tipo);
                setName(res.titulo);
            });
    }, [id]);

    return (
        <>
            <Header />
            <BannerList banner={capa} type={type} name={name}/>
            <MenuList produtos={menu} />
        </>
    )
}

export default Restaurantes