import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function League() {
  return (
    <>
      <Toolbar />
      <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>League page</Typography>
      <Toolbar />
    </>
  );
}
