import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', fontSize: '2.5rem' }}>
          Welcome to EcoTrack!
        </h1>
        <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          EcoTrack is your partner in reducing carbon emissions. We help manufacturing and warehousing businesses
          monitor and analyze energy use to identify where emissions are coming from. By leveraging AI, IoT, and
          data analytics, we provide valuable insights and suggest sustainable solutions to lower your environmental
          impact.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link
          to="/emission-calculator"
          style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Calculate Your Emissions
        </Link>
      </div>
    </div>
  );
}

export default Home;