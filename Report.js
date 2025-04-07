import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import necessary Chart.js components

const Report = () => {
  const [emissionData, setEmissionData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    dataType: 'total', // e.g., 'total', 'electricity', 'fuel'
  });

  // Sample emission data (replace with actual data fetching)
  useEffect(() => {
    // Simulated API call or data loading
    const sampleData = [
      { date: '2023-01', total: 100, electricity: 60, fuel: 40 },
      { date: '2023-02', total: 110, electricity: 65, fuel: 45 },
      { date: '2023-03', total: 120, electricity: 70, fuel: 50 },
      { date: '2023-04', total: 130, electricity: 75, fuel: 55 },
      { date: '2023-05', total: 140, electricity: 80, fuel: 60 },
    ];
    setEmissionData(sampleData);
  }, []);

  useEffect(() => {
    const filteredData = emissionData.filter(item => {
      if (filters.startDate && item.date < filters.startDate) return false;
      if (filters.endDate && item.date > filters.endDate) return false;
      return true;
    });

    const labels = filteredData.map(item => item.date);
    const data = filteredData.map(item => item[filters.dataType]);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: `Emissions (${filters.dataType})`,
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });

  }, [emissionData, filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const exportData = () => {
    // Implement data export functionality (e.g., CSV download)
    console.log('Exporting data:', emissionData);
    // You might use a library like 'js-file-download' for this
  };

  return (
    <div>
      <h1>Emission Report</h1>

      {/* Filters */}
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input type="text" name="startDate" value={filters.startDate} onChange={handleFilterChange} placeholder="YYYY-MM" />

        <label htmlFor="endDate">End Date:</label>
        <input type="text" name="endDate" value={filters.endDate} onChange={handleFilterChange} placeholder="YYYY-MM" />

        <label htmlFor="dataType">Data Type:</label>
        <select name="dataType" value={filters.dataType} onChange={handleFilterChange}>
          <option value="total">Total</option>
          <option value="electricity">Electricity</option>
          <option value="fuel">Fuel</option>
        </select>
      </div>

      {/* Chart */}
      {chartData.datasets && chartData.datasets.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>No data to display.</p>
      )}

      {/* Export Button */}
      <button onClick={exportData}>Export Data</button>
    </div>
  );
};

export default Report;