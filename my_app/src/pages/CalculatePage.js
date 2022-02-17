
import LeftColumn from "../components/Calculate/LeftColumn";
import { Fragment } from "react";

import { Link, Route, Routes, Outlet } from "react-router-dom";
const CalculatePage = (prop) => {


    return (<Fragment>

        <LeftColumn />
        <Outlet />


    </Fragment>)

}


export default CalculatePage;