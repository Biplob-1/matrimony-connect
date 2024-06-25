import { useState } from 'react';
import CounterSection from './Home/CounterSection/CounterSection';
import AdminDashboard from './UserDashboard/admin/AdminDashboard';

const DashboardContainer = () => {
    const [totalBiodatas, setTotalBiodatas] = useState(0);
    const [girlsBiodatas, setGirlsBiodatas] = useState(0);
    const [boysBiodatas, setBoysBiodatas] = useState(0);
    const [premiumBiodatas, setPremiumBiodatas] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

    const handleDataUpdate = (data) => {
        setTotalBiodatas(data.totalBiodatas);
        setGirlsBiodatas(data.girlsBiodatas);
        setBoysBiodatas(data.boysBiodatas);
        setPremiumBiodatas(data.premiumBiodatas);
        setTotalRevenue(data.totalRevenue);
    };

    return (
        <div>
            <AdminDashboard onDataUpdate={handleDataUpdate} />
            <CounterSection
                totalBiodatas={totalBiodatas}
                girlsBiodatas={girlsBiodatas}
                boysBiodatas={boysBiodatas}
                premiumBiodatas={premiumBiodatas}
                totalRevenue={totalRevenue}
            />
        </div>
    );
};

export default DashboardContainer;
