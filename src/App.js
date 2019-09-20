import React, {useEffect} from 'react';
import ApplicantList from "./containers/ApplicantList";
import Add from './components/ApplicantForm'
import {Route,Switch} from "react-router-dom";
import AppMenu from "./hoc/menu";

import './App.css';
import Login from "./containers/LoginForm";
import Logout from "./components/Logout"
import {connect} from "react-redux"
import * as actions from './store/actions/index'

function App(props) {

    useEffect(() => {
        props.onTryAutoSignIn()
    },[])

    return (
                <div className="App">
                    <AppMenu/>
                    <Switch>
                    <Route path="/" exact component={ApplicantList}/>
                    <Route path="/add" exact component={Add}/>
                    <Route path="/put/:id"  exact component={Add}/>
                    <Route path="/logout"  exact component={Logout}/>
                    <Route path="/auth"  exact component={Login}/>
                    </Switch>
                </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignIn: () => dispatch( actions.authCheckState() )
    };
};

export default connect( null, mapDispatchToProps )(App)