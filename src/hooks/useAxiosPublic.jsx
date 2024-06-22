import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://shaadi-server-6h7v29ck1-biplobs-projects-e5d67261.vercel.app'

})
const useAxiosPublic = () => {
    return axiosPublic;
};
 export default useAxiosPublic;