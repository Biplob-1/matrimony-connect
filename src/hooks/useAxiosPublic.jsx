import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://shaadi-server-eta.vercel.app'

})
const useAxiosPublic = () => {
    return axiosPublic;
};
 export default useAxiosPublic;