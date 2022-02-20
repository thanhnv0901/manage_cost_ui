
import classes from './CenterColumn.module.css'
import useInput from '../../hooks/use-input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { informationActions } from "../../stores/information-slice";


const IncurredForm = (props) => {

    const [plusState, dispatchState] = useState(true)

    const dispatch = useDispatch();


    const { value: reason, valueChangeHandler: reasonChange } = useInput("")
    const { value: quantiy, valueChangeHandler: quantityChange } = useInput("")
    const { value: price, valueChangeHandler: priceChange } = useInput("")


    const submitForm = (event) => {
        event.preventDefault();

        dispatch(informationActions.addDetailCost(
            {
                id: props.projectID,
                reason: reason,
                isPlus: plusState,
                price: price,
                quantiy:quantiy
            }
        ))

    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className={`col-8 ${classes.form_expenses_incurred}`}>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="plusRadio" checked={plusState} onChange={(e) => {
                            dispatchState((state) => true)
                        }} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1" >
                            Plus cost
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="minusRadio" checked={!plusState} onChange={(e) => {
                            dispatchState((state) => false)
                        }} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2" >
                            Minus cost
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="desciption" className="form-label">Reason<span className="text-muted"></span></label>
                            <input type="text" className="form-control" id="address" value={reason} onChange={reasonChange}  />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Quantity</label>
                            <input type="text" className="form-control" id="firstName" value={quantiy} onChange={quantityChange}  />
                            <div className="invalid-feedback">
                                Valid number is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Price</label>
                            <input type="text" className="form-control" id="lastName" value={price} onChange={priceChange}  />
                            <div className="invalid-feedback">
                                Valid price is required.
                            </div>
                        </div>


                        <div className="col-sm-12 div_additional_cost_button">
                            <button className="btn btn-primary btn-lg float-end " type="submit" onClick={submitForm}>Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default IncurredForm;