import React from 'react';
import { useParams } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TournamentDetails() {
  const { tournamentId } = useParams();
  return (
    <>
      <Toolbar />
      <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
        {tournamentId || 'Unknown'}
        {' '}
        Tournament
      </Typography>
      <Toolbar />
    </>
  );
}
