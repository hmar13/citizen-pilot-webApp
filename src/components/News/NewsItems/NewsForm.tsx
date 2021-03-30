/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const category = [{ value: 'General' }, { value: 'Road-closures' }, { value: 'Weather-warnings' }, { value: 'Transport-delays' }, { value: 'Reminders' }];

interface newsInterface {
  setTitle: any;
  selectedCategory: string;
  setCategory: any;
  setLongDescription: any;

  setLocation: any;


  setdate: any;
}

export default function NewsForm({
  setTitle,
  selectedCategory,
  setCategory,
  setLongDescription,
  setLocation,
  setdate
}: newsInterface) {

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongDescription(event.target.value);
  };
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdate(event.target.value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add your news
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleTitleChange}
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="title"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="category"
            select
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
            name="category"
            fullWidth
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}

          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            onChange={handleDescriptionChange}
            id="description"
            name="description"
            label="Add a detailed description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={handleLocationChange}
            id="location"
            name="address"
            label="Location"
            fullWidth

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleDateChange}
            id="Date"
            name="date"
            label="Date"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}