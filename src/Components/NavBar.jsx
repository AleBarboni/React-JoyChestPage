import {Box, ButtonGroup, Button} from '@mui/material';
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
    }}
  >
    <ButtonGroup 
      variant="text" 
      aria-label="text button group"
      >
      <Button startIcon={<PersonIcon />}>My Account</Button>
      <Button startIcon={<FavoriteIcon />}>Favorites</Button>
      <Button startIcon={<ShoppingCartIcon />}>Cart</Button>
      <Button startIcon={<LoginIcon />}>Log In</Button>
    </ButtonGroup>
  </Box>
);
}

export default NavBar;