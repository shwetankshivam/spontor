import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";


const AboutUs = () => {
    return (
        <>

            <Box id='about' sx={{ py: 8, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <Container maxWidth="md">

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#2c3e50", mb: 2 }}
                    >
                        About Spontor
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                        At <strong>Spontor</strong>, we connect brands with events in a seamless and result-oriented manner.
                        Our platform is built to eliminate friction in the sponsorship process—delivering high-conversion
                        collaborations between India’s leading events and ambitious brands.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#333" }}
                    >
                        Our Vision
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        We aim to become India’s go-to sponsorship ecosystem by making brand-event connections faster, smarter,
                        and more measurable. From local university fests to national expos, we simplify the matchmaking process
                        so both sides focus on what truly matters—engagement and impact.
                    </Typography>

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#333" }}
                    >
                        What Sets Us Apart
                    </Typography>
                    <ul style={{ paddingLeft: "1.5em", marginBottom: "2em", color: "#555", lineHeight: "1.8" }}>
                        <li><strong>Audience-Centric Insights:</strong> We use demographics, past performance, and marketing tone to match accurately.</li>
                        <li><strong>One Platform, Full Journey:</strong> From discovery to contract to campaign support—everything happens on Spontor.</li>
                        <li><strong>Data-Driven Execution:</strong> Sponsorships backed by verified reach, location relevance, and audience data.</li>
                    </ul>

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#333" }}
                    >
                        Our Network
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        We’ve built a curated ecosystem of over 50+ high-performing events across India. These include
                        IIT & IIM college festivals, tech summits, youth conferences, and startup showcases. Each event is
                        vetted, verified, and organized to deliver measurable brand outcomes.
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
                        Whether you're a startup looking to generate buzz or a global brand targeting Gen Z, Spontor gives you:
                        <ul style={{ paddingLeft: "1.5em", lineHeight: "1.8" }}>
                            <li>Access to high-impact youth-led platforms</li>
                            <li>Faster deal closure with verified opportunities</li>
                            <li>Smarter targeting via our in-house insights team</li>
                            <li>Peace of mind with a full-service sponsorship engine</li>
                        </ul>
                    </Typography>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#2c3e50", mt: 6 }}
                    >
                        Let’s Build Your Next Big Activation.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                        Spontor is here to help you find the right event, audience, and outcome. Because we don’t just match—we make it matter.
                    </Typography>

                </Container>
            </Box>

        </>
    );
};

export default AboutUs;
