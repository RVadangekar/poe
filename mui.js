import React, { useState } from 'react';
import { Button, TextField, Typography, Snackbar, Alert, Card, CardContent } from '@mui/material';

function Mui() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to handle Snackbar open
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  // Function to handle Snackbar close
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div style={{ padding:'20px'}}>
      <Typography variant="h4" gutterBottom>
        MUI Components Example
      </Typography>

      {/* MUI Button */}
      <Button variant="contained" color="primary" onClick={handleClickSnackbar}>
        Show Snackbar
      </Button>

      {/* MUI TextField */}
      <div style={{ marginTop: '20px' }}>
        <TextField label="Enter something" variant="outlined" fullWidth />
      </div>

      {/* MUI Card Component */}
      <div style={{ marginTop: '20px' }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Welcome to MUI Card
            </Typography>
            <Typography variant="body1">
              This is an example of using the Card component in Material-UI to display content.
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* MUI Alert Component */}
      <div style={{ marginTop: '20px' }}>
        <Alert severity="info">This is an informational alert!</Alert>
      </div>

      {/* Snackbar (for notifications) */}
      <Snackbar
        open={openSnackbar}
        message="This is a Snackbar message!"
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
}

export default Mui;
