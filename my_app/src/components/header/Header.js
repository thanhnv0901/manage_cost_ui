import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.template.css';
import HomeButton from './HomeButton';


const Header = (props) => {
    return (
        <Fragment>
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <HomeButton></HomeButton>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div class="navbar-nav col-md-3 col-lg-2">
                    <div class="nav-item text-nowrap ">
                        <a class="nav-link px-3 sign_out_in_button" href="#">Sign out</a>
                    </div>
                </div>
            </header>

        </Fragment>
    );
};


export default Header;