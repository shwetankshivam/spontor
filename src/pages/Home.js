import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";

function Home() {
    return (
        <Box sx={{ backgroundColor: "#fff" }}>

            {/* Hero Section */}
            <Box
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
                        Seamless Sponsorship Starts Here
                    </Typography>
                    <Typography
                        color="textSecondary"
                        sx={{ mt: 2, fontSize: { xs: "16px", md: "20px" } }}
                    >
                        Connect. Support. Succeed.
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
                            About Us
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
                            At Spontor, we bridge the gap between athletes and sponsors,
                            creating a seamless connection that fuels success. Our platform
                            empowers athletes by providing them with the opportunities and
                            resources they need to thrive, while giving sponsors access to
                            promising talent that aligns with their brand values.
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 3, borderRadius: "8px" }}>
                            Learn More →
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://unsplash.com/photos/crowd-facing-lighted-stage-eXVd7gDPO9A"
                            alt="Athlete sponsorship"
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
            <Container sx={{ py: { xs: 6, md: 10 }, width: { xs: "100%", md: "80%" } }}>
                <Form />
            </Container>


            {/* Features Section */}
            <Container sx={{ py: { xs: 6, md: 10 }, width: { xs: "100%", md: "80%" } }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: { xs: "h4", md: "36px" },
                    }}
                >
                    Surpassing Standards for Outstanding Success
                </Typography>

                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {/* Feature 1 */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="/assets/concert1.jpeg"
                            alt="Empowering Athletes"
                            sx={{
                                width: "100%",
                                borderRadius: 3,
                                height: { xs: "auto", md: "250px" },
                                objectFit: "cover",
                            }}
                        />
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", mt: 2, fontSize: { xs: "18px", md: "24px" } }}
                        >
                            Empowering Athletes
                        </Typography>
                        <Typography color="textSecondary" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                            Spontor helps athletes secure sponsorships, gain exposure, and
                            connect with brands that support their journey.
                        </Typography>
                        <Button color="primary" sx={{ mt: 1, fontWeight: "bold" }}>
                            Read More →
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Testimonial />
        </Box>
    );
}

export default Home;
