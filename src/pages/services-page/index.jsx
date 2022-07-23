import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { ServisesCard } from './components';
import { Image } from '../../components';
import * as Services from './components';

const ServicesPage = () => {
  const [householdAppliances, setHouseholdAppliances] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/householdAppliances')
      .then((res) => res.json())
      .then((fetchedHouseholdAppliances) => setHouseholdAppliances(fetchedHouseholdAppliances));
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
          Buitinės technikos remontas
        </Typography>
        <Typography variant="h3" sx={{ textAlign: 'center', pb: 2 }}>
          Šiauliuose bei visoje Šiaulių apskrityje!
        </Typography>

        <Box
          sx={{
            width: 400,
          }}
        >
          <Image
            sx={{ p: 1 }}
            component="img"
            alt="Service-car"
            src="/Car-4.png"
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
            Remontą atliekame sklandžiai ir kokybiškai!
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ py: 3, px: 5 }}>
          {householdAppliances.map(({
            id,
            title,
            description,
            img,
          }) => (
            <Grid key={id} item xs={12} sm={6} lg={3}>
              <ServisesCard
                id={id}
                title={title}
                description={description}
                img={img}
              />
            </Grid>
          ))}
        </Grid>
      </Services.ContentContainer>
    </Box>

  );
};

export default ServicesPage;
