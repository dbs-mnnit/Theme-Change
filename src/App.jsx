import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Box,
  InputAdornment,
  IconButton,
  Paper,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';
//import { createTheme, ThemeProvider, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material'
//import { createTheme, ThemeProvider, Container, Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const paletteOptions = [
  {
    primary: { main: '#4C5F7A' },
    secondary: { main: '#FFD700' },
    background: { default: '#F4F4F4' },
    text: { primary: '#1F2933' }
  },
  {
    primary: { main: '#4169E1' },
    secondary: { main: '#87CEFA' },
    background: { default: '#F0F8FF' },
    text: { primary: '#333333' }
  },
  {
    primary: { main: '#81C784' },
    secondary: { main: '#FFD54F' },
    background: { default: '#F9FBE7' },
    text: { primary: '#37474F' }
  },
  {
    primary: { main: '#673AB7' },
    secondary: { main: '#FF5722' },
    background: { default: '#F3E5F5' },
    text: { primary: '#212121' }
  },
  {
    primary: { main: '#1F2937' },
    secondary: { main: '#10B981' },
    background: { default: '#F3F4F6' },
    text: { primary: '#111827' }
  },
  {
    primary: { main: '#8E44AD' },
    secondary: { main: '#3498DB' },
    background: { default: '#2C3E50' },
    text: { primary: '#ECF0F1' }
  },
  {
    primary: { main: '#219EBC' },
    secondary: { main: '#FFB703' },
    background: { default: '#EDF6F9' },
    text: { primary: '#023047' }
  },
  {
    primary: { main: '#5C80BC' },
    secondary: { main: '#F2CC8F' },
    background: { default: '#F9F7F7' },
    text: { primary: '#3D405B' }
  },
  {
    primary: { main: '#4CAF50' },
    secondary: { main: '#FFB74D' },
    background: { default: '#FFF8E1' },
    text: { primary: '#263238' }
  },
  {
    primary: { main: '#0D7377' },
    secondary: { main: '#F54291' },
    background: { default: '#EAF6F6' },
    text: { primary: '#212121' }
  },
  {
    primary: { main: '#FF6F61' },
    secondary: { main: '#6B5B95' },
    background: { default: '#FDEDEC' },
    text: { primary: '#4A4A4A' }
  },
  {
    primary: { main: '#2C3E50' },
    secondary: { main: '#16A085' },
    background: { default: '#ECF0F1' },
    text: { primary: '#FFFFFF' }
  },
  {
    primary: { main: '#FFA500' },
    secondary: { main: '#4682B4' },
    background: { default: '#F0FFF4' },
    text: { primary: '#2E2E2E' }
  }
];


// Theme Configuration
// const theme = createTheme({
//   palette: {
//     primary: { main: '#4C5F7A' }, // Deep Steel Blue
//     secondary: { main: '#FFD700' }, // Golden Yellow
//     background: { default: '#F4F4F4' }, // Light Gray
//     text: { primary: '#1F2933' }, // Charcoal Black
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#4169E1' },
//     secondary: { main: '#87CEFA' },
//     background: { default: '#F0F8FF' },
//     text: { primary: '#333333' },
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#81C784' }, // Fresh Green
//     secondary: { main: '#FFD54F' }, // Sunset Yellow
//     background: { default: '#F9FBE7' }, // Pale Lime
//     text: { primary: '#37474F' }, // Subtle Black
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#673AB7' }, // Royal Purple
//     secondary: { main: '#FF5722' }, // Neon Orange
//     background: { default: '#F3E5F5' }, // Lavender
//     text: { primary: '#212121' }, // Jet Black
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#1F2937' }, // Gunmetal
//     secondary: { main: '#10B981' }, // Electric Green
//     background: { default: '#F3F4F6' }, // Cloud White
//     text: { primary: '#111827' }, // Graphite Black
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#8E44AD' }, // Electric Purple
//     secondary: { main: '#3498DB' }, // Neon Blue
//     background: { default: '#2C3E50' }, // Deep Charcoal
//     text: { primary: '#ECF0F1' }, // Soft White
//   },
// });

//  Important
// const theme = createTheme({
//   palette: {
//     primary: { main: '#219EBC' }, // Sea Blue
//     secondary: { main: '#FFB703' }, // Warm Yellow
//     background: { default: '#EDF6F9' }, // Light Aqua
//     text: { primary: '#023047' }, // Deep Ocean Blue
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#5C80BC' }, // Muted Royal Blue
//     secondary: { main: '#F2CC8F' }, // Soft Sand Yellow
//     background: { default: '#F9F7F7' }, // Subtle Off White
//     text: { primary: '#3D405B' }, // Deep Slate Gray
//   },
// });

// Important
// const theme = createTheme({
//   palette: {
//     primary: { main: '#4CAF50' }, // Fresh Green
//     secondary: { main: '#FFB74D' }, // Warm Amber
//     background: { default: '#FFF8E1' }, // Creamy Pale Yellow
//     text: { primary: '#263238' }, // Dark Slate
//   },
// });

