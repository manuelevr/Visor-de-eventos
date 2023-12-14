import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { SlideProps } from '@mui/material/Slide';
import { rowType } from '../Tabla';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Importa SlideProps de la ubicación adecuada
import { useMediaQuery,Theme } from '@mui/material'
import { Tooltip } from '@mui/material';
import DataCard from './DataCard';


// Define las propiedades que se esperan para el componente SlideDialog
type SlideDialogProps = {
  open: boolean;        // Indica si el diálogo debe estar abierto o cerrado
  onClose: () => void;  // Función que se ejecuta cuando se cierra el diálogo
  title: string; 
  selectedRow:rowType; 
};
const theme = createTheme();
// Define una transición personalizada para el diálogo
const Transition = React.forwardRef<unknown, SlideProps>(function Transition(
    props: SlideProps,
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

// Define el componente SlideDialog
const SlideDialog: React.FC<SlideDialogProps> = ({ open, onClose,  selectedRow={
    id: 0,        
    Fecha: '',
    Fuente: '',
    Tipo: '',
    Nivel: '',
  } }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    // Define los estilos basados en el tamaño de pantalla
    const paperStyles = {
      width: '80%',
      height:  window.innerWidth<=848 ? '150vh' : '90vh',
      maxWidth:  '600px',
      maxHeight:  '800vh',
    };
    console.log("🚀 ~ file: SlideDialog.tsx:53 ~ paperStyles.isSmallScreen:", window.innerWidth)
    
  return (
    <ThemeProvider theme={theme}>
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      // Establece el ancho y la altura del diálogo según tus necesidades
      PaperProps={{
            style: paperStyles,
      }}
    >
      {/* La AppBar es la barra de encabezado del diálogo */}
      
      <div>
        <Toolbar     sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          
          minWidth: 100,
        }}>       
          <Tooltip title="close">
          <IconButton edge="start" size='large'  color="error" onClick={onClose} aria-label="close" >
            <CloseIcon />
          </IconButton>
          </Tooltip>
          {/* Título del modal */}
          <Typography variant="h6" sx={{marginX: 'auto' ,}}>
            {selectedRow.Fuente}
            
          </Typography>
        </Toolbar>
        <DataCard selectedRow ={selectedRow}></DataCard>
        {/* Aquí va el contenido del diálogo */}
      </div>
    </Dialog>
    </ThemeProvider>
  );
};


export default SlideDialog;
