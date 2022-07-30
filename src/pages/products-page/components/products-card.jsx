import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { Image, TypographyLimited } from '../../../components';
import CartContext from '../../../contexts/cart-context';

const ProductsCard = ({
  id,
  device,
  manufacturer,
  model,
  price,
  img,
}) => {
  const { addToCart } = React.useContext(CartContext);

  return (

    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="h6" component="div">{device}</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
        >
          <Typography sx={{ pt: 'none' }} variant="h6" component="div">{manufacturer}</Typography>
          <TypographyLimited variant="body2" color="text.secondary">{model}</TypographyLimited>
        </Box>
        <TypographyLimited>{price}</TypographyLimited>
      </CardContent>

      <CardActions sx={{ p: 1, alignSelf: 'center' }}>
        <Button size="small" variant="contained">Peržiūrėti</Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(id)}
        >
          Į krepšelį
        </Button>
      </CardActions>

    </Card>
  );
};

export default ProductsCard;
