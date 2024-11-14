import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const [timeframe, setTimeframe] = useState('monthly');

  // Data for each timeframe
  const dataByTimeframe = {
    daily: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [1200, 1500, 1300, 1700, 1600, 2000, 1800],
    },
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [5000, 7000, 6000, 8000],
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [12000, 15000, 13000, 17000, 16000, 20000],
    },
    yearly: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [60000, 75000, 90000, 85000, 95000],
    },
  };

  // Get data for the selected timeframe
  const currentData = dataByTimeframe[timeframe];

  // Chart data
  const data = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'Total Balance',
        data: currentData.data,
        borderColor: 'rgba(93, 102, 255, 0.8)',
        backgroundColor: 'rgba(93, 102, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Balance Overview',
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      {/* Timeframe selection menu */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {['daily', 'weekly', 'monthly', 'yearly'].map((frame) => (
          <button
            key={frame}
            onClick={() => setTimeframe(frame)}
            style={{
              padding: '10px',
              margin: '0 5px',
              backgroundColor: timeframe === frame ? 'rgba(93, 102, 255, 0.8)' : '#f0f0f0',
              color: timeframe === frame ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {frame.charAt(0).toUpperCase() + frame.slice(1)}
          </button>
        ))}
      </div>

      {/* Line chart */}
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
