import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box sx={{ backgroundColor: "#fff" }}>

            {/* Hero Section */}
            <Box id="home"
                sx={{
                    textAlign: "center",
                    py: { xs: 6, md: 10 },
                    backgroundColor: "#fff",
                }}
            >
                <Container>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "28px", md: "48px" },
                        }}
                    >
                        Fueling Events, Empowering Sponsors
                    </Typography>
                    <Typography
                        variant="body2"
                        color="primary"
                        sx={{ fontWeight: "bold", mt: 2, textTransform: "uppercase", fontSize: { xs: "80%", md: "48px" } }}
                    >
                        Pitch. Match. cash in
                    </Typography>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                        <Button variant="contained" color="primary" sx={{ px: 3, py: 1, borderRadius: "8px" }}>
                            Get Started
                        </Button>
                        <Button variant="outlined" color="primary" sx={{ px: 3, py: 1, borderRadius: "8px" }}>
                            Learn More →
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* About Us Section */}
            <Container sx={{ py: { xs: 6, md: 10, textAlign: "left" }, width: { xs: "100%", md: "80%" } }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography color="primary" sx={{ fontWeight: "bold" }}>
                            What we do ?
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                mt: 1,
                                fontSize: { xs: "24px", md: "36px" },
                            }}
                        >
                            Fueling Dreams, Powering Partnerships
                        </Typography>
                        <Typography color="textSecondary" sx={{ mt: 2, fontSize: { xs: "14px", md: "16px" } }}>
                            At <strong>Spontor</strong>, we connect brands with events in a seamless and result-oriented manner.
                            Our platform is built to eliminate friction in the sponsorship process—delivering high-conversion
                            collaborations between India’s leading events and ambitious brands.
                        </Typography>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" sx={{ mt: 3, borderRadius: "8px" }}>
                                Learn More →
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/03172139/Zomaland--1600x900.jpg"
                            alt="event"
                            sx={{
                                width: "100%",
                                borderRadius: 3,
                                height: { xs: "auto", md: "350px" },
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* why choose us  */}
            <Container sx={{ py: { xs: 6, md: 10, textAlign: "left" }, width: { xs: "100%", md: "80%" } }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography color="primary" sx={{ fontWeight: "bold" }}>
                            Why us ?
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ color: "#333" }}
                        >
                            For Brands that Expect More
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4 }}>
                            Whether you're a  <strong>startup</strong> looking to generate buzz or a global brand targeting Gen Z, Spontor gives you:
                            <ul style={{ paddingLeft: "1.5em", lineHeight: "1.8" }}>
                                <li>Access to high-impact youth-led platforms</li>
                                <li>Faster deal closure with verified opportunities</li>
                                <li>Smarter targeting via our in-house insights team</li>
                                <li>Peace of mind with a full-service sponsorship engine</li>
                            </ul>
                        </Typography>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" sx={{ mt: 1, borderRadius: "8px" }}>
                                Learn More →
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/03172139/Zomaland--1600x900.jpg"
                            alt="event"
                            sx={{
                                width: "100%",
                                borderRadius: 3,
                                height: { xs: "auto", md: "350px" },
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>






            {/* Sponsorship Form Section */}
            <Container id="contact" sx={{ py: { xs: 6, md: 10 }, width: { xs: "100%", md: "80%" } }}>
                <Form />
            </Container>
            <Testimonial />
        </Box>
    );
}

export default Home;
