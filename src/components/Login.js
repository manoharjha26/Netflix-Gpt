import { useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate.js';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleButtonClick = () => {
        // valid the form data
        // checkValidData(email, password)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
<<<<<<< HEAD
            <form onChange={e => e.preventDefault()} className='rounded-lg absolute w-3/12 bg-black bg-tr p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-8s0'>
=======
            <form className='rounded-lg absolute w-3/12 bg-black bg-tr p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
>>>>>>> 5ed25a7 (update login page)
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign in" : "Sign up"}</h1>
                {!isSignInForm && <input type="name" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 ' />}
                <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 ' />
                <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 ' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign in" : "Sign up"}</button>
                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now"}</p>
            </form>
        </div>
    )
}

export default Login
