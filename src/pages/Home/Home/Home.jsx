import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";


const Home = () =>{
    return(
        <div>
            <Helmet>
                <title>Shaadi || Home</title>
            </Helmet>
            <Banner></Banner>
            <h3>This Is Home.</h3>
        </div>
    )
};
export default Home;