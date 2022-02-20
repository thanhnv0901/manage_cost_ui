import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { informationActions } from "../../stores/information-slice";

const DeleteProjectCard = (props) => {

    const dispatch = useDispatch();

    const removeProject = () => {

        dispatch(informationActions.removeProject({ id: props.projectID }))

    }

    return (
        <Fragment>
            <button onClick={removeProject}><FontAwesomeIcon icon={faMinus} /></button>
        </Fragment>
    )
}

export default DeleteProjectCard;