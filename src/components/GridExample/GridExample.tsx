import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
}

// Create new GridExample component
export const GridExample = () => {
  // Row Data: The data to be displayed.
  const rowData: IRow[] = [
    {
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
    },
    {
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
    },
    {
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
    },
  ];

  // Column Definitions: Defines & controls grid columns.
  const colDefs: ColDef<IRow>[] = [{ field: 'mission' }, { field: 'company' }, { field: 'location' }];

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className="ag-theme-alpine" style={{ width: 610, height: 200 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
