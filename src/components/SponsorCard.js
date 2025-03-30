
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function SponsorCard({ sponsor }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{sponsor.name}</Typography>
        <Typography variant="body2">{sponsor.description}</Typography>
        <Button variant="contained" color="primary">Contact</Button>
      </CardContent>
    </Card>
  );
}

export default SponsorCard;