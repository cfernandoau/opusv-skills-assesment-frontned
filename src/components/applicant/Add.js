import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/PermIdentityRounded';
import axios from '../../axios-applicants';
import { Redirect ,Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddApplicantForm(props) {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [discordId, setDiscordId] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        loadApplicant()
    },[])

    const postDataHandler = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            discordId: discordId,
            state: state,
        };

        /**
         *  if id is passed then update applicant else add applicant
         * */
        if(hasId()){
            axios.put('/applicants/'+hasId(), data)
                .then(response => {
                    if(response.status===200){

                        alert("Update Successful!")
                        return   <Redirect to='/' />
                    }else{
                        alert("Ooops! something went wrong")
                    }
                });
        }
        else{
            axios.post('/applicants', data)
                .then(response => {
                    console.log(response.status)
                    if(response.status===201){
                        clearForm()
                        alert("Applicant added successfully!")
                        return <Redirect to='/' />
                    }else{
                        alert("Ooops! something went wrong")
                    }
                });
        }

    }

    const loadApplicant = () => {
        if(!hasId())return;
        axios.get('/applicants/' + props.match.params.id)
            .then(response => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setDiscordId(response.data.discordId)
                setState(response.data.state)

            });
    }

    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setDiscordId("")
        setState("")
    }

    const hasId = () => {
        if (props.match.params.id > 1) {
            return props.match.params.id
        }
        return false;
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {hasId()?"Edit": "Add"} Applicant
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="discordId"
                                name="discordId"
                                label="Discord Id"
                                value={discordId}
                                onChange={(event) => setDiscordId(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="state"
                                label="State"
                                name="state"
                                value={state}
                                onChange={(event) => setState(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={postDataHandler}
                    >
                        {hasId()?"Save Applicant": "Add Applicant"}
                    </Button>
                    <Link to="/" style={{cursor:'pointer'}}>Back to list</Link>
                </form>
            </div>

        </Container>
    );
}