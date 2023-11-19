import React,{useEffect,useState} from 'react'

import Sidebar from './Sidebar';
import Menu from './Menu.jsx';
import { BsPerson } from 'react-icons/bs';
import SharedGrid from './SharedGrid.jsx';
import { Button } from 'primereact/button';


function Reports() {

  const data = [];

  for (let i = 3; i <= 17; i++) {
    const entry = {
      id: i,
      employeeNumber: `EMP00${i}`,
      employeeName: `Employee ${i}`,
      attendanceDate: '2023-01-07',
      changeType: i % 2 === 0 ? 'In' : 'Out',
      status: i % 3 === 0 ? 'Approved' : 'Pending',
      approval:   <BsPerson />,
      addedOn: `2023-01-07 ${(i % 12) + 1}:${(i % 60).toString().padStart(2, '0')} ${i < 12 ? 'AM' : 'PM'}`,
      action: '...'
    };
    
    data.push(entry);
  }
  const ReportsColumns = [
    { field: 'employeeNumber', header: 'EMPLOYEE#' },
    { field: 'employeeName', header: 'EMPLOYEE' },
    { field: 'attendanceDate', header: 'ATTENDENCE DATE' },
    { field: 'changeType', header: 'CHANGE TYPE' },
    { field: 'status', header: 'STATUS' },
    { field: 'approval', header: 'APPROVALS' },
    { field: 'addedOn', header: 'ADDED ON' },
    { field: 'action', header: 'ACTION' },

  ];
  return (
    <div>
   
        
      <Sidebar/>
      <h1 style={{marginRight:"1350px",paddingBottom:"10px" }}>Reports</h1>
      <Menu/>
    
      <div className="department-container">
      <div className="departbutton">
          <Button
            label="Add NFT"
            icon="pi pi-plus"
            // onClick={() => setVisible(true)}
            style={{ marginRight: '1345px' }}
          />
        </div>
        </div>
       
      <SharedGrid data={data} columns={ReportsColumns}/>
      <div>
     
    </div>
      
    </div>
  )
}

export default Reports
