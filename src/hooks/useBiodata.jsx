import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { data: biodata = [] } = useQuery({
        queryKey: ['biodata', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodatas?email=${user.email}`)
            return res.data;
        }
    })
    return [biodata]
};
export default useBiodata;