import { Fragment } from "react"
import classes from './SummaryResults.module.css'
import { useSelector, useDispatch } from 'react-redux';

const SummaryResults = (props) => {

    let projectInfo = props.projectInfo
    let initalCost = projectInfo.initialCost
    let costDetails = projectInfo.costDetails
    let totalAdd = 0
    let totalMinus = 0

    costDetails.forEach(element => {

        if (element.isPlus) {
            totalAdd += element.cost
        } else {
            totalMinus += element.cost
        }
    });

    return (
        <Fragment>
            <p><b>Summary Results</b></p>
            <div className="row justify-content-center">
                <div className={`col-8 ${classes.form_border}`}>

                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="desciption" className="form-label">Initial Cost<span className="text-muted"></span></label>
                            <input disabled type="text" className="form-control" id="address" value={initalCost} required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Total cost was added</label>
                            <input disabled type="text" className="form-control" id="firstName" placeholder="" value={totalMinus} required />
                            <div className="invalid-feedback">
                                Valid number is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Total value was added</label>
                            <input disabled type="text" className="form-control" id="lastName" placeholder="" value={totalAdd} required />
                            <div className="invalid-feedback">``
                                Valid price is required.
                            </div>
                        </div>


                        <div className="col-12">
                            <label htmlFor="desciption" className="form-label">Final Price<span className="text-muted"></span></label>
                            <input disabled type="text" className="form-control" id="final_price_output" value={initalCost - totalMinus + totalAdd} required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )

}

export default SummaryResults;