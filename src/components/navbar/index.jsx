import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from 'react-router-dom';
import { Image } from '..';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Paslaugos', to: '/services' },
  { text: 'Naudota buitinė technika', to: '/products' },
  { text: 'Kontaktai', to: '/contacts' },
  { text: 'Meistro iškvietimas', to: '/service-order' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
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

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => navigate('/cart')}
        >
          <LocalMallIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
