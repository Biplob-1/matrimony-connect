import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllContactReq = () => {
  const axiosSecure = useAxiosSecure();

  const { data: contactRequests = [], refetch } = useQuery({
    queryKey: ['contact-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contact-requests');
      return res.data;
    },
  });
  

  const handleApprove = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this contact request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.patch(`/contact-requests/${id}/approve`);
        refetch();
        Swal.fire("Approved!", "The contact request has been approved.", "success");
      } catch (error) {
        console.error('Error approving contact request:', error);
        Swal.fire("Error", "There was an error approving the contact request.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">All Contact Requests</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Biodata ID</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {contactRequests.map((request) => (
              <tr key={request._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{request.name}</td>
                <td className="py-3 px-6 text-left">{request.customerEmail}</td>
                <td className="py-3 px-6 text-left">{request.biodataId}</td>
                <td className="py-3 px-6 text-left">
                  {/* <button
                    className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
                    onClick={() => handleApprove(request._id)}
                  >
                    Approve
                  </button> */}
                  {request.type === 'Approved' ? (
                    <button
                      className="bg-gray-500 text-white py-1 px-3 rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
                      onClick={() => handleApprove(request._id)}
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContactReq;
