import * as React from 'react';
import {
    Grid,
    Box,
    Typography,
} from '@mui/material';
import { ServisesCard } from './components';
import * as Services from './components';
import HandymanIcon from '@mui/icons-material/Handyman';

const ServicesPage = () => {
    const [householdAppliances, setHouseholdAppliances] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/householdAppliances')
            .then(res => res.json())
            .then(fetchedHouseholdAppliances => setHouseholdAppliances(fetchedHouseholdAppliances))
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'secondary.main'
        }} >
            <Box sx={{
                backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 20,
                height: 500,
                width:'100%',
                textAlign: 'center',
            }}>
                <HandymanIcon
                    sx={{ fontSize: 50 }}
                >
                </HandymanIcon>
                <Typography variant="h5" sx={{ color: 'text.secondary', textAlign: 'center', pb: 2 }}>
                    Buitinės technikos remontas
                </Typography>
                <Typography variant="h3" sx={{ textAlign: 'center', pb: 2 }}>
                    Šiauliuose bei visoje Šiaulių apskrityje!
                </Typography>
            </Box >


            <Services.ContentContainer>
                <Typography sx={{p: 2, fontSize: 20 }}>
                    Suteikiamos garantijos, visa priežiūra ir servisas, teikiamos atsarginės dalys
                </Typography>

                <Typography sx={{ p: 2, fontSize: 28, color: 'text.primary', textDecoration:'overline'}}>
                    Remontą atliekame sklandžiai ir kokybiškai!
                </Typography>
                <Grid container spacing={2} sx={{ py: 3, px: 5 }}>
                    {householdAppliances.map(householdAppliance => (
                        <Grid key={householdAppliance.id} item xs={12} sm={6} lg={3}>
                            <ServisesCard {...householdAppliance} />
                        </Grid>
                    ))}
                </Grid>
            </Services.ContentContainer>
        </Box>

    );
};

export default ServicesPage;