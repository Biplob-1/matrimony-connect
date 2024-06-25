import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useContext,  useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const BiodataDetail = () => {
  const biodata = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();


  const addToFavourites = async () => {
    try {
      const favouriteData = {
        userEmail: user.email,
        biodataUserBiodataId: biodata.biodataId,
        biodataUserName: biodata.name,
        biodataUserPermanentAddress: biodata.permanentDivision,
        biodataUserOccupation: biodata.occupation,
      };
  
      const response = await axiosSecure.post('/favourites', favouriteData);
      setIsFavourite(true); 
      alert('Added to favourites successfully');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('This biodata is already in favourites.');
      } else {
        console.error('Error adding to favourites:', error);
        alert('Error adding to favourites');
      }
    }
  };
  const handleRequestContact = (biodataId) => {
    navigate(`/UserDashboard/checkout/${biodataId}`);
  };


  return (
    <div>
      <table className="min-w-full bg-white rounded-lg border-collapse mt-5 border">
        <div className="flex justify-between mt-5 items-center">
          <img src={biodata.profileImage} alt="" className="max-w-[100px] max-h-[100px] object-cover rounded-full ml-2 md:ml-10" />
          <h3 className="text-2xl font-semibold mr-2 md:mr-5">Biodata Id: {biodata.biodataId}</h3>
          <button 
            className={`text-2xl font-semibold md:px-4 py-2 mr-2 md:mr-5 ${isFavourite ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white rounded-md`}
            onClick={addToFavourites}
            disabled={isFavourite}
          >
            {isFavourite ? 'Already in Favourites' : 'Add to Favourite'}
          </button>
        </div>
        <tbody className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 rounded-lg w-full">
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Name</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.name}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Date of Birth</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.dob}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Age</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.age} Year</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Race</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.race}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Gender</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.type}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Occupation</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.occupation}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Father Name</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.fathersName}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Mother Name</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.mothersName}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Height</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.height} (cm)</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Weight</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.weight} (kg)</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Present Division</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.presentDivision}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Permanent Division</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.permanentDivision}</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Expected Partner Age</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.expectedPartnerAge} Year</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Expected Partner Height</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.expectedPartnerHeight} (cm)</td>
          </tr>
          <tr className="border">
            <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Expected Partner Weight</th>
            <td className="py-2 px-4 border-b border-gray-300">{biodata.expectedPartnerWeight} (kg)</td>
          </tr>
        </tbody>
            <div className="items-center text-center">
            <Link to={`/checkout/${biodata._id}`}>
            <button 
                className='mb-5 align-middle text-2xl font-semibold md:px-4 py-2 mr-2 md:mr-5 bg-blue-500 hover:bg-blue-700  text-white rounded-md'
                // onClick={() => handleRequestContact(biodata.biodataId)}
            >
                Request Contact Information
            </button>
            </Link>
            </div>
      </table>
    </div>
  );
};

export default BiodataDetail;
