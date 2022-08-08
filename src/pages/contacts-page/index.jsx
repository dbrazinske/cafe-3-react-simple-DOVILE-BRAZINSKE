import * as React from 'react';
import { Box, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { Image } from '../../components';

const ContactsPage = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
  }}
  >

    <Box sx={{
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      p: 3,
      borderRadius: 3,
    }}
    >
      <Box>

        <PlaceIcon />
        <Typography>
          Darbo laikas:
        </Typography>
        <Typography>I-V 9:00 – 19:00 val.</Typography>
        <Typography>VI 10:00 – 14:00 val.</Typography>
        <Typography>VII Nedirbame</Typography>
        <br />
        <Typography>Kontaktai:</Typography>
        <Typography>+370 698 30216</Typography>
        <Typography>123remontas@gmail.com</Typography>
        <br />
      </Box>
      <Box
        sx={{
          maxWidth: 200,
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
      <Box>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71567.40877110025!2d23.258332238368638!3d55.90635065445076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e25c49ce7c89%3A0x400d18c70e9db00!2zxaBpYXVsaWFp!5e0!3m2!1slt!2slt!4v1659639053168!5m2!1slt!2slt" width={500} height={350} title="Google map" />
      </Box>
    </Box>

  </Box>

);

export default ContactsPage;
