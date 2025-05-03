import React from "react";
import { Box, Container, Typography, Link, IconButton, Grid } from "@mui/material";
import { Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#F8F9FA", py: 5 }}>
            <Container>
                {/* Logo */}
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    Spontor.
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                    <a href="https://www.instagram.com/spontor.live" target="_blank" rel="noopener noreferrer">
                        <IconButton color="primary">
                            <Instagram />
                        </IconButton>
                    </a>
                    <a href="https://x.com/workspontor" target="_blank" rel="noopener noreferrer">
                        <IconButton color="primary">
                            <Twitter />
                        </IconButton>
                    </a>
                    <a href="https://www.linkedin.com/company/spontor" target="_blank" rel="noopener noreferrer">
                        <IconButton color="primary">
                            <LinkedIn />
                        </IconButton>
                    </a>
                </Box>


                {/* Two Column Navigation */}
                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 4 }}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</RouterLink>
                            <RouterLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>About Us</RouterLink>
                            <RouterLink to="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact Us</RouterLink>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <RouterLink to="/faqs" style={{ textDecoration: "none", color: "inherit" }}>FAQs</RouterLink>
                            <RouterLink to="/terms" style={{ textDecoration: "none", color: "inherit" }}>Terms of Use</RouterLink>
                            <RouterLink to="/privacy" style={{ textDecoration: "none", color: "inherit" }}>Privacy Policy</RouterLink>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Typography variant="body2" color="textSecondary" sx={{ mt: 4, textAlign: "center" }}>
                    © Spontor.live All rights reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
