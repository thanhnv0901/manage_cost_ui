
import LeftColumn from "../components/Calculate/LeftColumn";
import { Fragment } from "react";
import CenterColumn from "../components/Calculate/CenterColumn";
import RightColumn from "../components/Calculate/RightColumn";
import { Route, Routes } from "react-router-dom";
const CalculatePage = (prop) => {


    return (<Fragment>
      
        <Routes>
            <Route path="/" element={<LeftColumn></LeftColumn>}>
            </Route>

            <Route path="/:id" element={
                <Fragment>
                    <CenterColumn></CenterColumn>
                    <RightColumn></RightColumn>
                </Fragment>

            }>

            </Route>
        </Routes>

    </Fragment>)

}


export default CalculatePage;