import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function Signup() {
  return (
    <Container>
      <Typography variant="h3">Sign Up</Typography>
      <TextField label="Full Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Sign Up</Button>
    </Container>
  );
}

export default Signup;
