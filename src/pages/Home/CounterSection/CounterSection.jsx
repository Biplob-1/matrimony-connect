import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
  const [totalBiodatas, setTotalBiodatas] = useState(0);
  const [girlsBiodatas, setGirlsBiodatas] = useState(0);
  const [boysBiodatas, setBoysBiodatas] = useState(0);
  const [completedMarriages, setCompletedMarriages] = useState(0);

  useEffect(() => {
    setTotalBiodatas(150);
    setGirlsBiodatas(80);
    setBoysBiodatas(70);
    setCompletedMarriages(25);
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Success Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Total Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-blue-600">
            <CountUp start={0} end={totalBiodatas} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Girls Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-pink-600">
            <CountUp start={0} end={girlsBiodatas} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Boys Biodatas</h2>
          <p className="mt-4 text-3xl font-bold text-blue-600">
            <CountUp start={0} end={boysBiodatas} duration={5} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Completed Marriages</h2>
          <p className="mt-4 text-3xl font-bold text-green-600">
            <CountUp start={0} end={completedMarriages} duration={5} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
