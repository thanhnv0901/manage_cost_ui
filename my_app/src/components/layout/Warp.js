import 'bootstrap/dist/css/bootstrap.css';

import classes from './Warp.module.css'
import { Fragment } from 'react';
import Header from '../header/Header';


const Warp = (props) => {

    return (

        <Fragment>
            <Header></Header>
            <div class={`container-fluid ${classes.wrapper}`}>
                <div class="row">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default Warp;