import IncurredForm from "./IncurredForm";
import classes from './InformationForm.module.css';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';




const InformationForm = (props) => {

    let params = useParams();
    let projectID = params.id

    const projectInformation = useSelector((state) => state.informations.projects)
    // notice convert para to int to compare
    let project = projectInformation.find((obj) => obj.id == projectID)

    const saveHandler = (event)=>{
        event.preventDefault();

        
    }

    return (
        <form className="needs-validation" >
            <div className="row g-3">

                <div className="col-12">
                    <label for="phone" className="form-label">Project Name</label>
                    <input type="text" className="form-control" id="project_name" placeholder="name" value={project.projectName} />
                    <div className="invalid-feedback">
                        Please enter a valid phone address for shipping updates.
                    </div>
                </div>

                <div className="col-sm-6">
                    <label for="firstName" className="form-label">Owner name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value={project.ownerName} required />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>


                <div className="col-12">
                    <label for="phone" className="form-label">Phone <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="phone_input" placeholder="097xxxxxxxx" value={project.phone} />
                    <div className="invalid-feedback">
                        Please enter a valid phone address for shipping updates.
                    </div>
                </div>

                <div className="col-12">
                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" value={project.email} />
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>

                <div className="col-12">
                    <label for="address" className="form-label">Address<span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required value={project.address} />
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>

                <div className="col-xl-5">
                    <label for="country" className="form-label">Country<span className="text-muted">(Optional)</span></label>
                    <select className="form-select" id="country" required value={project.country}>
                        <option value="">Choose...</option>
                        <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>

            </div>

            <div className={`row ${classes.initial_cost_div}`}>
                <div className="col-12">
                    <label for="zip" className="form-label"> <strong>Initial Cost:</strong></label>
                    <input type="text" className="form-control w-25" id="initial_cost" placeholder="" required />
                    <div className="invalid-feedback">
                        Initial cost required.
                    </div>
                </div>
            </div>

            <hr className="my-4" />
            <p><u>Input expenses incurred</u></p>

            {/* <!-- Add expenses incurred --> */}
            <IncurredForm></IncurredForm>
            {/* <!-- End add expenses incurred --> */}
            <hr className="my-4" />

            <button className="btn btn-primary btn-lg float-end" type="submit" onClick={saveHandler}>Save</button>

        </form>
    )
}

export default InformationForm;