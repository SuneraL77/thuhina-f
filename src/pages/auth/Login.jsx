import React from 'react'
import Header from '../../components/nav/Header'
import LoginWithMobile from '../../components/login/LoginWithMobile'
// import LoginWithEmail from '../components/login/LoginWithEmail'
// import MobileOTP from '../components/login/MobileOTP'
// import EmailOTP from '../components/login/EmailOTP'


const Login = () => {
    return (
        <>
            <Header />
            <LoginWithMobile/>
            {/* <LoginWithEmail/> */}
            {/* <MobileOTP/> */}
            {/* <EmailOTP/> */}
        </>
    )
}

export default Login
