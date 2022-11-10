import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function ListResult({ people, city }) {
  if (people.length === 0 && !city)
    return;

  if (people.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 300,
            height: 128,
          },
        }}
      >
        <Paper elevation={16} style={{ padding: '1rem' }}>
          Nothing was found for city: <em>{city.toUpperCase()}</em>
        </Paper>
      </Box>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Phrase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map(person => (
            <TableRow
              key={person.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{person.name}</TableCell>
              <TableCell align="left">{person.jobtitle}</TableCell>
              <TableCell align="left">{person.company}</TableCell>
              <TableCell align="left">{person.phrase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
