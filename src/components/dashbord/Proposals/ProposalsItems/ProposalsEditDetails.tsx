import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import MenuItem from '@material-ui/core/MenuItem';
import { render } from '@testing-library/react';
import { makeStyles } from '@material-ui/core/styles';

type ProposalType = {
  title: string,
  description: string,
  location: string,
  completiong: number,
  image: string,
  id: number,
}

interface proposal {
  proposal: ProposalType;
  setAnchorEl: any;
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 100,
    paddingLeft: 100,
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: 500,
  }
}));

const ProposalsEditDetails = ( { proposal, setAnchorEl }: proposal) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleViewDetails = () => {
    setAnchorEl(null);
    setOpen(true)
    render (
      <Modal
        aria-labelledby="proposal.title"
        aria-describedby="simple-modal-description"
        className={classes.container}
        open={open}
        onClose={handleClose}
      >
      <div className="proposal-title">{classes.title}</div>
      </Modal>
    )
  }

  return (
    <div>
      <MenuItem onClick={handleViewDetails}>Edit</MenuItem>
    </div>
  )
}

export default ProposalsEditDetails
