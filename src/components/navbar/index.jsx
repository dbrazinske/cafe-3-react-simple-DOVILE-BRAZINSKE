import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as Nav from './components';

const pages = [
    { text: 'Apie mus', to: '/' },
    { text: 'Paslaugos', to: '/services-page' },
    { text: 'Kontaktai', to: '/contacts-page' },
];

const Navbar = () => {

    return (
        <AppBar position="fixed">
            <Typography
                component="h1"
                variant="h3"
                sx={(theme) => ({ letterSpacing: '0.08em', color: theme.palette.white, display:'flex', justifyContent:'center', my:2})}>
            Buitinės technikos remontas
           </Typography>

            <Toolbar sx={{ justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'center' } }}>
                
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ display: { sm: 'none' } }}
                >
                </IconButton>

                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignSelf: 'stretch',}}>
                    {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
                </Box>
                <MenuIcon sx={{ display: { md: 'none'} }} />
            </Toolbar>
        </AppBar>
    )
};


export default Navbar;