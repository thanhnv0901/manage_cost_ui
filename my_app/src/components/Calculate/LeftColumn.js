
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './LeftColumn.css';
import ProjectCard from './ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { informationActions } from '../../stores/information-slice';

const LeftColumn = (props) => {

    const dispatch = useDispatch();
    const projectCards = useSelector((state)=> state.informations.projects)

    const onClickHandler = ()=>{
        dispatch(informationActions.addProject({
        }))
    }

    return (
        <Fragment>
            <div className="col-md-3 col-lg-2">
                <div className="position-sticky left_menu">
                    {/* note: example for ui test */}
                    {projectCards.map((project)=>(
                        <ProjectCard key={project.id} name={project.projectName} description={project.address}></ProjectCard>
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