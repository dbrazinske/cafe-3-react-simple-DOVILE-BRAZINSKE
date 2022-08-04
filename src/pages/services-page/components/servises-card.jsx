import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Image, TypographyLimited } from '../../../components';

const ServisesCard = ({ title, img, description }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
        >
          <Typography variant="h5" component="div">{title}</Typography>
        </Box>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
      </CardContent>

      <CardActions sx={{ p: 2, alignSelf: 'center' }}>
        <Button size="medium" variant="contained" onClick={() => navigate('/service-order')}>Užsakyti</Button>
      </CardActions>

    </Card>
  );
};
export default ServisesCard;
