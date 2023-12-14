import React, { useState } from 'react'; 
import { DataGrid, esES, GridCellParams } from '@mui/x-data-grid';
import columns, { calculateCellClassName } from './Table/Columns'; 
import rows from './Table/Rows'; 
import SlideDialog from './Slide/SlideDialog';

export type rowType = {
  id: number;
  Fecha: string;
  Fuente: string;
  Tipo: string;
  Nivel: string;
};
export default function DataTable() {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState({
    id: 0,        
    Fecha: '',
    Fuente: '',
    Tipo: '',
    Nivel: '',
  });
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='custom-data-table' style={{ height: "80%", width: '800px', padding: '20px' }}>
      <SlideDialog open={open} title='hola' selectedRow ={row} onClose={handleClose} />
      <DataGrid
        
        density ={'comfortable'}
        //editMode='row'
        
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        onRowClick={(row) => {
          setRow(row.row)
          
          handleOpen();
          }
        }
        className="custom-cell"
        localeText={esES.components.MuiDataGrid.defaultProps.localeText} // Configura el texto localizado para la tabla a español
        rows={rows} // Define las filas de la tabla
        columns={columns} // Define las columnas de la tabla
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }, // Configura la paginación inicial
          },
        }}
        pageSizeOptions={[5, 10]} // Opciones para el tamaño de página
        getCellClassName={(params: GridCellParams<any, any, string>)=> {
          return calculateCellClassName(params.value);
        }}
        
      />
    </div>
  );
}
