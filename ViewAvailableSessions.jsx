import React, { useEffect, useState } from 'react';
import SessionService from '../services/SessionService';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Container,
    CircularProgress,
    Box,
} from '@mui/material';

const ViewTrainingSessions = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        SessionService.getSessions()
            .then((res) => {
                setSessions(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error fetching sessions:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Available Training Sessions
            </Typography>
            <Grid container spacing={3}>
                {sessions.map((session) => (
                    <Grid item xs={12} sm={6} md={4} key={session.id}>
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>{session.title}</Typography>
                                <Typography variant="body2"><strong>Instructor:</strong> {session.instructor}</Typography>
                                <Typography variant="body2"><strong>Description:</strong> {session.description}</Typography>
                                <Typography variant="body2"><strong>Location:</strong> {session.location}</Typography>
                                <Typography variant="body2"><strong>Start Time:</strong> {new Date(session.start_time).toLocaleString()}</Typography>
                                <Typography variant="body2"><strong>End Time:</strong> {new Date(session.end_time).toLocaleString()}</Typography>
                                <Typography variant="body2"><strong>Total Seats:</strong> {session.total_seats}</Typography>
                                <Typography variant="body2"><strong>Available Seats:</strong> {session.available_seats}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ViewTrainingSessions;
