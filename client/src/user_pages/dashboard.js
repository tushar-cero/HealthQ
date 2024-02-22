import React from 'react';
import Navigation from '../components/navigation';

const Dashboard = () => {
      
    const data = [
        {
            "name": "Dr. Michael Williams",
            "designation": "Cardiologist",
            "location": "St. Jude Hospital",
            "expertise": [
                "Heart disease",
                "Coronary artery disease",
                "Congestive heart failure"
            ],
            "years_of_experience": 15,
            "rating": 4.8,
            "availability": {
                "Monday": "8:00 AM - 5:00 PM",
                "Tuesday": "9:00 AM - 4:00 PM",
                "Wednesday": "Closed",
                "Thursday": "8:00 AM - 5:00 PM",
                "Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/8942093/pexels-photo-8942093.jpeg"
        },
        {
            "name": "Dr. Michael Williams",
            "designation": "Cardiologist",
            "location": "St. Jude Hospital",
            "expertise": [
                "Heart disease",
                "Coronary artery disease",
                "Congestive heart failure"
            ],
            "years_of_experience": 15,
            "rating": 4.8,
            "availability": {
                "Monday": "8:00 AM - 5:00 PM",
                "Tuesday": "9:00 AM - 4:00 PM",
                "Wednesday": "Closed",
                "Thursday": "8:00 AM - 5:00 PM",
                "Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/8942093/pexels-photo-8942093.jpeg"
        },
        {
            "name": "Dr. Michael Williams",
            "designation": "Cardiologist",
            "location": "St. Jude Hospital",
            "expertise": [
                "Heart disease",
                "Coronary artery disease",
                "Congestive heart failure"
            ],
            "years_of_experience": 15,
            "rating": 4.8,
            "availability": {
                "Monday": "8:00 AM - 5:00 PM",
                "Tuesday": "9:00 AM - 4:00 PM",
                "Wednesday": "Closed",
                "Thursday": "8:00 AM - 5:00 PM",
                "Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/8942093/pexels-photo-8942093.jpeg"
        },
        {
            "name": "Dr. Sarah Jones",
            "designation": "Dermatologist",
            "location": "Central Skin Clinic",
            "expertise": [
                "Acne",
                "Psoriasis",
                "Eczema",
                "Skin cancer"
            ],
            "years_of_experience": 10,
            "rating": 4.5,
            "availability": {
                "Monday-Tuesday": "9:00 AM - 5:00 PM",
                "Wednesday-Thursday": "Closed",
                "Friday": "8:00 AM - 4:00 PM"
            },
            "imageURL": "https://images.pexels.com/photos/8942523/pexels-photo-8942523.jpeg"
        },
        {
            "name": "Dr. Jennifer Lee",
            "designation": "Pediatrician",
            "location": "Happy Kidz Pediatrics",
            "expertise": [
                "Childhood illnesses",
                "Vaccinations",
                "Developmental milestones",
                "Nutrition"
            ],
            "years_of_experience": 7,
            "rating": 4.9,
            "availability": {
                "Monday-Friday": "8:00 AM - 4:00 PM",
                "Saturday": "9:00 AM - 1:00 PM"
            },
            "imageURL": "https://images.pexels.com/photos/19218034/pexels-photo-19218034/free-photo-of-smiling-doctor-in-a-lab-coat-and-with-a-stethoscope.jpeg"
        },
        {
            "name": "Dr. Olivia Smith",
            "designation": "Neurologist",
            "location": "Brain & Spine Center",
            "expertise": [
                "Headaches",
                "Stroke",
                "Alzheimer's disease",
                "Multiple sclerosis"
            ],
            "years_of_experience": 20,
            "rating": 4.7,
            "availability": {
                "Monday-Wednesday": "9:00 AM - 6:00 PM",
                "Thursday-Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
        },
        {
            "name": "Dr. Emily Garcia",
            "designation": "Dentist",
            "location": "Bright Smiles Dental",
            "expertise": [
                "General dentistry",
                "Teeth whitening",
                "Dental implants",
                "Orthodontics"
            ],
            "years_of_experience": 5,
            "rating": 4.2,
            "availability": {
                "Tuesday-Thursday": "9:00 AM - 5:00 PM",
                "Monday-Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/4269363/pexels-photo-4269363.jpeg"
        },
        {
            "name": "Dr. Emily Garcia",
            "designation": "Dentist",
            "location": "Bright Smiles Dental",
            "expertise": [
                "General dentistry",
                "Teeth whitening",
                "Dental implants",
                "Orthodontics"
            ],
            "years_of_experience": 5,
            "rating": 4.2,
            "availability": {
                "Tuesday-Thursday": "9:00 AM - 5:00 PM",
                "Monday-Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/4269363/pexels-photo-4269363.jpeg"
        },
        {
            "name": "Dr. Emily Garcia",
            "designation": "Dentist",
            "location": "Bright Smiles Dental",
            "expertise": [
                "General dentistry",
                "Teeth whitening",
                "Dental implants",
                "Orthodontics"
            ],
            "years_of_experience": 5,
            "rating": 4.2,
            "availability": {
                "Tuesday-Thursday": "9:00 AM - 5:00 PM",
                "Monday-Friday": "Closed"
            },
            "imageURL": "https://images.pexels.com/photos/4269363/pexels-photo-4269363.jpeg"
        }
    ];

    return (
        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='p-6 w-full mx-auto flex justify-center items-start'>
                <aside className='w-1/2'>
                    <p className='text-base font-medium text-gray-400 pb-4'>Your Appointments</p>
                    <p className='text-xl font-medium px-8'>You have no appointments today</p>
                </aside>
                <div className='w-full'>
                    <form className='mb-6'>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find doctors near you" required/>
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    {/* <div className='overflow-y-scroll custom-border-doctor-cards h-full'>
                        <div className=''> */}
                    <div className="flex-1 justify-between flex flex-col h-screen custom-border-doctor-cards mb-4">
                        <div className="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                            {data.map((doctor, idx)=>(
                                <div key={idx} className="flex justify-between items-center gap-8 p-4 custom-border-bottom-doctor-cards">
                                    <div className='flex justify-center items-center gap-8'>
                                        <img className="h-16 w-16 flex-none rounded-full bg-gray-50" src={doctor.imageURL} alt="Doctor's Profile" />
                                        <div>
                                            <p><span className="text-base font-semibold text-gray-900">{doctor.name}</span> • <span className="text-sm font-regular text-gray-600">{doctor.designation}</span></p>
                                            <p><span className="text-sm font-regular text-gray-600">{doctor.rating}/5.0</span> • <span className="text-sm font-regular text-gray-600">{doctor.years_of_experience} Years of Experience</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold leading-6 text-gray-900 mb-2">{doctor.location}</p>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">BOOK APPOINTMENT</button>
                                    </div>
                                </div>     
                            ))}
                        </div>
                    </div>
                </div>     
            </div>
        </article>
    );
}

export default Dashboard;