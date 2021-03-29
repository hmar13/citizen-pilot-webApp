import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

interface DetailsInterface {
  title: string;
  selectedCategory: string;
  longDescription: string;
  shortDescription: string;
  location: string;
  image: string;
  date: string
}

export default function Overview({
  title,
  selectedCategory,
  longDescription,
  shortDescription,
  location,
  image,
  date
}: DetailsInterface) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>

        <ListItem className={classes.listItem} key='Title'>
          <ListItemText primary='Title' secondary={title}

          />
        </ListItem>

        <ListItem className={classes.listItem} key='Category'>
          <ListItemText primary='Category' secondary={selectedCategory} />
        </ListItem>

        <ListItem className={classes.listItem} key='Short Description'>
          <ListItemText primary='Short Description' secondary={shortDescription} />
        </ListItem>

        <ListItem className={classes.listItem} key='Long Description'>
          <ListItemText primary='Long Description' secondary={longDescription} />
        </ListItem>

        <ListItem className={classes.listItem} key='location'>
          <ListItemText primary='Location' secondary={location} />
        </ListItem>

        <ListItem className={classes.listItem} key='date'>
          <ListItemText primary='Date' secondary={date} />
        </ListItem>




      </List>
      <Grid container spacing={2}>

        <Grid item container xs={12} sm={10}>





          <Typography gutterBottom>Please double-check your data and press submit to send your news story</Typography>




        </Grid>
      </Grid>
    </React.Fragment>
  );
}