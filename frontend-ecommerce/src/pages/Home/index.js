import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HomeGadgets from "../../components/HomeGadgets"
import * as Unicons from '@iconscout/react-unicons'

const Home = () => {
    return (
        <>
            <Header />

            <div className="home">
                <div className="home-bg__container">
                    <h1>Background section</h1>
                </div>
                <HomeGadgets />
                <div className="home-products__container">
                    <div className="home-category__aside">
                        <h2>Category</h2>
                    </div>
                    <div className="home-products__content">
                        <div className="home-products__head">
                            <h2>Featured Articles</h2>
                            <Unicons.UilFilter />
                        </div>
                        <div className="home-products__list">

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
        
    )
}

export default Home