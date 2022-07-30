/* eslint-disable max-len */
import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { ProductsCard } from './components';
import { Image } from '../../components';
import * as Services from './components';

const ProductsPage = () => {
  const [usedHouseholdAppliances, setUsedHouseholdAppliances] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/usedhouseholdAppliances')
      .then((res) => res.json())
      .then((fetchedUsedHouseholdAppliances) => setUsedHouseholdAppliances(fetchedUsedHouseholdAppliances));
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'secondary.main',
    }}
    >
      <Box sx={{
        backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 10,
        height: 500,
        width: '100%',
        textAlign: 'center',
      }}
      >

        <Typography variant="h5" sx={{ color: 'text.secondary', textAlign: 'center', p: 2 }}>
          LAIKO PATIKRINTA, GERIAUSIŲ GAMINTOJŲ, BUITINĖ TECHNIKA, UŽ ŽENKLIAI MAŽESNĘ KAINĄ!
        </Typography>
        <Typography variant="h3" sx={{ textAlign: 'center', pb: 2 }}>
          Šiauliuose bei visoje Šiaulių apskrityje!
        </Typography>

        <Box
          sx={{
            width: 250,
          }}
        >
          <Image
            sx={{ p: 1 }}
            component="img"
            alt="Service-car"
            src="/electric-appliance.png"
          />
        </Box>
      </Box>

      <Services.ContentContainer>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ mt: 10, p: 2, fontSize: 20 }}>
            Suteikiamos garantijos, visa priežiūra ir servisas, teikiamos atsarginės dalys
          </Typography>

          <Typography sx={{
            p: 2,
            fontSize: 28,
            color: 'text.primary',
          }}
          >
            Technikos atsargas atnaujiname kiekvieną dieną!
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ py: 3, px: 5 }}>
          {usedHouseholdAppliances.map(({
            id,
            device,
            manufacturer,
            model,
            price,
            img,
          }) => (
            <Grid key={id} item xs={12} sm={6} lg={3}>
              <ProductsCard
                id={id}
                device={device}
                manufacturer={manufacturer}
                model={model}
                price={price}
                img={img}
              />
            </Grid>
          ))}
        </Grid>
      </Services.ContentContainer>
    </Box>

  );
};

export default ProductsPage;
