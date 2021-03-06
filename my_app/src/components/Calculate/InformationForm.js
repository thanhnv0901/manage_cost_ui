import IncurredForm from "./IncurredForm";
import classes from './InformationForm.module.css';
import { useParams, useNavigate, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useInput from "../../hooks/use-input";
import { informationActions } from "../../stores/information-slice";
import { useEffect } from "react";



const InformationForm = (props) => {


    const dispatch = useDispatch();

    const saveHandler = (event) => {
        event.preventDefault();
        dispatch(informationActions.updateProject(
            {
                id: project.id,
                projectName: projectName,
                ownerName: ownerName,
                phone: phone,
                email: phone,
                address: address,
                country: country,
                initialCost: initialCost
            }
        ))
    }

    let project = props.project

    useEffect(() => {

       

            setCurrentProjectName(project.projectName)
            setCurrentOwnerName(project.ownerName)
            setCurrentPhone(project.phone)
            setCurrentEmail(project.email)
            setCurrentAddress(project.address)
            setCurrentCountry(project.country)
            setCurrentInitialCost(project.initialCost)

    }, [project && project.id]);


    const { value: projectName, setCurrentValueHandler: setCurrentProjectName, valueChangeHandler: projectNameChange } = useInput("")
    const { value: ownerName, setCurrentValueHandler: setCurrentOwnerName, valueChangeHandler: ownerNameChange } = useInput("")
    const { value: phone, setCurrentValueHandler: setCurrentPhone, valueChangeHandler: phoneChange } = useInput("")
    const { value: email, setCurrentValueHandler: setCurrentEmail, valueChangeHandler: emailChange } = useInput("")
    const { value: address, setCurrentValueHandler: setCurrentAddress, valueChangeHandler: addressChange } = useInput("")
    const { value: country, setCurrentValueHandler: setCurrentCountry, valueChangeHandler: countryChange } = useInput("")
    const { value: initialCost, setCurrentValueHandler: setCurrentInitialCost, valueChangeHandler: initialCostChange } = useInput(0)

    return (
        <form className="needs-validation" >
            <div className="row g-3">

                <div className="col-12">
                    <label htmlFor="project_name" className="form-label">Project Name</label>
                    <input type="text" autoComplete="off"  className="form-control" id="project_name" placeholder="name" value={projectName} onChange={projectNameChange} required />
                    <div className="invalid-feedback">
                        Please enter a project name.
                    </div>
                </div>

                <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">Owner name</label>
                    <input type="text" className="form-control" autoComplete="off" id="firstName" placeholder="" value={ownerName} onChange={ownerNameChange} required />
                    <div className="invalid-feedback">
                        Valid Owner name is required.
                    </div>
                </div>


                <div className="col-12">
                    <label htmlFor="phone" className="form-label">Phone <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" autoComplete="off" id="phone_input" placeholder="(555) 555-1234" value={phone} onChange={phoneChange} />
                    <div className="invalid-feedback">
                        Please enter a valid phone address for shipping updates.
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" autoComplete="off" id="email" placeholder="you@example.com" value={email} onChange={emailChange} />
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address<span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" autoComplete="off" id="address" placeholder="California, 95014-0642" required value={address} onChange={addressChange} />
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>

                <div className="col-xl-5">
                    <label htmlFor="country" className="form-label">Country<span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" autoComplete="off" id="address" placeholder="United States" required value={country} onChange={countryChange} />
                    <div className="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>

            </div>

            <div className={`row ${classes.initial_cost_div}`}>
                <div className="col-12">
                    <label htmlFor="zip" className="form-label"> <strong>Initial Cost ($):</strong></label>
                    <input type="text" className="form-control w-25" autoComplete="off" id="initial_cost" placeholder="" value={initialCost} onChange={initialCostChange} required />
                    <div className="invalid-feedback">
                        Initial cost required.
                    </div>
                </div>
            </div>

            <hr className="my-4" />
            <p><u>Input expenses incurred</u></p>

            {/* <!-- Add expenses incurred --> */}
            <IncurredForm projectID={project.id}></IncurredForm>
            {/* <!-- End add expenses incurred --> */}
            <hr className="my-4" />

            <button className="btn btn-primary btn-lg float-end" type="submit" onClick={saveHandler}>Save</button>

        </form>
    )
}

export default InformationForm;