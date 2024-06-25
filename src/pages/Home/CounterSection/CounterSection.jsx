import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CounterSection = () => {
  const axiosPublic = useAxiosPublic()
  const { data: allBiodatas = [] } = useQuery({
    queryKey: ['allBiodatas'],
    queryFn: async () => {
        const res = await axiosPublic.get('/allBiodatas');
        return res.data;
    },
});


const totalBiodata = allBiodatas.length;
const totalMaleBiodata = allBiodatas.filter(biodata => biodata.type === 'male').length;
const totalFemaleBiodata = allBiodatas.filter(biodata => biodata.type === 'female').length;

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Success Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Total Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-blue-600">
            <CountUp start={0} end={totalBiodata} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Girls Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-pink-600">
            <CountUp start={0} end={totalFemaleBiodata} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Boys Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-blue-600">
            <CountUp start={0} end={totalMaleBiodata} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Completed Marriages</h2>
          <p className="mt-4 text-3xl font-bold text-green-600">
            <CountUp start={0} end={700} duration={5} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
