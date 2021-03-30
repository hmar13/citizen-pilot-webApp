import React from 'react'
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

interface contactsInterface {
  title: string;
  phone: string;
  email: string;
  image: string;
}

function ContactsFormReview({ title, phone, email }: contactsInterface) {
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

        <ListItem className={classes.listItem} key='Phone'>
          <ListItemText primary='Phone' secondary={phone} />
        </ListItem>

        <ListItem className={classes.listItem} key='Email'>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container xs={12} sm={10}>
          <Typography gutterBottom>Please double check before submitting!</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ContactsFormReview;
