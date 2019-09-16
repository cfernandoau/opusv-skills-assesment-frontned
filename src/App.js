import React from 'react';
import ApplicantList from "./containers/list";
import Add from './components/applicant/Add'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import AppMenu from "./menu";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppMenu/>
                <Switch>
                <Route path="/" exact component={ApplicantList}/>
                <Route path="/add" exact component={Add}/>
                <Route path="/put/:id"  exact component={Add}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
