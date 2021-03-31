import React, { useState } from 'react';
import {
  Box,
  Button,
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
import ProposalsViewDetails from './ProposalsViewDetails';
import ProposalsEditDetails from './ProposalsEditDetails';

type ProposalType = {
  title: string,
  description: string,
  location: string,
  completiong: number,
  image: string,
  id: number,
}

interface proposalInterface {
  proposals: ProposalType[];
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
  },
  button: {
    padding: 0,
    width: 50,
  },
  header: {
    background: 'linear-gradient(-135deg, #899fd4 0%, #a389d4 100%)',
    color: 'white',
  }
}));


const ProposalsItems:React.FC<proposalInterface> = ({ proposals }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CardHeader
        className={classes.header}
        subtitle={`${proposals.length} in total`}
        title="Proposal Inbox"
      />
      <Divider />
      <List className={classes.list}>
        {proposals.map((proposal: ProposalType, i: number) => (
          <ListItem
            divider={i < proposals.length - 1}
            key={proposal.id}
          >
            <ListItemAvatar>
              <img
                alt={proposal.title}
                src={proposal.image}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 5,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={proposal.title}
              secondary={`Proposed ${proposal.location}`}
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
              <ProposalsViewDetails
                proposal={proposal}
                setAnchorEl={setAnchorEl}
              />
              <ProposalsEditDetails
                proposal={proposal}
                setAnchorEl={setAnchorEl}
              />
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
    </div>
  )
}

export default ProposalsItems
