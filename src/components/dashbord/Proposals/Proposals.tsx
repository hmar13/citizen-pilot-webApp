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
