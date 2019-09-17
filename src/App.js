import React from 'react';
import ApplicantList from "./containers/ApplicantList";
import Add from './components/ApplicantForm'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import AppMenu from "./menu";
import {Provider} from 'react-redux';
import './App.css';
import Auth from "./containers/Auth";


import {createStore} from "redux";
import auth from "./store/reducers/auth";
const store= createStore(auth)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <AppMenu/>
                    <Switch>
                    <Route path="/" exact component={ApplicantList}/>
                    <Route path="/add" exact component={Add}/>
                    <Route path="/put/:id"  exact component={Add}/>
                    <Route path="/auth"  exact component={Auth}/>
                    </Switch>
                </div>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
