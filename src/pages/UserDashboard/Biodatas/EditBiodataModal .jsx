import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EditBiodataModal = ({ isOpen, onClose, biodata, refetch }) => {
  const [formData, setFormData] = useState(biodata);
  const axiosSecure = useAxiosSecure();

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.put(`/biodatas/${biodata._id}`, formData);
      if (response.data) {
        Swal.fire('Updated!', 'Your biodata has been updated.', 'success');
        onClose();
        refetch();
      }
    } catch (error) {
      Swal.fire('Error!', 'There was an error updating your biodata.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Edit Biodata</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border rounded"
            />
            <input
              type="email"
              name="contactEmail"
              readOnly
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border rounded"
            />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="race"
              value={formData.race}
              onChange={handleChange}
              placeholder="Race"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Gender"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="Occupation"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              placeholder="Father's Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="mothersName"
              value={formData.mothersName}
              onChange={handleChange}
              placeholder="Mother's Name"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Height (cm)"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight (kg)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="presentDivision"
              value={formData.presentDivision}
              onChange={handleChange}
              placeholder="Present Division"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="permanentDivision"
              value={formData.permanentDivision}
              onChange={handleChange}
              placeholder="Permanent Division"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="expectedPartnerAge"
              value={formData.expectedPartnerAge}
              onChange={handleChange}
              placeholder="Expected Partner Age"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="expectedPartnerHeight"
              value={formData.expectedPartnerHeight}
              onChange={handleChange}
              placeholder="Expected Partner Height (cm)"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="expectedPartnerWeight"
              value={formData.expectedPartnerWeight}
              onChange={handleChange}
              placeholder="Expected Partner Weight (kg)"
              className="p-2 border rounded"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBiodataModal;
