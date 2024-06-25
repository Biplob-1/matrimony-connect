import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const FavouriteBiodatas = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: favourites = [], refetch } = useQuery({
    queryKey: ['favourites'],
    queryFn: async () => {
      const res = await axiosSecure.get('/favourites');
      return res.data;
    },
  });

  const handleDelete = async (favouriteId) => {
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
        await axiosSecure.delete(`/favourites/${favouriteId}`);
        refetch();
        Swal.fire("Deleted!", "The biodata has been deleted.", "success");
      } catch (error) {
        console.error('Error deleting favourite:', error);
        Swal.fire("Error", "There was an error deleting the biodata.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Favourite Biodatas</h1>
      {favourites.length === 0 ? (
        <p>No favourite biodatas found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Name</th>
                <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Biodata Id</th>
                <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Permanent Address</th>
                <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Occupation</th>
                <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b-2 border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((favourite) => (
                <tr key={favourite._id} className="border-b">
                  <td className="py-2 px-4 border-b border-gray-300 whitespace-nowrap">{favourite.biodataUserName}</td>
                  <td className="py-2 px-4 border-b border-gray-300 whitespace-nowrap">{favourite.biodataUserBiodataId}</td>
                  <td className="py-2 px-4 border-b border-gray-300 whitespace-nowrap">{favourite.biodataUserPermanentAddress}</td>
                  <td className="py-2 px-4 border-b border-gray-300 whitespace-nowrap">{favourite.biodataUserOccupation}</td>
                  <td className="py-2 px-4 border-b border-gray-300 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(favourite._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FavouriteBiodatas;
