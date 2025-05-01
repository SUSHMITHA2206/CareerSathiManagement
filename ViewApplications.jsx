import React, { useEffect, useState } from 'react';
import ApplicantService from '../services/ApplicantService';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Container,
    CircularProgress,
    Box,
} from '@mui/material';

const ViewApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApplicantService.getApplicants()
            .then((res) => {
                setApplications(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error fetching applications:', err);
                setLoading(false);
                console.log(err.data);
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
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                All Financial Aid Applications
            </Typography>
            <Grid container spacing={3}>
                {applications.map((app) => (
                    <Grid item xs={12} sm={6} md={4} key={app.id}>
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>{app.name}</Typography>
                                <Typography variant="body2"><strong>Email:</strong> {app.emailId}</Typography>
                                <Typography variant="body2"><strong>Annual Income:</strong> ${app.annualIncome}</Typography>
                                <Typography variant="body2"><strong>Need:</strong> {app.financialNeed}</Typography>
                                <Typography variant="body2"><strong>Documents:</strong> {app.supportingDocuments}</Typography>
                                <Typography variant="body2"><strong>Status:</strong> {app.status}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ViewApplications;
