//import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      '& > *': {
        m: 1,
      },
    }}
  >
    <ButtonGroup variant="text" aria-label="text button group">
      <Button startIcon={<PersonIcon />}>My Account</Button>
      <Button>Favorites</Button>
      <Button>Cart</Button>
      <Button>Sign In</Button>
    </ButtonGroup>
  </Box>
);
}

export default App
