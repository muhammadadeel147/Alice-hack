
import React,{useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./SharedGrid.css"

const SharedGrid = ({ data,columns, }) => {
 
    const [selectedProducts, setSelectedProducts] = useState(null);

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };
  const startRecord = first + 1;
  const endRecord = Math.min(first + rows, data.length);
  const totalRecords = data.length;

  return (
    <div className="shared-grid">
    <div className="card" style={{ marginLeft: "210px",  }}>
    <DataTable
          value={data}
          rows={rows}
          first={first}
          paginator={true}
          onPage={onPageChange}
          selectionMode="multiple"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown  "
          rowsPerPageOptions={[5, 10, 15,20,25]} 
          currentPageReportTemplate={`Results: ${startRecord}-${endRecord} of ${totalRecords}`}

        >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        {columns.map((column) => (
          <Column
            key={column.field}
            field={column.field}
            header={column.header}
          />
        ))}
     

      </DataTable>
   
    </div>
  </div>
);
};

export default SharedGrid;