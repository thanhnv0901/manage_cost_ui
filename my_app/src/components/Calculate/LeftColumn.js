
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import  './LeftColumn.css';

const LeftColumn = (props) => {


    return (
        <Fragment>
            <div class="col-md-3 col-lg-2">
                <div class="position-sticky left_menu">
                    <div class="d-flex text-muted pt-3">
                        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c"
                                dy=".3em">32x32</text>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom vw-100">
                            <strong class="d-block text-gray-dark">First House</strong>
                            Brief Introduction
                        </p>
                    </div>
                    <div class="d-flex text-muted pt-3">
                        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c"
                                dy=".3em">32x32</text>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom vw-100">
                            <strong class="d-block text-gray-dark">Second House</strong>
                            Brief Introduction
                        </p>
                    </div>
                    <div class="d-flex text-muted pt-3">
                        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c"
                                dy=".3em">32x32</text>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom vw-100">
                            <strong class="d-block text-gray-dark">Third House</strong>
                            Brief Introduction
                        </p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary" ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default LeftColumn;