import 'bootstrap/dist/css/bootstrap.css';

import classes from './Warp.module.css'


const Warp = (props) => {

    return (
        <div class={`container-fluid ${classes.wrapper}`}>
            <div class="row">
                {props.children}
            </div>
        </div>
    )
}

export default Warp;