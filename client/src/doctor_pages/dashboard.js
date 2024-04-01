import React from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../icons/android-chrome-192x192.png';

const Dashboard = () => {

    const data = [
        {
            "unique_id": "12345",
            "name": "John Doe",
            "age": 30,
            "gender": "Male",
            "timestamp": "2024-02-21T14:00:00Z"
        },
        {
            "unique_id": "67890",
            "name": "Jane Smith",
            "age": 25,
            "gender": "Female",
            "timestamp": "2024-02-20T10:00:00Z"
        },
        {
            "unique_id": "09876",
            "name": "Michael Brown",
            "age": 40,
            "gender": "Male",
            "timestamp": "2024-02-22T08:00:00Z"
        },
        {
            "unique_id": "54321",
            "name": "Alice Johnson",
            "age": 35,
            "gender": "Female",
            "timestamp": "2024-02-21T16:00:00Z"
        },
        {
            "unique_id": "23456",
            "name": "David Miller",
            "age": 50,
            "gender": "Male",
            "timestamp": "2024-02-21T12:00:00Z"
        }
    ];
    const timeStampHandler = (inputTimestamp) => {
        const date = new Date(inputTimestamp);
        const formattedString = date.toLocaleString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit',
            minute: '2-digit'
        });
        return formattedString; // Output: 02/21/2024, 12:00 PM 
    };
    
    return (
        <article className='h-screen'>
            <header className='flex justify-center px-6 py-4'>
                <div className=' container flex justify-between'>
                    <img class="h-10 w-auto" src={logo_icon} alt="Your Company"/>
                    <Link to='/doc-login' className='text-red-500 hover:bg-gray-300 hover:text-red rounded-md px-6 py-3 text-sm font-medium'>Logout</Link>
                </div>
            </header>
            <div className='p-6 w-full'>
                <div className='container mx-auto'>
                    <p className='text-base font-medium text-gray-400 pb-4'>Your Appointments</p>
                    {
                        (data.length === 0)?
                        <p className='text-xl font-medium px-8'>You have no appointments today</p>
                        :
                        data.map((patient_data, idx)=> (
                            <div key={idx} className='p-6 border custom-border-bottom-doctor-cards rounded-lg mb-4'>
                                <div className='flex gap-4 mb-4'>
                                    <img class="h-12 w-auto rounded-full" src="https://www.w3schools.com/w3images/avatar3.png" alt="Patient"/>
                                    <div className=''>
                                        <p>{patient_data.name}</p>
                                        <p>{patient_data.age} • {patient_data.gender}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className=''>{timeStampHandler(patient_data.timestamp)}</p>
                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>PRESCRIBE</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </article>
    );
}


export default Dashboard;