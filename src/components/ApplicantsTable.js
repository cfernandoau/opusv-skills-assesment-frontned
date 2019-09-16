import React  from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from "react-router-dom";
export default function ApplicantsTable(props) {

    console.log(props.applicants)
    let applicantsList=[]
    if(props.applicants) {
         applicantsList = props.applicants.map(applicant => {
            /**
             * Build table rows
             */
            return (
                <TableRow hover key={applicant.id}>
                    <TableCell>{applicant.firstName}</TableCell>
                    <TableCell>{applicant.lastName}</TableCell>
                    <TableCell>{applicant.discordId}</TableCell>
                    <TableCell>{applicant.state}</TableCell>
                    <TableCell component="th" scope="row">
                        <Grid item>
                            <ButtonGroup size="small" aria-label="small outlined button group">
                                <Button>Accept</Button>
                                <Button>deny</Button>
                                <Button>
                                    <Link to={"/put/" + applicant.id}>Edit</Link>
                                </Button>
                                <Button id={applicant.id} onClick={() => props.delete(applicant.id)}>Delete</Button>
                            </ButtonGroup>
                        </Grid>
                    </TableCell>
                </TableRow>
            )
        });
    }

    /**
     * return table
     */
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <h3>Applicants List</h3>
                <Button variant="contained" color="primary"  style={{"margin-bottom":'20px' }}>
                    <Link to='/add'   > + Add New</Link>
                </Button>
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

