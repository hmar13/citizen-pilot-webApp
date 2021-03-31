import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddContactModal from './AddContactModal';


const contacts = [
  {
    id: '1',
    title: 'Library',
    email: 'library@library.com',
    phone: '014620463'
  },
  {
    id: '2',
    title: 'Police',
    email: 'police@serious.com',
    phone: '0154020463'
  },
  {
    id: '3',
    title: 'Major',
    email: 'major@cityhall.com',
    phone: '01540204lke'
  },

];

const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
  },
  button: {
    padding: 0,
    width: 50,
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));


export default function ProposalCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Card className={classes.list}>
      <div className={classes.headerDiv}>
        <CardHeader
          subtitle={`${contacts.length} in total`}
          title="Published Contacts"
        />
        <AddContactModal />

      </div>
      <Divider />
      <List className={classes.list}>
        {contacts.map((contact, i) => (
          <ListItem
            divider={i < contacts.length - 1}
            key={contact.id}          >

            <ListItemText
              primary={contact.title}
              secondary={`Phone: ${contact.phone}`}
            />
            <IconButton
              onClick={handleClick}
              edge="end"
              size="small"
              className={classes.button}
            >
              <MoreVertIcon />
            </IconButton >
            <Menu
              id="choices"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>View Details</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>

          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
      </Button>
      </Box>
    </Card>
  )

};

