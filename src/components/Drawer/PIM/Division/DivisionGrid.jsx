import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Data from "./data.json";
import Cdata from "./Cdata.json"

export default function DataGridDemo() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={Data}
        columns={Cdata}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
