import Banner from "../Banner"

type Props = {
    banner: string
    type: string
    name: string
}

const BannerList = ({ banner, type, name }: Props) => {
    return (
        <div className="container">
            <Banner capa={banner} type={type} name={name} />
        </div>
    )
}

export default BannerList