import React from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../icons/android-chrome-192x192.png';
const Navigation = () => {
    return (
        <nav className='w-1/5 m-2 py-8 px-8 shadow-sm sticky top-0 bg-indigo-50 rounded-md flex flex-col justify-between'>
            <div className="flex justify-center">
                <img className="h-8 w-auto" src={logo_icon} alt="Your Company"/>
            </div>
            <div className="flex flex-col justify-center items-start gap-8">
                <div><Link to='/' className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><i class="fa fa-cube mr-2" aria-hidden="true"></i>Dashboard</Link></div>
                <div><Link to='/prescriptions' className="text-gray-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 text-base font-medium"><i className="fa fa-newspaper-o mr-2" aria-hidden="true"></i>Prescriptions</Link></div>
                <div><Link to='/chat' className="text-gray-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 text-base font-medium"><i className="fa fa-dashcube mr-2" aria-hidden="true"></i>Chat</Link></div>
                <div><Link to='/' className="text-gray-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 text-base font-medium"><i className="fa fa-heartbeat mr-2" aria-hidden="true"></i>Medical History</Link></div>
                <div><a href="www.google.com" className="text-gray-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 text-base font-medium"><i className="fa fa-question-circle mr-2" aria-hidden="true"></i>Support</a></div>
            </div>
            <div className="flex flex-col justify-center items-center  gap-4">
                <img className="h-12 w-12 rounded-full border-blue border-2" src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1705314141~exp=1705314741~hmac=0a99d811618454c8165e4fdc6b71649bca9ebb44f8d9a7ac156600071d76ef72" alt=""/>
                <a href="www.google.com" className="text-red-500 hover:bg-gray-300 hover:text-red rounded-md px-6 py-3 text-sm font-medium"><i className="fa fa-sign-out mr-2" aria-hidden="true"></i> Log Out</a>
            </div>
        </nav>
    );
}

export default Navigation;
