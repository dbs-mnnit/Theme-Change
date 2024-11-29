// import React from 'react'
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
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
// import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';
const Footer = () => (
    <Box
      bgcolor="primary.main"
      color="white"
      py={3}
      textAlign="center"
      mt={4}
    >
      <Typography variant="body2">© 2024 Deals & Coupons. All Rights Reserved.</Typography>
    </Box>
  );

export default Footer
