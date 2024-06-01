import React from 'react';
import { Helmet } from 'react-helmet-async';

const biodatas = [
  // Example biodatas. You should replace this with your actual data.
  { id: 1, type: 'Male', image: 'profile-image-url.jpg', division: 'Dhaka', age: 28, occupation: 'Engineer' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  { id: 2, type: 'Female', image: 'profile-image-url2.jpg', division: 'Chattagram', age: 25, occupation: 'Teacher' },
  // Repeat this for 20 biodatas or use actual data fetching logic
];

const Biodatas = () => {
    return (
        <div>
            <Helmet>
                <title>Shaadi || Biodatas</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-4 gap-4">
                    {/* Filter Section */}
                    <div className="col-span-1  p-4 rounded shadow-md max-h-screen bg-purple-400">
                        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
                        
                        {/* Filter by Age */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Age Range</label>
                            <input type="range" className="w-full" min="18" max="60" />
                        </div>
                        
                        {/* Filter by Biodata Type */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Biodata Type</label>
                            <div className="flex items-center">
                                <input type="radio" name="biodataType" value="male" id="male" className="mr-2" />
                                <label htmlFor="male" className="mr-4">Male</label>
                                <input type="radio" name="biodataType" value="female" id="female" className="mr-2" />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        
                        {/* Filter by Division */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Division</label>
                            <select className="w-full border-gray-300 rounded">
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattagram">Chattagram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </div>
                    </div>

                    {/* Biodata Section */}
                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {biodatas.map(biodata => (
                            <div key={biodata.id} className="bg-white p-4 rounded shadow-md flex flex-col items-center">
                                <img src={biodata.image} alt="Profile Image" className="w-24 h-24 rounded-full mb-4" />
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold">Biodata Id: {biodata.id}</h3>
                                    <p>Biodata Type: {biodata.type}</p>
                                    <p>Permanent Division: {biodata.division}</p>
                                    <p>Age: {biodata.age}</p>
                                    <p>Occupation: {biodata.occupation}</p>
                                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Profile</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biodatas;
