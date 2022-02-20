import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.template.css';
import HomeButton from './HomeButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <HomeButton></HomeButton>
                
            </header>

        </Fragment>
    );
};


export default Header;