import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Login() {
  return (
    <>
      <Toolbar />
      <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>Login page</Typography>
      <Toolbar />
    </>
  );
}
