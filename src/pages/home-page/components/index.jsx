import { Box, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  objectFit: 'cover',
});

export const ContentContainer = styled(Box)({
  position: 'realative',
  paddingTop: '64px',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 4, 4, 4),
  height: '80%',
  width: 800,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
}));
