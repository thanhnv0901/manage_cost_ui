import 'bootstrap/dist/css/bootstrap.css';

import classes from './Warp.module.css'
import { Fragment } from 'react';
import Header from '../header/Header';


const Warp = (props) => {

    return (

        <Fragment>
            <Header></Header>
            <div className={`container-fluid ${classes.wrapper}`}>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default Warp;