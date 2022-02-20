

import { Fragment } from "react"
import classes from './SummaryTable.module.css'
import SummaryResults from './SummaryResults';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Redirect } from "react-router-dom";




const SummaryTable = (prop) => {

    let params = useParams();
    let projectID = params.id

    const projectInformation = useSelector((state) => state.informations.projects)
    let project = projectInformation.find((obj) => obj.id == projectID)
    let costDetails = project.costDetails


    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Inc/Dec</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {costDetails.map((obj, id) => (
                        <SummaryCell key={id} isPlus={obj.isPlus} id={id} reason={obj.reason} cost={obj.cost}></SummaryCell>
                    ))}
                </tbody>
            </table>
            <hr className="my-4" />
            <SummaryResults projectInfo={project}></SummaryResults>
        </Fragment>
    )
}


const SummaryCell = (props) => {
    return (
        <tr className={props.isPlus ? classes.plus_row : classes.minus_row}>
            <th scope="row">{props.id}</th>
            <td>{props.reason}</td>
            <td>{props.isPlus ? 'Inc' : 'Dec'}</td>
            <td>{props.cost}</td>
        </tr >
    )
}

export { SummaryTable, SummaryCell }