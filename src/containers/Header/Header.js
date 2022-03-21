import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Box, Icon, IconButton} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../assets/logo/Logoo.png';
import {ButtonGroup} from "reactstrap";
import {green, grey, lightBlue, pink, yellow} from "@mui/material/colors";
import {Link} from 'react-router-dom';

const columns = [
    {   id: 'name',
        label: 'Name',
        minWidth: 170,
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'surname',
        label: 'Surname',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'fathersName',
        label: `Father's Name`,
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'profession',
        label: 'Profession',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'right',

    },
];

function createData(name, surname, fathersName, profession,actions) {
    return { name, surname, fathersName, profession,actions};
}

const rows = [
    createData('Gunel', 'Yusubova', 'Fuad', 'Software Developer'),
    createData('Sabina', 'Quliyeva', 'Azer', 'Designer'),
    createData('Rasul', 'Rustemli', 'Ebulfet', 'Java Developer'),
    createData('Ayshan', 'Abdullayeva', 'Aqil', 'French teacher'),
    createData('Tabriz', 'Habiyev', 'Firqet', 'Viu Js Developer'),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function Header() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid container spacing={24}>
            <Grid item xs={1} >
                <img width={90} height={90}  src={logo} alt="logo"/>
            </Grid>
            <Grid item xs={10}>
                <h1 style={{color:'orange'}}>Contact List</h1>
            </Grid>
            <Grid item xs={1}>
                <Link to='/contacts/add'  >
                    <AddCircleIcon color='success' fontSize='large'/>
                </Link>
            </Grid>

            <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}

                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell aria-label={column.label} key={column.id} align={column.align} >
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value ||
                                                            <ButtonGroup>
                                                                <Link to={`/contacts/delete/contactId`}>
                                                                    <IconButton aria-label="delete" size="medium" color="error"  onClick={() => this.remove(row.id)}>
                                                                        <DeleteIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Link>
                                                            <Link to={`/contacts/edit/contactId`}>
                                                                <IconButton aria-label="edit" size="medium" sx={{ color: lightBlue[600] }}  tag={Link} to={"/contact/" + row.id}>
                                                                    <EditIcon fontSize="inherit" />
                                                                </IconButton>
                                                            </Link>
                                                           <Link to={`/contacts/view/contactId`}>
                                                               <IconButton aria-label="info" size="medium" sx={{ color: grey[500] }}  tag={Link} to={"/contact/" + row.id}>
                                                                   <InfoIcon fontSize="inherit" />
                                                               </IconButton>
                                                           </Link>

                                                        </ButtonGroup>
                                                        }

                                                    </TableCell>

                                                );

                                            }

                                            )}




                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Grid>

    );
}




