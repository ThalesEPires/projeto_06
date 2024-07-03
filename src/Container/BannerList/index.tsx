import Banner from "../Banner"

type Props = {
    banner: string
}

const BannerList = ({ banner }: Props) => {
    return (
        <div className="container">
                    <Banner capa={banner} />
        </div>
    )
}

export default BannerList