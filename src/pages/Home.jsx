import Header from "../components/Header"
import ProdutList from "../components/ProducList"
import Footer from "../components/Footer"
function Home(){
    return(
        <div>
            <Header className="layoutHeader"  />
            <ProductList className="laytoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;    