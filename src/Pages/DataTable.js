import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './DataTable.css';

const columns = [
  { field: 'id', width: 190 },
  {
    field: 'appName',
    headerName: 'App Name',
    width: 250,
  },
  {
    field: 'authorName',
    headerName: 'Author Name',
    width: 250,
  },

];

const rows = [
  { id: 1, appName: 'Weather App', authorName: 'Jake Simon'},
  { id: 2, appName: 'My Facts App', authorName: 'Melissa Ria'},
  { id: 3, appName: 'Book Reccomender App', authorName: 'Sara Kruger'},
  { id: 4, appName: 'Geography Fact App', authorName: 'Elijah Peterson'},
];

export default function DataTable() {
  return (
    <div style={{height: 700, width: '660%'}} className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection 
        disableSelectionOnClick
        onSelectionModelChange={(selection)=> {
          console.log(selection)
        let input = prompt("Type in your input: ") 
        alert(input)
        }}
      />
    </div>
  );
}