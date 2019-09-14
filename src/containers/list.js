import React, {Component} from "react";
import axios from '../axios-applicants';
import ApplicantsTable from "../components/ApplicantsTable";

class ApplicantsList extends Component {
    state = {
        applicants: []
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <ApplicantsTable applicants={this.state.applicants}/>
            </div>

        )
    }
}

export default ApplicantsList;