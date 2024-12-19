import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

const DemandForecast: React.FC = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Delivery Demand',
        data: [30, 50, 45, 60, 70, 55, 65],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
        backgroundColor: (context: { chart: ChartJS }) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.5)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0.1)');
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        zoom: {
            pan: {
              enabled: true,
              mode: 'x' as const,
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: 'x' as const,
            },
        },
        legend: {
            display: true,
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Weekly Delivery Demand Forecast',
        },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Demand (Packages)',
        },
      },
    },
    tooltip: {
        callbacks: {
          label: (context: { raw: number }) => `Demand: ${context.raw} packages`,
        },
    },
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure it only runs on the client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;  // Show loading if on server-side
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">Demand Forecast</h2>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    </div>
  );
};

export default DemandForecast;