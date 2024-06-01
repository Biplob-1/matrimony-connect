import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PremiumMembers from "../PremiumMembers/PremiumMembers/PremiumMembers";
import CounterSection from "../CounterSection/CounterSection";


const Home = () =>{
    return(
        <div>
            <Helmet>
                <title>Shaadi || Home</title>
            </Helmet>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <CounterSection></CounterSection>
            <h3>This Is Home.</h3>
        </div>
    )
};
export default Home;