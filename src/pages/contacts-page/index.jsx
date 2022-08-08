import * as React from 'react';
import { Box } from '@mui/material';

const ContactsPage = () => (
  <Box sx={{
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
  }}
  >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71567.40877110025!2d23.258332238368638!3d55.90635065445076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e25c49ce7c89%3A0x400d18c70e9db00!2zxaBpYXVsaWFp!5e0!3m2!1slt!2slt!4v1659639053168!5m2!1slt!2slt" width={600} height={450} title="Google map" />
  </Box>
);

export default ContactsPage;
