import React, { useState } from 'react'//useEffect
import axios from 'axios';
import { BsFileEarmarkLock } from 'react-icons/bs';
 
export default function Login(props) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const handleSubmitLogin = (values) => {
        values.preventDefault();
        const login = {
            username: username,
            password: password
        };
        console.log(login);
        axios({
            method: "POST",
            url: `https://gest-maintance-univ-rouen.herokuapp.com/api/users/login/`,
            data: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            console .log(res)
                localStorage.setItem('token', JSON.stringify(res.data.token));
            setusername(""); setpassword("");
        });
    };

    return (
        <div className="container">
                  <h1 style={{textAlign:"center"}}><BsFileEarmarkLock/> AUTHENTIFIEZ-VOUS</h1>
            <div style={{width:'40%'}}  className="container alert alert-dismissible alert-secondary">
            <form onSubmit={handleSubmitLogin}>
            <div class="form-group">
                <label for="id" class="form-label mt-2">Identifiant :</label>
                <input type="text" class="form-control" id="id" placeholder="ABC123" onChange={e => setusername(e.target.value)}required/>
            </div>
            <div class="form-group">
                <label for="password" class="form-label mt-2">Mot de passe :</label>
                <input type="password" class="form-control" id="password" placeholder="votre mot de passe" onChange={e => setpassword(e.target.value)}required/>
            </div>
            <button className="btn btn-dark" type="submit" >Se Connecter</button>
        </form>
            </div>      
    </div>
    )
}
