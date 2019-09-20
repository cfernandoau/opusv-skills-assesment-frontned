import React, {Component} from "react";
import axios from '../axios';
import ApplicantTable from "../components/ApplicantTable";
import {connect} from "react-redux";

class ApplicantList extends Component {
    state = {
        applicants: []
    }

    componentDidMount() {
        this.loadApplicantsList()
    }

    loadApplicantsList() {
        let config = {
            headers: {'Authorization': "bearer " + this.props.token}
        };

        axios.get('applicants',
            config)
            .then(response => {
                const updatedApplicants = response.data.map(applicants => {
                    return {
                        ...applicants,
                    }
                });
                this.setState({applicants: updatedApplicants});
            });
    }

    deleteApplicantHandler = (id) => {

        if (window.confirm("Delete the item?")) {

            let config = {
                headers: {'Authorization': "bearer " + this.props.token}
            };
            axios.delete('/applicants/' + id, config)
                .then(response => {
                    this.loadApplicantsList()
                });
        }
    }

    render() {
        return (
            <div>
                <ApplicantTable delete={this.deleteApplicantHandler} applicants={this.state.applicants}/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

export default connect(mapStateToProps, null)(ApplicantList)