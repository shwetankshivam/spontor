import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#FFF", boxShadow: "none", padding: "10px 0" }}>
            <Container>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Home Button */}
                    <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>
                        Spontor.
                    </Typography>

                        {/* Events Button - Mobile View */}
                        <Button
                            component={Link}
                            to="/events"
                            sx={{
                                display: { xs: "block", md: "none" },
                                border: "1px solid #3328BF",
                                borderRadius: "8px",
                                textTransform: "none",
                                fontSize: "16px",
                                px: 2,
                                color: "black",
                                ml: 2,
                                mr: 2
                            }}
                        >
                            Upcoming events
                        </Button>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                            <Button component={Link} to="/testimonials" sx={{ textTransform: "none", fontSize: "16px", color: "black" }}>Testimonials</Button>
                            <Button component={Link} to="/about" sx={{ textTransform: "none", fontSize: "16px", color: "black" }}>About Us</Button>
                            <Button component={Link} to="/events" sx={{ textTransform: "none", fontSize: "16px", border: "1px solid #3328BF", borderRadius: "8px", px: 2, color: "black" }}>Upcoming Events</Button>
                            <Button component={Link} to="/contact" sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#3328BF", borderRadius: "8px", px: 2, color: "white" }}>Contact Us</Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton sx={{ display: { xs: "block", md: "none" }, color: "black" }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                </Toolbar>
            </Container>


            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{ sx: { borderRadius: "12px", padding: "2em", textAlign: "center", margin: "0% 8%" } }}
            >
                <List sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Typography variant="h5" component={Link} to="/" sx={{ fontWeight: "bold", color: "black", textDecoration: "none", }}>
                        Spontor.
                    </Typography>
                    {/* Testimonials - Bordered Button */}
                    <ListItem
                        button
                        component={Link}
                        to="/testimonials"
                        onClick={handleDrawerToggle}
                        sx={{
                            border: "1px solid #3328BF",
                            borderRadius: "8px",
                            textAlign: "center",
                            px: 2,
                            py: 1,
                            minWidth: "auto",
                            display: "inline-block"
                        }}
                    >
                        <ListItemText primary="Testimonials" sx={{ color: "black", textAlign: "center" }} />
                    </ListItem>

                    {/* About Us - Bordered Button */}
                    <ListItem
                        button
                        component={Link}
                        to="/about"
                        onClick={handleDrawerToggle}
                        sx={{
                            border: "1px solid #3328BF",
                            borderRadius: "8px",
                            textAlign: "center",
                            px: 2,
                            py: 1,
                            minWidth: "auto",
                            display: "inline-block"
                        }}
                    >
                        <ListItemText primary="About Us" sx={{ color: "black", textAlign: "center" }} />
                    </ListItem>

                    {/* Upcoming Events - Bordered Button */}
                    <ListItem
                        button
                        component={Link}
                        to="/events"
                        onClick={handleDrawerToggle}
                        sx={{
                            border: "1px solid #3328BF",
                            borderRadius: "8px",
                            color: "white",
                            textAlign: "center",
                            px: 1,
                            py: 1,
                            minWidth: "auto",
                            display: "inline-block"
                        }}
                    >
                        <ListItemText primary="Upcoming Events" sx={{ color: "black", textAlign: "center" }} />
                    </ListItem>

                    {/* Contact Us - Solid Button */}
                    <ListItem
                        button
                        component={Link}
                        to="/contact"
                        onClick={handleDrawerToggle}
                        sx={{
                            // border: "1px solid #3328BF",
                            backgroundColor: "#3328BF",
                            color: "white",
                            borderRadius: "8px",
                            textAlign: "center",
                            px: 1,
                            py: 1,
                            minWidth: "auto",
                            display: "inline-block"
                        }}
                    >
                        <ListItemText primary="Contact Us" sx={{ color: "white" }} />
                    </ListItem>

                    {/* Close Button */}
                    <ListItem disablePadding sx={{ mt: 2 }}>
                        <ListItemText
                            primary="Close"
                            sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                            onClick={handleDrawerToggle}
                        />
                    </ListItem>
                </List>
            </Drawer>

        </AppBar>
    );
}

export default Navbar;
