import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#F8F9FA", py: 5, textAlign: "center" }}>
            <Container>
                {/* Logo */}
                <Typography variant="h5" fontWeight="bold">
                    Spontor.
                </Typography>

                {/* Navigation Links */}
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 3 }}>
                    {["Home", "About us", "Testimonials", "Get Started", "Contact us"].map((item) => (
                        <Link key={item} href="#" color="textSecondary" underline="none" sx={{ fontSize: 16 }}>
                            {item}
                        </Link>
                    ))}
                </Box>

                {/* Social Media Icons */}
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                    <IconButton color="primary">
                        <Facebook />
                    </IconButton>
                    <IconButton color="primary">
                        <Instagram />
                    </IconButton>
                    <IconButton color="primary">
                        <Twitter />
                    </IconButton>
                    <IconButton color="primary">
                        <LinkedIn />
                    </IconButton>
                </Box>

                {/* Copyright */}
                <Typography variant="body2" color="textSecondary" sx={{ mt: 3 }}>
                    © Spontor.io All rights reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
