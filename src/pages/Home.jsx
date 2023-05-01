import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
function Home(){
    return(
        <div>
            <Header className="layoutHeader"  />
            <ProductList className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}
 
export default Home;