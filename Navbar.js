import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = ({ isAuthenticated }) => {

    return (
        <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px 0', display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Left-aligned menu items */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft:'20px'}}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding:0 }}>
                    <li>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/emission-calculator" style={{ color: 'white', textDecoration: 'none' }}>Emission Calculator</Link>
                    </li>
                    <li>
                        <Link to="/report" style={{ color: 'white', textDecoration: 'none' }}>Report</Link>
                    </li>
                </ul>
            </div>
             {/* Centered title */}
             <div style={{ fontSize: '1.5rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>EcoTrack</div>

            {/* Right-aligned menu items (Sign In/Sign Up) */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
                 {!isAuthenticated && (
                        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding:0 }}>
                        <li>
                            <Link to="/sign-in" style={{ color: 'white', textDecoration: 'none' }}>Sign In</Link>
                        </li>
                        <li> <Link to="/sign-up" style={{ color: 'white', textDecoration: 'none' }}>Sign Up</Link>
                      </li>
                        </ul>
                      
                    
                )}</div>
        </nav>
    );
};

export default Navbar;