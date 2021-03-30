import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

interface contactInterface {
  setTitle: any;
  setPhone: any;
  setEmail: any;
  setImage: any;
}

function ContactsForm({ setTitle, setPhone, setEmail, setImage }: contactInterface) {

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Add New Contact
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          onChange={handleTitleChange}
          id="title"
          name="title"
          label="Contacts Title/Name"
          fullWidth
          autoComplete="title"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          multiline
          onChange={handlePhoneChange}
          id="phone"
          name="phone"
          label="Phone Number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          onChange={handleEmailChange}
          id="email"
          name="email"
          label="Email"
          fullWidth

        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          onChange={handleImageChange}
          id="image"
          name="image"
          label="Add an image Url"
          fullWidth
        />
      </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default ContactsForm
