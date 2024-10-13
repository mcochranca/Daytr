import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio: React.FC = () => {
  const data = {
    labels: ['Bitcoin', 'Ethereum', 'Litecoin'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Your Portfolio',
      },
    },
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Your Portfolio</Heading>
      <Doughnut data={data} options={options} />
    </Box>
  );
};

export default Portfolio;