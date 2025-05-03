import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CircularProgress,

} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxXTgfenu6TSk_wE4neRqR16hfYO-ZUK7uTi5M_A60EckKHx_B4iDozuaz9nE1ptkX1/exec')
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success') {
          setEvents(data.events);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

    return `${day}/${month}/${year}, ${weekday}`;
  };


  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (

    <div style={{ padding: '6%' }}>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#002244', textTransform: 'uppercase', mb: 4 }}
      >
        Contact Now to Sponsor the Coming Events
      </Typography>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card style={{ borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', margin: '2%', padding: '4%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" >
                    {capitalizeFirstLetter(event.Name)}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    {formatDate(event.Date)}
                  </Typography>
                  {event.Image_URL && (
                    <img
                      src={event.Image_URL}
                      alt={event.Name}
                      style={{
                        width: '100%',
                        maxHeight: 200,
                        objectFit: 'cover',
                        borderRadius: 12,
                        margin: '12px 0',
                      }}
                    />
                  )}
                  <Typography variant="body2" style={{ margin: '8px 0' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 400, color: 'rgba(200, 0, 0, 0.8)' }}>about:</span> {event.Description}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontStyle: 'normal', fontWeight: 400, color: 'rgba(200, 0, 0, 0.8)' }}>Venue:</span> {event.Venue}
                  </Typography>

                  <Typography variant="body2" style={{ margin: '8px 0' }}>
                    <span style={{ fontStyle: 'normal', fontWeight: 400, color: 'rgba(200, 0, 0, 0.8)' }}>genre:</span> {event.Genre}
                  </Typography>

                  <Button
                    variant="contained"
                    style={{
                      marginTop: 12,
                      borderRadius: 20,
                      textTransform: 'none',

                    }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    Know More
                  </Button>

                  {event.Contact && (
                    <Button
                      variant="outlined"
                      style={{
                        marginTop: 12,
                        borderRadius: 20,
                        textTransform: 'none',
                        borderColor: '#3328BF',
                        color: '#3328BF',
                        marginLeft: '4em'
                      }}
                      href={`tel:${event.Contact}`}
                      startIcon={<PhoneIcon />}
                    >
                      Contact Now
                    </Button>
                  )}

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal */}
      <Dialog open={!!selectedEvent} onClose={() => setSelectedEvent(null)} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {selectedEvent?.Name}
          <IconButton onClick={() => setSelectedEvent(null)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedEvent?.Image_URL && (
            <img
              src={selectedEvent.Image_URL}
              alt={selectedEvent.Name}
              style={{ width: '100%', aspectRatio: '3/2', borderRadius: 12, objectFit: 'cover', marginBottom: 16 }}
            />
          )}
          <Typography variant="body2" gutterBottom>
            <strong>Date:</strong> {formatDate(selectedEvent?.Date)}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Genre:</strong> {selectedEvent?.Genre}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Venue:</strong> {selectedEvent?.Venue}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Description:</strong> {selectedEvent?.Description}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>All Details:</strong> {selectedEvent?.All_Details}
          </Typography>


          {selectedEvent?.Contact && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, borderRadius: 20, textTransform: 'none' }}
              href={`tel:${selectedEvent.Contact}`}
              startIcon={<PhoneIcon />} // <-- Phone icon added here
            >
              Contact Now
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
