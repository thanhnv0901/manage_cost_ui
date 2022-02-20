import { Fragment } from "react";
import InformationForm from "./InformationForm";
import SummaryColumn from "./SummaryColumn";
import { useParams, useNavigate, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";


const CenterColumn = (props) => {

    const navigate = useNavigate();

    let params = useParams();
    let projectID = params.id


    const projectInformation = useSelector((state) => state.informations.projects)
    // notice convert param to int to compare
    let project = projectInformation.find((obj) => obj.id == projectID)

    useEffect(() => {

        if (!project) {
            navigate('/projects')
        }

    }, [project && project.id]);


    return (
        <Fragment>
            {project &&
                <div className="row">
                    <div className="col-md-6 col-lg-6 ">
                        <div className="midle_base_info">
                            <InformationForm project={project}></InformationForm>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 vh-100">
                        <div className="position-sticky right_panel">
                            <SummaryColumn project={project}></SummaryColumn>
                        </div>
                    </div>
                </div>}
        </Fragment>
    )
}

export default CenterColumn;