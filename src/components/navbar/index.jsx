import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from '..';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Paslaugos', to: '/services' },
  { text: 'Kontaktai', to: '/contacts' },
  { text: 'Meistro iškvietimas', to: '/call' },
];

const Navbar = () => (
  <AppBar position="fixed">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{
        alignSelf: 'stretch',
        height: 64,
        display: 'flex',
      }}
      >
        <Box>
          <Image
            sx={{ p: 1 }}
            component="img"
            alt="Logo"
            src="/Logo.png"
          />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

      </Box>

    </Toolbar>
  </AppBar>
);

export default Navbar;
