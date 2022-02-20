import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { informationActions } from "../../stores/information-slice";

const DeleteDetailCost = (props) => {

    const dispatch = useDispatch();
    const removeProject = () => {

        dispatch(informationActions.removeDetailCost({ id: props.projectID, detialIndex: props.detailIndex }))

    }

    return (
        <Fragment>
            <button onClick={removeProject}><FontAwesomeIcon icon={faMinus} /></button>
        </Fragment>
    )
}

export default DeleteDetailCost;