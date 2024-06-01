import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PremiumMembers from "../PremiumMembers/PremiumMembers/PremiumMembers";
import CounterSection from "../CounterSection/CounterSection";
import ReviewSection from "../ReviewSection/ReviewSection";


const Home = () =>{
    return(
        <div>
            <Helmet>
                <title>Shaadi || Home</title>
            </Helmet>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <CounterSection></CounterSection>
            <ReviewSection></ReviewSection>
        </div>
    )
};
export default Home;