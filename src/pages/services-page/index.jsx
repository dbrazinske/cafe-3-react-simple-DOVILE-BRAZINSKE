import * as React from 'react';
import {
    Grid,
    Box,
    Typography
} from '@mui/material';
import { ServisesCard } from './components';

const ServicesPage = () => {
    const [householdAppliances, setHouseholdAppliances] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/householdAppliances')
            .then(res => res.json())
            .then(fetchedHouseholdAppliances => setHouseholdAppliances(fetchedHouseholdAppliances))
    }, []);

    return (
        <Box sx={(theme) => ({ bgcolor: theme.palette.grey[300]})} >
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 20, height: 500,
                    textAlign: 'center',
                    color: theme.palette.primary.main
                })}>
                    <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>
                        Suteikiamos garantijos, visa priežiūra ir servisas, teikiamos atsarginės dalys
                    </Typography>

                    <Typography variant="h5">
                        Remontą atliekame sklandžiai ir kokybiškai!
                    </Typography>
                </Box>

                <Grid container spacing={2} sx={{ py: 3, px: 30 }}>
                    {householdAppliances.map(householdAppliance => (
                        <Grid key={householdAppliance.id} item xs={12} sm={6} lg={3}>
                            <ServisesCard {...householdAppliance} />
                        </Grid>
                    ))}
                </Grid>

        </Box>

    );
};

export default ServicesPage;