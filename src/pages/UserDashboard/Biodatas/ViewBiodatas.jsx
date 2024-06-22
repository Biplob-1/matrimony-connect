import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import EditBiodataModal from "./EditBiodataModal ";

const ViewBiodatas = () => {
  const {user}= useContext(AuthContext);
  const [isPremium, setIsPremium] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBiodata, setSelectedBiodata] = useState(null);
  const axiosSecure = useAxiosSecure();
  
  const {data : biodatas = [], refetch} = useQuery({
      queryKey: ['biodatas'],
      queryFn: async () => {
          const res = await axiosSecure.get('/biodatas');
          return res.data;
      }
  });
  const filterBiodatas =  biodatas.filter(biodata => biodata.contactEmail === user.email);

  const handleMakePremium = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to make your biodata premium?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make it premium!'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsPremium(true);
        Swal.fire(
          'Premium!',
          'Your biodata has been made premium.',
          'success'
        );
        // Perform any additional actions, such as updating the status in the backend
      }
    });
  };

 const editBiodata = (biodata) => {
    setSelectedBiodata(biodata);
    setIsModalOpen(true);
  };
  // console.log(biodatas)
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold text-center">{user.displayName} Biodata</h3>
      <div className="overflow-x-auto">
        {
          filterBiodatas.map((biodata) => (
        <table className="min-w-full bg-white rounded-lg border-collapse mt-5 border">
          <div className="flex justify-between mt-5 items-center">
          <img src={biodata.profileImage} alt="" className="max-w-[100px] max-h-[100px] object-cover rounded-full ml-2 md:ml-10 " />
          <h3 className="text-2xl font-semibold mr-2 md:mr-5"> Biodata Id: {biodata.biodataId}</h3>
          </div>
          <tbody className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 rounded-lg  w-full">
            <tr className="border">
              <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Name</th>
              <td className="py-2 px-4 border-b border-gray-300">{biodata.name}</td>
            </tr>
            <tr className="border">
              <th className="py-2 md:px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Email</th>
              <td className="py-2 md:px-4 border-b border-gray-300">{biodata.contactEmail}</td>
            </tr>
            <tr className="border">
              <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Phone Number</th>
              <td className="py-2 px-4 border-b border-gray-300">{biodata.mobileNumber}</td>
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
          <div className=" flex flex-col md:flex-row justify-center gap-2 md:gap-5 pb-5">
            <button
              onClick={handleMakePremium}
              className="md:px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Make Biodata Premium
            </button>
            <button
              onClick={() => editBiodata(biodata)}
              className="md:px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Update Biodata 
            </button>
          </div>
        </table>
      ))
    }
      </div>
      {isModalOpen && (
        <EditBiodataModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          biodata={selectedBiodata}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ViewBiodatas;

