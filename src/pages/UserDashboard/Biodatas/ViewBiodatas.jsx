import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useBiodata from '../../../hooks/useBiodata';

const ViewBiodatas = () => {
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false);

  const [biodata] = useBiodata()
  console.log('show all biodata: ',biodata);


  // Example biodata information (replace with actual data source)
  const items = {
    type: 'Male',
    name: 'John Doe',
    profileImage: 'https://example.com/profile.jpg',
    dob: '1990-01-01',
    height: '175.26',
    weight: '70',
    age: 34,
    occupation: 'Job',
    race: 'Christian',
    fathersName: 'Father Name',
    mothersName: 'Mother Name',
    permanentDivision: 'Dhaka',
    presentDivision: 'Chattagram',
    expectedPartnerAge: 30,
    expectedPartnerHeight: '160.02',
    expectedPartnerWeight: '50',
    contactEmail: 'john@example.com',
    mobileNumber: '1234567890'
  };

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

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">View Biodatas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.type}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <img src={items.profileImage} alt="Profile" className="mt-1 w-full h-auto rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.dob}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.height} cm</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.weight} kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.age}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.occupation}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Race</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.race}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Name</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.fathersName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.mothersName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Permanent Division</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.permanentDivision}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Present Division</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.presentDivision}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Partner Age</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.expectedPartnerAge}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Partner Height</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.expectedPartnerHeight} cm</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Partner Weight</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.expectedPartnerWeight} kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Email</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.contactEmail}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">{items.mobileNumber}</p>
          </div>
        </div>
        <div className="text-right mt-4">
          <button
            onClick={handleMakePremium}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
          >
            Make Biodata Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBiodatas;
