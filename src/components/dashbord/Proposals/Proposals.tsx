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
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const proposals = [
  {
    id: 'her',
    name: 'New cat cafe',
    imageUrl: 'https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1318&q=80',
    updatedAt: '2 seconds ago'
  },
  {
    id: '34ölkbö',
    name: 'Fountain in city park',
    imageUrl: 'https://images.unsplash.com/photo-1592552373478-7fd02de5a789?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    updatedAt: '3 hours ago'
  },
  {
    id: '34ökbö',
    name: 'New benches all around town',
    imageUrl: 'https://images.unsplash.com/photo-1525384648562-b9361aa73401?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVuY2hlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    updatedAt: '2 days ago'
  },
  {
    id: '34ökbö',
    name: 'Playground for young and old',
    imageUrl: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
    updatedAt: '5 days ago'
  },
  {
    id: '34ökbö',
    name: 'New ice cream vendor in the park',
    imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    updatedAt: '6 days ago'
  }
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: 550,
  },
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
      <CardHeader
        subtitle={`${proposals.length} in total`}
        title="Proposal Inbox"
      />
      <Divider />
      <List className={classes.list}>
        {proposals.map((proposal, i) => (
          <ListItem
            divider={i < proposals.length - 1}
            key={proposal.id}
          >
            <ListItemAvatar>
              <img
                alt={proposal.name}
                src={proposal.imageUrl}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 5,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={proposal.name}
              secondary={`Proposed ${proposal.updatedAt}`}
            />
            <IconButton
              onClick={handleClick}
              edge="end"
              size="small"
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

