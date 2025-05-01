import React, { useEffect } from 'react';
import { Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // change to your actual profile route if different
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Alert severity="success" variant="filled">
        Successfully Logged Out. Redirecting to profile...
      </Alert>
    </Box>
  );
};

export default Logout;
