// src/pages/NotFound.js
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ mt: 3, borderRadius: '8px' }}>
          Go Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
