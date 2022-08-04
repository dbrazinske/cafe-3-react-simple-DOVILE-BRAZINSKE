import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Home from './components';
import { Image } from '../../components';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Home.Background sx={{ backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)' }} />

      <Home.ContentContainer>

        <Home.Content component="main">
          <Box>
            <Typography
              component="h1"
              variant="h3"
              sx={{ letterSpacing: '0.08em' }}
            >
              Buitinės technikos remontas
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              sx={{ letterSpacing: '0.08em' }}
            >
              Šiauliuose bei visoje Šiaulių apskrityje!
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 800,
              zIndex: 5,
            }}
          >
            <Image
              sx={{ p: 1 }}
              component="img"
              alt="Service-car"
              src="/Car-4.png"
            />
          </Box>
          <Typography variant="h6" sx={(theme) => ({ textAlign: 'center', letterSpacing: '0.08em', color: theme.palette.primary.main })}>
            Mūsų atliekamas buitinės technikos remontas puikus sprendimas,
            siekiantiems išsaugoti savo brangų laiką ir finansinę padėtį.
            Mes – Remontas 123 – stambios ir smulkios buitinės technikos meistrai,
            dirbantys Šiauliuose bei apylinkėse.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button sx={{ color: 'white' }} size="medium" variant="contained" onClick={() => navigate('/services')}>Paslaugos</Button>
            <Button sx={{ color: 'white' }} size="medium" variant="contained" onClick={() => navigate('/products')}>Naudota buitinė technika</Button>
          </Box>
        </Home.Content>
      </Home.ContentContainer>
    </Box>
  );
};

export default HomePage;
