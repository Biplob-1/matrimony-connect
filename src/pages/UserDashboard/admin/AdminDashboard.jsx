import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartData, setChartData] = useState(null);

    const { data: allBiodatas = [] } = useQuery({
        queryKey: ['allBiodatas'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allBiodatas');
            return res.data;
        },
    });

    const { data: contactRequests = [] } = useQuery({
        queryKey: ['contact-requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contact-requests');
            return res.data;
        },
    });

    const Revenue = contactRequests.reduce((sum, request) => sum + request.amount, 0);
    const totalRevenue = Revenue / 100; 
    const premiumRevenue =20; 
    const totalBiodata = allBiodatas.length;
    const totalMaleBiodata = allBiodatas.filter(biodata => biodata.type === 'male').length;
    const totalFemaleBiodata = allBiodatas.filter(biodata => biodata.type === 'female').length;

    // Effect to update chart data
    useEffect(() => {
        if (totalBiodata > 0) {
            const data = {
                labels: ['Total Biodata', 'Male Biodata', 'Female Biodata', 'Premium Biodata', 'Total Purchasing contact Revenue'],
                datasets: [
                    {
                        label: 'Biodata Distribution',
                        data: [totalBiodata, totalMaleBiodata, totalFemaleBiodata, premiumRevenue, totalRevenue],
                        backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6'],
                        hoverOffset: 4,
                    },
                ],
            };
            setChartData(data);
        }
    }, [totalBiodata, totalMaleBiodata, totalFemaleBiodata, premiumRevenue, totalRevenue]);

    // Effect to create or update chart instance
    useEffect(() => {
        if (!chartData || !chartRef.current) return;

        if (chartInstance) {
            chartInstance.destroy();
        }

        const newChartInstance = new Chart(chartRef.current, {
            type: 'pie',
            data: chartData,
            options: {
                // Chart.js options
            }
        });

        setChartInstance(newChartInstance);

        return () => {
            newChartInstance.destroy();
        };
    }, [chartData]);

    return (
        <div className="container mx-auto">
            <h3 className="text-center text-3xl font-bold mt-5">Admin Dashboard</h3>
            <div  className="flex items-center justify-center mt-8" >
                {/* Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-3">
                    <h3 className="text-lg font-semibold mb-4 text-center">Biodata Distribution</h3>
                    <canvas ref={chartRef} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
