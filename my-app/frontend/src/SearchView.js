//
// Based on template from:
// https://mui.com/material-ui/getting-started/templates/
// https://github.com/mui/material-ui/tree/v5.10.13/docs/data/material/getting-started/templates/sign-in
//
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Typography from '@mui/material/Typography';


export default function SearchView({ handleSearch }) {
  const [city, setCity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(city.toLowerCase());
    setCity('');
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LocationCityIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Search for famous people in the city
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          value={city}
          autoFocus
          onChange={(event) => setCity(event.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
