import React, {useState} from 'react';
import logo_icon from '../icons/android-chrome-192x192.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({ email: '', password: ''});

    const loginDataCollectionHandler = (event) => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value,
        });
    }
    const loginHandler = async (event) => {
        event.preventDefault(); 
        console.log("login done");

        // navigate('/dashboard');
        try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:M54rpXBR/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });
    
            if (response.ok) {
                console.log('Login successful');
                navigate('/dashboard');
            } else {
                console.error('Login failed:', await response.text());
            }
        } catch (error) {
            console.error('Error:', error); 
        }
    };

    return (
        <article className="mx-auto h-full flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src={logo_icon} alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2"><input id="email" name="email" type="email" autoComplete="email" required value={loginInfo.email} onChange={loginDataCollectionHandler} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/></div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between"><label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label></div>
                        <div className="mt-2"><input id="password" name="password" type="password" autoComplete="current-password" required value={loginInfo.password} onChange={loginDataCollectionHandler} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/></div>
                    </div>

                    <div>
                        <button onClick={loginHandler} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
                <div className='py-6 text-blue-500 underline'><Link to='/doc-login'>Login as a Doctor</Link></div>
            </div>
        </article>
    );
}

export default Login;