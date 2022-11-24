import React, { useEffect, } from 'react';
import {useNavigate  } from 'react-router-dom';


import Signin from './Signin';

import Navbar from '../navbar/Navbar'

import "./styles.css";

function LoginForm(props) {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            navigate("/")
        }
      }, [navigate]);

    const handleLoginSignin = (val) => {
        const {
            email,
            password
        }= val;
        if(!email || !password){
            alert("Email or password Empty !!!");
        }
        else{
            const data = {
                email : email,
                password : password
            }
            localStorage.setItem('user', JSON.stringify(data));
            alert("Login Success!!!");
            navigate("/");
        }

    };

    return (
        <div className="form">
            <Navbar/>
            <div className='signin'>
                <Signin
                    onSubmit={handleLoginSignin}
                />
            </div>
         
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
