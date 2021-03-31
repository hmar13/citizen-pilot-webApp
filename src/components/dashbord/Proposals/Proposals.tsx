import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
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
// import ProposalsViewDetails from './ProposalsItems/ProposalsViewDetails';


const proposals = [
  {
    id: '1',
    title: 'New Benches in the park',
    description:
      'We should put more benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    votes: 30,
    approved: true,
    userId: 1,
  },
  {
    id: '2',
    title: 'New Benches in the park',
    description:
      'We should put less benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?k=6&m=1021170914&s=612x612&w=0&h=MbXPjMmkFVWiRYShvEaQ1ZWLoCw55f1mFu3p6fdZqhE=',
    votes: 0,
    approved: false,
    userId: 3,
  },
  {
    id: '3',
    title: 'Something something',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    location: 'City Center',
    votes: 30,
    approved: true,
    userId: 2,
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
  header: {
    background: 'linear-gradient(-135deg, #899fd4 0%, #a389d4 100%)',
    color: 'white',
  }
}));


export default function ProposalCard() {
  const classes = useStyles();
  const allProposals = useSelector((state: RootState) => {
    return state.realProposals;
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleViewDetails = (index: number) => {
  //   return <ProposalsViewDetails
  //     title={proposals[index].title}
  //     description={proposals[index].description}
  //     location={proposals[index].location}
  //     image={proposals[index].image}
  //   />
  // }

  return (
    <Card className={classes.list}>
      <CardHeader
        className={classes.header}
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
