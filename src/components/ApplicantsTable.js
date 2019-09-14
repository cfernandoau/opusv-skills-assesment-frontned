import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";



import TablePagination from '@material-ui/core/TablePagination';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



export default function ApplicantsTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const applicantsList = props.applicants.map(applicant => {
        return (
            <TableRow hover key={applicant.id}>
                <TableCell>{applicant.first_name}</TableCell>
                <TableCell>{applicant.last_name}</TableCell>
                <TableCell>{applicant.discord_id}</TableCell>
                <TableCell>{applicant.state}</TableCell>
                <TableCell component="th" scope="row">
                    <Grid item>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button>Accept</Button>
                            <Button>deny</Button>
                            <Button>Modify</Button>
                            <Button>Delete</Button>
                        </ButtonGroup>
                    </Grid>
                </TableCell>
            </TableRow>
        )
    });
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <h3>Applicants List</h3>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>

                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Discord Id</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applicantsList}
                        </TableBody>
                    </Table>
                </Paper>

            </Container>
        </React.Fragment>
    )
}

