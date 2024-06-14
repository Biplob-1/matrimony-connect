import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin now.`,
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
        })
    }
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are You Sure?",
            text: "You wan't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed){
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been Deleted.",
                            icon: "success"
                        })
                    }
                })
            }
        })
    }
    return(
        <div>
            <div className="flex justify-evenly my-4 ">
                <h3 className="text-3xl">All Users</h3>
                <h3 className="text-3xl">Total Users: {users.length}</h3>
            </div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Invoice #</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Roll</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.email}</p>
                                    </td>
                                    <td className="p-3">
                                        { user.plot === 'admin' ? 'Admin' : 
                                            <button type="button" onClick={() => handleMakeAdmin(user)} className="px-8 py-3 font-semibold border rounded text-gray-200 bg-green-600 hover:bg-green-800">User</button>
                                        }
                                    </td>
                                    <td className="p-3 text-right">
                                        <button onClick={() => handleDeleteUser(user)} type="button" className="px-8 py-3 font-semibold border rounded text-gray-200 bg-red-600 hover:bg-red-800">Delate</button>
                                    </td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
export default AllUsers;