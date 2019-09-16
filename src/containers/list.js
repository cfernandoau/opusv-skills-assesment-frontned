import React, {Component} from "react";
import axios from '../axios-applicants';
import ApplicantsTable from "../components/ApplicantsTable";

class ApplicantsList extends Component {
    state = {
        applicants: []
    }

    componentDidMount() {
        this.loadApplicantsList()
    }

    loadApplicantsList(){
        axios.get('applicants')
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
            axios.delete('/applicants/' + id)
                .then(response => {
                    this.loadApplicantsList()
                });
        }
    }

    render() {
        return (
            <div>
                <ApplicantsTable delete={this.deleteApplicantHandler} applicants={this.state.applicants}/>
            </div>

        )
    }
}

export default ApplicantsList;