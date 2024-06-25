import { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ContactRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

  const { data: contactRequests = [], refetch } = useQuery({
    queryKey: ['contact-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contact-requests');
      return res.data;
    },
  });
  const userContactRequests = contactRequests.filter(request => request.userEmail === user.email);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/contact-requests/${id}`);
        refetch();
        Swal.fire("Deleted!", "The contact-requests has been deleted.", "success");
      } catch (error) {
        console.error('Error deleting favourite:', error);
        Swal.fire("Error", "There was an error deleting the contact-requests.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Contact Requests</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Biodata ID</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Mobile No</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {userContactRequests.map((request) => (
              <tr key={request._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{request.userEmail}</td>
                <td className="py-3 px-6 text-left">{request.biodataId}</td>
                <td className="py-3 px-6 text-left">{request?.type}</td>
                <td className="py-3 px-6 text-left">{request?.type === 'Approved' ? request.mobile : '-'}</td>
                <td className="py-3 px-6 text-left">{request?.type === 'Approved' ? request.email : '-'}</td>
                <td className="py-3 px-6 text-left">
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                      onClick={() => handleDelete(request._id)}
                    >
                      Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactRequest;
