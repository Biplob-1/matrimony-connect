import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PremiumMembers = () => {
    const [premiumMembers, setPremiumMembers] = useState([])
    useEffect( () => {
        fetch('fakeDataOne.json')
        .then(res => res.json())
        .then(data => {
            const premiumMembersData = data.filter(item => item.package === 'premium');
            setPremiumMembers(premiumMembersData);
        })
    }, [])
    return(
        <div>
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {premiumMembers.map(item => (
                        <div key={item.biodataId}>
                        <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{item.permanentDivision}</h2>
                                <p className="">{item.occupation}</p>
                                <p className="">{item.biodataType}</p>
                                <p className="">{item.age}</p>
                            </div>
                            <Link to={'/premiumMemberDetails'}>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md uppercase bg-green-400 hover:bg-green-800">View Profile</button>
                            </Link>
                            
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
};
export default PremiumMembers;