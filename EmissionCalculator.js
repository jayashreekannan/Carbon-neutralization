import React, { useState } from 'react';

const EmissionCalculator = () => {
  const [electricity, setElectricity] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    // Placeholder for emission calculation logic
    // Replace with actual calculation based on industry standards
    let calculatedEmissions = 0;
    if (electricity) {
      calculatedEmissions += parseFloat(electricity) * 0.5; // Example: 0.5 kg CO2/kWh
    }
    if (fuelType && fuelConsumption) {
      if (fuelType === 'diesel') {
        calculatedEmissions += parseFloat(fuelConsumption) * 2.68; // Example: 2.68 kg CO2/liter
      } else if (fuelType === 'natural_gas') {
        calculatedEmissions += parseFloat(fuelConsumption) * 1.95; // Example: 1.95 kg CO2/cubic meter
      }
    }
    setEmissions(calculatedEmissions);
  };

  return (
    <div>
      <h2>Emission Calculator</h2>
      <div>
        <label>
          Electricity Consumption (kWh):
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Fuel Type:
          <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="">Select</option>
            <option value="diesel">Diesel</option>
            <option value="natural_gas">Natural Gas</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Fuel Consumption (liters/cubic meters):
          <input
            type="number"
            value={fuelConsumption}
            onChange={(e) => setFuelConsumption(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateEmissions}>Calculate Emissions</button>
      {emissions !== null && (
        <p>Calculated Emissions: {emissions.toFixed(2)} kg CO2</p>
      )}
    </div>
  );
};

export default EmissionCalculator;