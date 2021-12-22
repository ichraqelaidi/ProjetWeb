import React, { useState} from 'react'
import { NavLink  } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { GiAutoRepair } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdGroups } from "react-icons/md";

export default function Header(props) {
    const [show, setShow] = useState(false)
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><GiAutoRepair/>WeReportIT</a>
                    <button className="navbar-toggler" type="button" onClick={()=>setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" style={show?{display:"block"}:{display:'none'}}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/"><AiOutlineHome/> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/HomeAdmin"><MdGroups/> Gestion des Responsables</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/Service"><MdMiscellaneousServices/> Gestion des Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/Localisation"><BiCurrentLocation/> Gestion des Localisations</NavLink>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><AiOutlineLogout/>Déconnexion</button>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><AiOutlineLogin/> Connexion</button>

                    </form>
                    
                    </div>
                </div>
            </nav>  
            </div>
        )
}
