// Generate a footer using Material UI that is attached to the bottom of the page
// and contains a link to the GitHub repository for this project.

import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkMui from '@mui/material/Link';

export function Footer() {
  return (
    <footer style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '60px',
      color: 'white',
      backgroundColor: 'black',
    }}
    >
      <Toolbar>
        <Typography variant="body1" color="textSecondary" align="center">
          <LinkMui
            component={Link}
            to="https://github.com/lwandokasuba/amangalo"
            color="white"
            underline="none"
          >
            Amangalo
          </LinkMui>
        </Typography>
      </Toolbar>
    </footer>
  );
}
