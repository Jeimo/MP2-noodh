import React from 'react'
import LoginPage from '../pages/LoginPage';

const Authenticate = ({children}) => {
    const isLogin = true;
    if(!isLogin) return (
            <LoginPage />  
    )

    return (
        <div>{children}</div>
    )
}

export default Authenticate