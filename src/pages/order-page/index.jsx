import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Checkbox,
} from '@mui/material';

const devices = [
  {
    value: 'fridge',
    label: 'Šaldytuvas',
  },
  {
    value: 'freezer',
    label: 'Šaldiklis',
  },
  {
    value: 'stove',
    label: 'Viryklė',
  },
  {
    value: 'oven',
    label: 'Orkaitė',
  },
  {
    value: 'hob',
    label: 'Kaitlentė',
  },
  {
    value: 'coffeeMachine',
    label: 'Kavos aparatas',
  },
  {
    value: 'dishwasher',
    label: 'Indaplovė',
  },
  {
    value: 'washingMachine',
    label: 'Skalbimo mašina',
  },
  {
    value: 'dryer',
    label: 'Rubų džiovyklė',
  },
  {
    value: 'vacuumCleaner',
    label: 'Dulkių siurblys',
  },
  {
    value: 'other',
    label: 'Kita',
  },
];

const services = [
  { value: 'repair', label: 'Remontas' },
  { value: 'connection', label: 'Pajungimas' },
  { value: 'cleaning', label: 'Valymas' },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('');
  const [manufacturer, setManufacturer] = React.useState('Samsung');
  const [manufacturerCode, setManufacturerCode] = React.useState('RB34T600FSA/EF');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [device, setDevice] = React.useState(devices[0].value);
  const [service, setService] = React.useState(null);
  const [subscribtion, setSubscribe] = React.useState(true);

  return (
    <Box sx={{ pt: 7 }}>
      <Paper
        elevation={5}
        sx={{
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >

          <Divider textAlign="center" sx={{ width: '100%' }}>Iškvieskite meistrą internetu dabar!</Divider>

          <TextField
            name="device"
            select
            label="Prietaisas
            "
            variant="filled"
            onChange={(event) => setDevice(event.target.value)}
            value={device}
            fullWidth
          >
            {devices.map(
              ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
            )}
          </TextField>

          <TextField
            name="manufacturer"
            label="Gamintojas"
            variant="filled"
            fullWidth
            onChange={(event) => setManufacturer(event.target.value)}
            value={manufacturer}
          />
          <TextField
            name="manufacturerCode"
            label="Gamintojo kodas"
            variant="filled"
            fullWidth
            onChange={(event) => setManufacturerCode(event.target.value)}
            value={manufacturerCode}
          />

          <FormControl sx={{ width: '100%' }}>
            <FormLabel>Pasirinkite paslaugą</FormLabel>
            <RadioGroup
              sx={{ display: 'flex', flexDirection: 'row' }}
              name="service"
              value={service}
              onChange={(_, newGender) => setService(newGender)}
            >
              {services.map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>

          <TextField
            name="fullname"
            label="Vardas ir Pavardė"
            variant="filled"
            fullWidth
            onChange={(event) => setFullname(event.target.value)}
            value={fullname}
          />
          <TextField
            name="email"
            type="email"
            label="El. paštas"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <TextField
            name="phone"
            type="number"
            label="Tel. numeris"
            variant="filled"
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
            fullWidth
          />
          <TextField
            name="message"
            label="Žinutė"
            variant="filled"
            multiline
            rows={5}
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            fullWidth
          />

          <Box sx={{ alignSelf: 'flex-start' }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={subscribtion}
                  onChange={(_, newSubsribtion) => setSubscribe(newSubsribtion)}
                />
                            )}
              label="Susipažinau ir sutinku su taisyklėmis ir sąlygomis"
            />
          </Box>

          <Button type="submit" variant="contained" size="large">Iškviesti meistrą</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OrderPage;
