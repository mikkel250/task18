import React from 'react';
import logo from '../logo.png';


function Welcome(props) {
    return <a><i class="large material-icons">account_circle</i></a>
};

function SignUp(props) {
    return <><a href="#">Sign Up/Log In</a></>
};

function LoggedIn(props) {
    if (props.isLoggedIn) {
        return <Welcome />
    }
    return <SignUp />
};

function Header(props) {    
    return (
        <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src={logo} width={75} height={75} alt="" /></a>
            <ul id="nav" class="right hide-on-med-and-down">                
                <li>Welcome, {props.name}! </li>
                <li><LoggedIn name={props.name} isLoggedIn={props.isLoggedIn}/></li>
            </ul>
        </div>
    </nav>
    )
}

export default Header;
