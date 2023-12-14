import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, green } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LocationOn, Category,Key,CalendarMonth,NotificationImportant, Warning,Error } from '@mui/icons-material';

//import { FavoriteIcon, CalendarMonthIcon, KeyIcon} from '@mui/icons-material';

import { rowType } from '../Tabla';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
type DataCardProps = {
    selectedRow:rowType; 
  };
  const DataCard : React.FC<DataCardProps>  = ({selectedRow={
    id: 0,        
    Fecha: '',
    Fuente: '',
    Tipo: '',
    Nivel: '',
  }})=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ }} >
      <CardHeader
        sx={{  textAlign: 'center',}}        
        title="Id Evento"
        subheader={selectedRow.id }
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <Key />
          </Avatar>
        }
      />
      <CardHeader
        sx={{  textAlign: 'center',}}        
        title="Facha y hora"
        subheader={selectedRow.Fecha}
        avatar={
          <Avatar sx={{ bgcolor:green[500] }} aria-label="recipe">
            <CalendarMonth />
          </Avatar>
        }
      />
      <CardHeader
        sx={{  textAlign: 'center',}}        
        title="Fuente"
        subheader={selectedRow.Fuente}
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <LocationOn />
          </Avatar>
        }
      />
      <CardHeader
        sx={{  textAlign: 'center',}}        
        title="Tipo"
        subheader={selectedRow.Tipo}
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
           <Category/>
          </Avatar>
        }
      />
      <CardHeader
        sx={{  textAlign: 'center',}}        
        title="Nivel"
        subheader={selectedRow.Nivel}
        avatar={
            <IconoNivel nivel={selectedRow.Nivel} />
        }
      />
     
      <CardContent>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion:</Typography>
        
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
function IconoNivel({ nivel }: { nivel: string }) {
    let icono;
  
    // Determina qué icono mostrar según el valor de nivel
    switch (nivel) {
      case 'INFO':
        icono = <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe"><NotificationImportant /></Avatar>;
        break;
      case 'WARN':
        icono = <Avatar sx={{ bgcolor: 'yellow' }} aria-label="recipe"><Warning /></Avatar>;
        break;
      case 'ERR':
        icono = <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe"><Error /></Avatar>;
        break;
      default:
        // En caso de que nivel no coincida con ninguno de los valores anteriores, puedes mostrar un icono predeterminado o manejarlo de otra manera.
        icono = <Avatar aria-label="recipe"><NotificationImportant /></Avatar>;
        break;
    }
  
    return icono;
  }


export default  DataCard;