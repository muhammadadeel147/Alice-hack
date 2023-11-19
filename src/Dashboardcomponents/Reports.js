import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu.jsx';
import { BsPerson } from 'react-icons/bs';
import SharedGrid from './SharedGrid.jsx';
import { Button } from 'primereact/button';

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Populate initial data
    const initialData = [];
    for (let i = 3; i <= 7; i++) {
      const entry = {
        id: i,
        ID: `ID${i}`,
        ProductName: `Product ${i}`,
        issueDate: '2023-01-07',
        approval: <BsPerson />,
        addedOn: `2023-01-07 ${(i % 12) + 1}:${(i % 60).toString().padStart(2, '0')} ${i < 12 ? 'AM' : 'PM'}`,
        action: '...',
        price: `$${(Math.random() * 1000).toFixed(2)}`,
        category: `Category ${Math.floor(Math.random() * 5) + 1}`,
      };

      initialData.push(entry);
    }

    setData(initialData);
  }, []);

  const handleAddNFT = () => {
    // Add a new entry when the "Add NFT" button is clicked
    const newEntry = {
      id: data.length + 1,
      ID: `ID${data.length + 1}`,
      ProductName: `Product ${data.length + 1}`,
      issueDate: '2023-01-07',
      approval: <BsPerson />,
      addedOn: `2023-01-07 ${(data.length % 12) + 1}:${(data.length % 60).toString().padStart(2, '0')} ${
        data.length < 12 ? 'AM' : 'PM'
      }`,
      action: '...',
      price: `$${(Math.random() * 1000).toFixed(2)}`,
      category: `Category ${Math.floor(Math.random() * 5) + 1}`,
    };

    setData([...data, newEntry]);
  };

  const ReportsColumns = [
    { field: 'ID', header: 'ID#' },
    { field: 'ProductName', header: 'Product' },
    { field: 'issueDate', header: 'Issue DATE' },
    { field: 'approval', header: 'APPROVALS' },
    { field: 'addedOn', header: 'ADDED ON' },
    { field: 'price', header: 'Price' },
    { field: 'category', header: 'Category' },
    { field: 'action', header: 'ACTION' },
  ];

  return (
    <div>
      <Sidebar />
      <h1 style={{ marginRight: '1350px', paddingBottom: '10px' }}>Reports</h1>
      <Menu />

      <div className="department-container">
        <div className="departbutton">
          <Button
            label="Add NFT"
            icon="pi pi-plus"
            onClick={handleAddNFT}
            style={{ marginRight: '1345px' }}
          />
        </div>
      </div>

      <SharedGrid data={data} columns={ReportsColumns} />
      <div></div>
    </div>
  );
}

export default Reports;
