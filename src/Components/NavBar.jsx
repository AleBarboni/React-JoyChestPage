import {Box, ButtonGroup, Button, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

function NavBar() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      marginBottom: 4,
    }}
  >
    <ButtonGroup 
      variant="text" 
      aria-label="text button group"
    >
      <Button 
        startIcon={<PersonIcon />} 
        sx={{paddingLeft: 3}}
      >
        <Typography 
          variant="subtitle2" 
          className='button-label' 
          sx={{paddingRight: 2}}
        >
          My Account
        </Typography>
      </Button>
      <Button 
        startIcon={<FavoriteIcon />} 
        sx={{paddingLeft: 3}}
      >
        <Typography 
          variant="subtitle2" 
          className='button-label' 
          sx={{paddingRight: 2}}
        >
          Favorites
        </Typography>
      </Button>
      <Button 
        startIcon={<ShoppingCartIcon />} 
        sx={{paddingLeft: 3}}
      >
        <Typography 
          variant="subtitle2" 
          className='button-label' 
          sx={{paddingRight: 2}}
        >
          Cart
        </Typography>
      </Button>
      <Button 
        startIcon={<LoginIcon />} 
        sx={{paddingLeft: 3}}
      >
        <Typography 
          variant="subtitle2" 
          className='button-label' 
          sx={{paddingRight: 2}}
        >
          Log In
        </Typography>
      </Button>
    </ButtonGroup>
  </Box>
);
}

export default NavBar;