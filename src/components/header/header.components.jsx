import React from "react"
import "./header.components.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { Link } from "react-router-dom"
import {auth} from  "../firebase/firebase.utils.jsx"

const Header = ({currentUser}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/login">
                    CONTACT
                </Link>
                {
                currentUser?
                
                <div className="option" onClick={()=>(auth.signOut())}>
                    
                    SIGN OUT
                </div>
                :
                <Link className="option" to="/signInSignUp">
                    SIGN IN
                </Link>
                }
            </div>

        </div>

    )
}

export default Header;

