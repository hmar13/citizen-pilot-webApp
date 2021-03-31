import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import {
  Card,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProposalsItems from './ProposalsItems/ProposalsItems';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
    height: 370,

    overflowY: 'scroll',
  },
  button: {
    padding: 0,
    width: 50,
  },
  header: {
    background:
      'linear-gradient(90deg, rgba(91,164,252,1) 0%, rgba(58,66,118,1) 100%)',
    color: 'white',
  },

}));

export default function ProposalCard() {
  const classes = useStyles();
  const allProposals = useSelector((state: RootState) => {
    /* @ts-ignore */
    return state.realProposals.state;
  });

  return (
    <Card className={classes.list}>
      {allProposals ?
      <ProposalsItems
        proposals={allProposals}
      />

      : null}
    </Card>
  )
};

