import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navigation from '../components/navigation';
import Modal from '../components/modal';
import Toast from '../components/toast';

const Dashboard = () => {

    const [fetching, setFetching] = useState(false);
    const [appointmentBooked, setAppointmentBooked] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [doctorName, setDoctorName] = useState("");
    const [doctorFetchData, setDoctorFetchData] = useState();
    
    const handleBookAppointmentConfirmation = (name) => {
        setDoctorName(name);
        setShowModal(!showModal);
    }
    const handleBookAppointment = () => {
        setShowModal(!showModal);
        setAppointmentBooked(true);
        setShowToast(true);
    }

    useEffect(() => {
        setFetching(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:M54rpXBR/doctors');
            const { data } = response;
            if (Array.isArray(data)) {
                setDoctorFetchData(data);
            } else {
                console.error('Unexpected API response: data is not an array', data);
            }
            setFetching(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setFetching(false);
          }
        };
    
        fetchData();
    }, []);

    const getDate = () => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        let day = tomorrow.getDate();
        let month = tomorrow.getMonth() + 1; // JavaScript months are 0-based counting
        let year = tomorrow.getFullYear();

        // Ensure day and month are two digits
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return `${day}/${month}/${year}`;
    }
    

    return (
        <>

        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='p-6 w-full mx-auto flex justify-center items-start'>
                <aside className='w-1/2'>
                    <p className='text-base font-medium text-gray-400 pb-4'>Your Appointments</p>
                    {
                        (appointmentBooked) ? 
                            <div className="rounded-lg overflow-hidden bg-blue-100 mr-6">
                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base pb-2">You have an appointment with <b>{doctorName}</b></p>
                                    <p className="text-gray-700 text-sm">Date: {getDate()}</p>
                                </div>
                            </div>
                        :
                            <p className='text-xl font-medium px-8'>You have no appointments today</p> 
                    }
                </aside>
                <div className='w-full h-full'>
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
                    
                    <div className="flex-1 justify-between flex flex-col custom-border-doctor-cards mb-4" style={{'height': '87%'}}>
                        <div className="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                            {!fetching && doctorFetchData && Array.isArray(doctorFetchData) && doctorFetchData.map((doctor, idx)=>(
                                <div key={idx} className="flex justify-between items-center gap-8 p-4 custom-border-bottom-doctor-cards">
                                    <div className='flex justify-center items-center gap-8'>
                                        <img className="h-16 w-16 flex-none rounded-full bg-gray-50" src={doctor.profile_photo.url} alt="Doctor's Profile" />
                                        <div>
                                            <p><span className="text-base font-semibold text-gray-900">{doctor.name}</span> • <span className="text-sm font-regular text-gray-600">{doctor.title}</span></p>
                                            <p><span className="text-sm font-regular text-gray-600">{doctor.rating}/5.0</span> • <span className="text-sm font-regular text-gray-600">{doctor.years_of_experience} Years of Experience</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold leading-6 text-gray-900 mb-2">{doctor.location}</p>
                                        <button 
                                            type="button" 
                                            onClick={()=>handleBookAppointmentConfirmation(doctor.name, doctor.id)} 
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            BOOK APPOINTMENT
                                        </button>
                                    </div>
                                </div>     
                            ))}
                        </div>
                    </div>
                </div>     
            </div>
        </article>
        
        <Modal showModal={showModal} setShowModal={setShowModal} handleBookAppointment={handleBookAppointment} name={doctorName}/>
        <Toast message="Your appointment has been confirmed" type='success' showToast={showToast} setShowToast={setShowToast} />
        </>
    );
}

export default Dashboard;