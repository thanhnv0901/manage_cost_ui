
import LeftColumn from "../components/Calculate/LeftColumn";
import { Fragment } from "react";
import CenterColumn from "../components/Calculate/CenterColumn";
import RightColumn from "../components/Calculate/RightColumn";
const CalculatePage = (prop) => {


    return (<Fragment>
            <LeftColumn></LeftColumn>
            <CenterColumn></CenterColumn>
            <RightColumn></RightColumn>
    </Fragment>)

}


export default CalculatePage;