/*const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];*/
  import{GridColDef, GridValueGetterParams}  from '@mui/x-data-grid';
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID Evento', width: 150 , hideable:false, },
    { field: 'Fecha', headerName: 'Fecha', width: 150 },
    { field: 'Fuente', headerName: 'Fuente', width: 150 },
    { field: 'Tipo', headerName: 'Tipo', width: 200 },
    { field: 'Nivel', headerName: 'Nivel', width: 150, valueGetter: (params) => {
        if (params.value ==='INFO')   return '❕  INFO' ;
        if (params.value==='WARN')    return '⚠ WARN' ;
        if (params.value ==='ERR') return  '✖  ERR' ;
        } },
];
export const calculateCellClassName= (value: string)=> {
  if (value === '❕  INFO') {
    return 'info';
  }
  if (value === '⚠ WARN') {
    return 'warn';
  }
  if (value === '✖  ERR') {
    return 'err';
  }
  return ''; // Devuelve una cadena vacía por defecto
}
  export default columns;