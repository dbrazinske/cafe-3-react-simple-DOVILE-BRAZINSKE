import { Box, styled } from '@mui/material';

export { default as ProductsCard } from './products-card';

export const ContentContainer = styled(Box)({
  maxWidth: '1400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '20px',
  alignItems: 'center',
});
