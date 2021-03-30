import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    borderRadius: 25,
    transition: '0.3s',
    width: '33%',
    height: '300px',
    overflow: 'initial',
    background: '#ffffff',
  },
  content: {
    paddingTop: 0,
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));

let id = 0;
function createData(Report, Status) {
  id += 1;
  return { Report, Status};
}

const rows = [
  // comment
  createData('Fallen down tree', 'Urgent'),
  createData('Bin fallen over', 'Non-Urgent'),
  createData('Cat in the raod', 'Non-Urgent'),
  createData('Road Sign damaged', 'Urgent'),
];

export const ReportCard = React.memo(function ElevatedHeaderCard() {
  const classes = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={'Reports'}
        subheader={'See lastest Reports'}
      />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Reports</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.Report}
                </TableCell>
                <TableCell align="right">{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

export default ReportCard;