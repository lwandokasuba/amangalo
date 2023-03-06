import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();
  const handleClick = (to: string) => {
    navigate(to);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amangalo
          </Typography>
          <Button onClick={() => handleClick('/')} color="inherit">Home</Button>
          <Button onClick={() => handleClick('league')} color="inherit">Leagues</Button>
          <Button onClick={() => handleClick('tournament')} color="inherit">Tournaments</Button>
          <Button onClick={() => handleClick('register')} color="inherit">Register</Button>
          <Button onClick={() => handleClick('login')} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
