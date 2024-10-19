import React from 'react';
import Sidebar from './Sidebar';
import DriverManagement from './DriverManagement';
import QRCodeGeneration from './QRCodeGeneration';

const AdminDashboard = () => {
   return (
       <div className="dashboard flex">
           <Sidebar />
           <div className="content-area flex-1 p-5">
               <h1 className="text-2xl font-bold">Admin Dashboard</h1>
               <DriverManagement />
               <QRCodeGeneration />
           </div>
       </div>
   );
};

export default AdminDashboard;
