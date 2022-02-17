
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './LeftColumn.css';
import ProjectCard from './ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { informationActions } from '../../stores/information-slice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LeftColumn = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const projectCards = useSelector((state) => state.informations.projects)
    const counter = useSelector((state) => state.informations.counter)

    const onClickHandler = () => {
        dispatch(informationActions.addProject())
        navigate(`${counter}`)
    }

    return (
        <Fragment>
            <div className="col-md-3 col-lg-2">
                <div className="position-sticky left_menu">
                    {projectCards.map((project) => (
                        <Link key={project.id} to={`${project.id}`}>
                            <ProjectCard name={project.projectName} description={project.address}></ProjectCard>
                        </Link>
                    ))}

                    <div>
                        <button type="button" className="btn btn-secondary" onClick={onClickHandler} ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default LeftColumn;