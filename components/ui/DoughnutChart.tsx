'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {
  balance?: number;
}

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({balance = 0}: DoughnutChartProps) => {

  const data ={
    datasets: [{
      data: [balance],
      label: 'Total Balance',
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(229, 231, 235, 0.3)']

    }],
    labels: ['Balance', 'Remaining'],
  }

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.toLocaleString()}`;
          }
        }
      }
    }
  }

  return <Doughnut data={data} options={options} />

}

export default DoughnutChart