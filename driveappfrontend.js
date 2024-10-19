import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriverProfile = () => {
   const [driver, setDriver] = useState({});

   useEffect(() => {
       axios.get('/api/driver/123')
           .then(response => setDriver(response.data))
           .catch(error => console.error('Error fetching driver data', error));
   }, []);

   return (
       <div className="driver-profile p-4">
           <h1>{driver.name}</h1>
           <img src={driver.qrCodeUrl} alt="QR Code" className="qr-code" />
           <p>Earnings: ${driver.earnings}</p>
       </div>
   );
};

export default DriverProfile;
