
import classes from './CenterColumn.module.css'

const IncurredForm = (props) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className={`col-8 ${classes.form_expenses_incurred}`}>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Plus cost
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Minus cost
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="desciption" className="form-label">Description<span className="text-muted"></span></label>
                            <input type="text" className="form-control" id="address" placeholder="..." required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Quantity</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid number is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Price</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid price is required.
                            </div>
                        </div>


                        <div className="col-sm-12 div_additional_cost_button">
                            <button className="btn btn-primary btn-lg float-end " type="submit">Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default IncurredForm;