
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './LeftColumn.css';
import ProjectCard from './ProjectCard';

const LeftColumn = (props) => {


    return (
        <Fragment>
            <div className="col-md-3 col-lg-2">
                <div className="position-sticky left_menu">
                    {/* note: example for ui test */}
                    <ProjectCard name="First Project" description="New house"></ProjectCard>

                    <div>
                        <button type="button" className="btn btn-secondary" ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default LeftColumn;