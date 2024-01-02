import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { gridColumns } from '../../utils/GridColumns';
import { User } from '../../types/Users';
import UserService from '../../services/UserService';

import './GridExample.scss';

export const GridExample: React.FC = () => {
  const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.fetchUsers();
        setusers(data);
      } catch (error) {
        console.error('Error fetching data:', (error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ag-theme-alpine" data-testid="grid">
      <AgGridReact 
      rowData={users} 
      columnDefs={gridColumns}
      domLayout='autoHeight'
      defaultColDef={{ resizable: true }}
       />
    </div>
  );
};
