import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
    width: 700,
  },
}));


export default function ContactsComponent() {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


  return (
    <Card className={classes.list}>
      <PerfectScrollbar>
        <Box >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.slice(0, limit).map((contact) => (
                <TableRow
                  hover
                  key={contact.id}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      style={{ alignItems: 'center', display: 'flex' }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {contact.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {contact.email}
                  </TableCell>
                  <TableCell>
                    {contact.phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );

}