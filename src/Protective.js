import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const Protective = (props) => {
    const navigate = useNavigate();

    const location = useLocation()

    useEffect(() => {
        // eslint-disable-next-line

        if (!localStorage.getItem("accessToken")) {
            navigate('/LogIn');
        }

        else {
            if (location.pathname === "/LogIn") {
                navigate('/');
            }
            else {
                if (location.pathname === "/SingUp") {
                    navigate('/');
                }
            }
        }
    });

    return (
        <>
            <props.comp />
        </>
    )
}

export default Protective;
