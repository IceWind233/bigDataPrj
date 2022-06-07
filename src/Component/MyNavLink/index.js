import {NavLink} from "react-router-dom";

import './index.css'

export default function MyNavLink(props){

    return <NavLink className={({ isActive }) =>"navLink"+(isActive ? " activated" : "")} {...props}></NavLink>
}