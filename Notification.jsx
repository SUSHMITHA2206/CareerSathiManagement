import React from 'react';
import { Card, CardContent, Typography, Stack, Box, Alert, AlertTitle } from '@mui/material';

// Generate current ISO timestamp
const now = new Date().toISOString();

// Sample JSON data for notifications with current timestamp
const notificationData = [
  {
    id: 1,
    type: 'success',
    title: 'Login Successful',
    message: 'You have successfully logged in!',
    timestamp: now,
  },
  {
    id: 2,
    type: 'info',
    title: 'Profile Updated',
    message: 'Your profile information was updated.',
    timestamp: now,
  },
  {
    id: 3,
    type: 'warning',
    title: 'Password Reset',
    message: 'Your password has been reset.',
    timestamp: now,
  },
];

export default function NotificationCenter() {
  return (
    <Box sx={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Stack spacing={2}>
        {notificationData.map((note) => (
          <Card key={note.id} variant="outlined" sx={{ backgroundColor: '#f9f9f9' }}>
            <CardContent>
              <Alert severity={note.type}>
                <AlertTitle>{note.title}</AlertTitle>
                {note.message}
              </Alert>
              <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                {new Date(note.timestamp).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
