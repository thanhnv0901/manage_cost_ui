import { Fragment } from "react";
import InformationForm from "./InformationForm";

const CenterColumn = (props) => {

    return (
        <Fragment>

            <div className="col-md-5 col-lg-5 ">
                <div className="midle_base_info">
                    <InformationForm></InformationForm>
                </div>
            </div>

        </Fragment>
    )
}

export default CenterColumn;