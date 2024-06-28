import PageWrapper from "@/persentation/component/template/PageWrapper";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'col1', headerName: 'Column 1', width: 150, editable: true },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const CustomerView = () => {
  return (
    <PageWrapper title="Pelanggan" >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </PageWrapper>
  );
}

export default CustomerView;