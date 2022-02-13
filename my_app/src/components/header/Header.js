import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.template.css';
import HomeButton from './HomeButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <HomeButton></HomeButton>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav col-md-3 col-lg-2">
                    <div className="nav-item text-nowrap ">
                        <a className="nav-link px-3 sign_out_in_button" href="/">Sign out</a>
                    </div>
                </div>
            </header>

        </Fragment>
    );
};


export default Header;