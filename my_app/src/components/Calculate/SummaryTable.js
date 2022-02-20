

import { Fragment } from "react"
import classes from './SummaryTable.module.css'
import SummaryResults from './SummaryResults';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Redirect } from "react-router-dom";
import { useEffect } from "react";
import DeleteDetailCost from "../buttons/DeleteDetailCost";
import { informationActions } from "../../stores/information-slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";



const SummaryTable = (prop) => {
    let project = prop.project
    let costDetails = project ? project.costDetails : []


    const dispatch = useDispatch();
    const removeProject = (projectID, detailIndex) => {

        return (event) =>{
            dispatch(informationActions.removeDetailCost({ id: projectID, detialIndex: detailIndex }))
        }
    }


    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Inc/Dec</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {costDetails.map((obj, id) => (
                        <SummaryCell key={id} onRemove={removeProject(project.id, id)} isPlus={obj.isPlus} id={id} reason={obj.reason} cost={obj.cost}></SummaryCell>
                    ))}
                </tbody>
            </table>
            <hr className="my-4" />
            {project && <SummaryResults projectInfo={project}></SummaryResults>}
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
            <td> <button onClick={props.onRemove}><FontAwesomeIcon icon={faMinus} /></button></td>
        </tr >
    )
}

export { SummaryTable, SummaryCell }