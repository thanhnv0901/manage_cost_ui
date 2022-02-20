
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classes from './LeftColumn.module.css';
import ProjectCard from './ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { informationActions } from '../../stores/information-slice';
import { useNavigate, NavLink } from 'react-router-dom';
import { Fragment, useRef, useEffect } from 'react';



const LeftColumn = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projectEndRef = useRef(null)
    const scrollToBottom = () => {
        projectEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const projectCards = useSelector((state) => state.informations.projects)
    const counter = useSelector((state) => state.informations.counter)

    const onClickHandler = () => {
        dispatch(informationActions.addProject())
        navigate(`${counter}`)
    }

    useEffect(() => {
        scrollToBottom()
    }, [counter]);

    return (
        <Fragment>
            <div className={`position-sticky ${classes.left_menu}`}>
                {projectCards.map((project) => (
                    <NavLink key={project.id} to={`${project.id}`}
                        className={({ isActive }) =>
                            isActive ? classes.selectedProject : undefined
                        } >
                        <ProjectCard projectID={project.id} name={project.projectName} description={project.address}></ProjectCard>
                    </NavLink>
                ))}
                <div ref={projectEndRef} />
            </div>
            <div className={classes.add_project_button}>
                <button type="button" className={`btn btn-secondary `} onClick={onClickHandler} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </Fragment>
    )
}


export default LeftColumn;