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
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddNewsModal from './AddNewsModal';

const news = [
  {
    id: 'her',
    category: 'weather',
    name: 'Storm warning',
    imageUrl:
      'https://images.unsplash.com/photo-1530635481267-00edc014d006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80',
    updatedAt: '2 seconds ago',
  },
  {
    id: '34ölkbö',
    name: 'Upcoming road works ',
    imageUrl:
      'https://images.unsplash.com/photo-1502412960062-395a1c0e966e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    updatedAt: '3 hours ago',
  },
  {
    id: '34ökbö',
    name: 'Upcoming election!',
    imageUrl:
      'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    updatedAt: '2 days ago',
  },
  {
    id: '34ökbö',
    name: 'New app: Tinder for Cows',
    imageUrl: 'https://i.imgur.com/WDcO19j.png',
    updatedAt: '6 days ago',
  },
  {
    id: '34ökbö',
    name: 'Train service interrupted',
    imageUrl: 'https://i.imgur.com/WDcO19j.png',
    updatedAt: '6 days ago',
  },
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
    height: 370,
    overflowY: 'scroll',
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    background:
      'linear-gradient(90deg, rgba(91,164,252,1) 0%, rgba(58,66,118,1) 100%)',
  },
  button: {
    padding: 0,
    width: 50,
  },
  titleDescription: {
    color: 'white',
  },
}));

export default function NewsComponent() {
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
          subtitle={`${news.length} in total`}
          title="Latest news"
          className={classes.titleDescription}
        />
        <AddNewsModal />
      </div>
      <Divider />
      <List className={classes.list}>
        {news.map((newsItem, i) => (
          <ListItem divider={i < news.length - 1} key={newsItem.id}>
            <ListItemAvatar>
              <img
                alt={newsItem.name}
                src={newsItem.imageUrl}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 5,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={newsItem.name}
              secondary={`Published ${newsItem.updatedAt}`}
            />
            <IconButton
              onClick={handleClick}
              edge="end"
              size="small"
              className={classes.button}
            >
              <MoreVertIcon />
            </IconButton>

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
  );
}