// Important
// const theme = createTheme({
//   palette: {
//     primary: { main: '#0D7377' }, // Deep Teal
//     secondary: { main: '#F54291' }, // Vibrant Pink
//     background: { default: '#EAF6F6' }, // Icy Aqua
//     text: { primary: '#212121' }, // Neutral Charcoal
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: { main: '#FF6F61' }, // Candy Coral
//     secondary: { main: '#6B5B95' }, // Muted Violet
//     background: { default: '#FDEDEC' }, // Soft Peach
//     text: { primary: '#4A4A4A' }, // Slate Gray
//   },
// });


// const theme = createTheme({
//   palette: {
//     primary: { main: '#2C3E50' }, // Dark Midnight
//     secondary: { main: '#16A085' }, // Cool Teal
//     background: { default: '#ECF0F1' }, // Subtle Frost
//     text: { primary: '#FFFFFF' }, // Bright White
//   },
// });


// const theme = createTheme({
//   palette: {
//     primary: { main: '#FFA500' }, // Bright Orange
//     secondary: { main: '#4682B4' }, // Steel Blue
//     background: { default: '#F0FFF4' }, // Mint Cream
//     text: { primary: '#2E2E2E' }, // Neutral Graphite
//   },
// });





















const deals = [
  { id: 1, title: '50% Off on Electronics', description: 'Save big on gadgets!', category: 'Electronics' },
  { id: 2, title: '20% Off on Fashion', description: 'Trendy outfits at best prices!', category: 'Fashion' },
  { id: 3, title: 'Buy 1 Get 1 Free', description: 'Delicious meals just for you!', category: 'Food' },
  { id: 4, title: '30% Off on Groceries', description: 'Fresh food for less!', category: 'Groceries' },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    electronics: true,
    fashion: true,
    food: true,
    groceries: true,
  });

  // const [themeIndex, setThemeIndex] = useState(0); 
  // const handleThemeChange = (event) => { 
  //   setThemeIndex(event.target.value); 
  // }; 
  // const theme = createTheme({ palette: paletteOptions[themeIndex]});



  const [themeIndex, setThemeIndex] = useState(0); 
  const handleThemeChange = (index) => {
     setThemeIndex(index); 
    }; 
    const theme = createTheme({
       palette: paletteOptions[themeIndex]
    });

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const handleFilterChange = (category) => {
    setFilters({ ...filters, [category]: !filters[category] });
  };

  const filteredDeals = deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      filters[deal.category.toLowerCase()]
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar position="sticky" color="primary" elevation={3}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Deals & Coupons
          </Typography>
          <Button color="secondary" variant="contained" sx={{ borderRadius: '20px' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center',
          py: 5,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Deals & Coupons
        </Typography>
        <Typography variant="subtitle1">
          Discover the best deals, save big, and shop smart.
        </Typography>
      </Box>

      {/* <Container>
      
  
        <FormControl fullWidth margin="normal">
          
          
          <Select value={themeIndex} onChange={handleThemeChange}>
            
            {paletteOptions.map((palette, index) => (
              <MenuItem key={index} value={index}>
                
                Theme {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
    </Container> */}

<Container>
        <h1>Order Report</h1>
        <SearchIcon />
        <Typography variant="h6">Select Theme:</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
          {paletteOptions.map((palette, index) => (
            <Box
              key={index}
              sx={{
                width: 70,
                height: 40,
                backgroundColor: palette.primary.main,
                cursor: "pointer",
                border: themeIndex === index ? "2px solid black" : "none",
              }}
              onClick={() => handleThemeChange(index)}
            />
          ))}
        </Box>
        {/* Other components */}
        
      </Container>

      {/* Search and Filter Section */}
      <Container sx={{ py: 3 }}>
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for deals..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Filter by Category
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.electronics}
                        onChange={() => handleFilterChange('electronics')}
                        color="primary"
                      />
                    }
                    label="Electronics"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.fashion}
                        onChange={() => handleFilterChange('fashion')}
                        color="primary"
                      />
                    }
                    label="Fashion"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.food}
                        onChange={() => handleFilterChange('food')}
                        color="primary"
                      />
                    }
                    label="Food"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.groceries}
                        onChange={() => handleFilterChange('groceries')}
                        color="primary"
                      />
                    }
                    label="Groceries"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Deals Section */}
        <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
          Today's Deals
        </Typography>
        <Grid container spacing={3}>
          {filteredDeals.length ? (
            filteredDeals.map((deal) => (
              <Grid item xs={12} sm={6} md={4} key={deal.id}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary">
                      {deal.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      {deal.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="secondary" fullWidth>
                      Get Deal
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" color="textSecondary" sx={{ mt: 3 }}>
              No deals match your search or filters.
            </Typography>
          )}
        </Grid>
      </Container>
    
      
      
      {/* Footer */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center',
          py: 2,
          mt: 5,
        }}
      >
        <Typography variant="body2">© 2024 Deals & Coupons. All Rights Reserved.</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
