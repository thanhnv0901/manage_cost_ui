import { Fragment } from "react"
import classes from './SummaryResults.module.css'

const SummaryResults = (props) => {

    return (
        <Fragment>
            <p><b>Summary Results</b></p>
            <div class="row justify-content-center">
                <div class={`col-8 ${classes.form_border}`}>

                    <div class="row">
                        <div class="col-12">
                            <label  for="desciption" class="form-label">Initial Cost<span class="text-muted"></span></label>
                            <input disabled type="text" class="form-control" id="address" placeholder="..." required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">Total cost was added</label>
                            <input disabled type="text" class="form-control" id="firstName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid number is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Total value was added</label>
                            <input disabled type="text" class="form-control" id="lastName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid price is required.
                            </div>
                        </div>


                        <div class="col-12">
                            <label for="desciption" class="form-label">Final Price<span class="text-muted"></span></label>
                            <input disabled type="text" class="form-control" id="final_price_output" placeholder="..." required />
                            <div class="invalid-feedback">
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