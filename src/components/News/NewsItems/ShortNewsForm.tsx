import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

interface shortInterface {
  setShortDescription: any;
  setImage: any;
}
export default function ShortNewsForm({
  setShortDescription,
  setImage
}: shortInterface) {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShortDescription(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add meta details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            onChange={handleDescriptionChange}
            required id="description"
            label="Add a short description"
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            onChange={handleImageChange}
            required
            id="image"
            label="Add an image url"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}