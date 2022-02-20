
import LeftColumn from "../components/Calculate/LeftColumn";
import { Fragment } from "react";

import { Link, Route, Routes, Outlet } from "react-router-dom";
const CalculatePage = (prop) => {


    return (<Fragment>
        <div className="col-md-3 col-lg-2">
            <LeftColumn />
        </div>
        <div className="col-md-9 col-lg-10">
            <Outlet />
        </div>
    </Fragment>)

}


export default CalculatePage;