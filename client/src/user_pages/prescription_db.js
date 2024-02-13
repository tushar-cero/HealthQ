import React from 'react';
import Navigation from '../components/navigation';

const prescriptionData = [
    {
      doctor_type: "Cardiologist",
      doctor_name: "Dr. Michael Williams",
      upload_date: "18th Dec, 2023"
    },
    {
      doctor_type: "Dermatologist",
      doctor_name: "Dr. Sarah Jones",
      upload_date: "18th Dec, 2023"
    },
    {
      doctor_type: "Pediatrician",
      doctor_name: "Dr. Jennifer Lee",
      upload_date: "18th Dec, 2023"
    },
    {
      doctor_type: "Neurologist",
      doctor_name: "Dr. Olivia Smith",
      upload_date: "18th Dec, 2023"
    },
    {
      doctor_type: "Dentist",
      doctor_name: "Dr. Emily Garcia",
      upload_date: "18th Dec, 2023"
    },
    {
        doctor_type: "Orthopedic",
        doctor_name: "Dr. John Anderson",
        upload_date: "18th Dec, 2023"
      },
      {
        doctor_type: "Gynecologist",
        doctor_name: "Dr. Emily Johnson",
        upload_date: "18th Dec, 2023"
      },
      {
        doctor_type: "Ophthalmologist",
        doctor_name: "Dr. Richard Taylor",
        upload_date: "18th Dec, 2023"
      },
      {
        doctor_type: "Psychiatrist",
        doctor_name: "Dr. Katherine Davis",
        upload_date: "18th Dec, 2023"
      },
      {
        doctor_type: "Endocrinologist",
        doctor_name: "Dr. Mark Smith",
        upload_date: "18th Dec, 2023"
      }
  ];

const PrescriptionDb = () => {
    return (
        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='h-screen w-full overflow-y-scroll'>
                <div className='py-2 px-6'>
                    <h1 className='text-3xl font-bold py-6'>Your Prescriptions</h1>
                    {prescriptionData.map((prescription, idx) => (
                        <div className='flex justify-between items-center p-6 mb-4 rounded-2xl bg-indigo-50' key={idx}>
                            <div>
                                <span className='text-indigo-500 text-xs font-bold pb-4'>{prescription.doctor_type}</span>
                                <p>{prescription.doctor_name}</p>
                            </div>
                            <p>Last updated on {prescription.upload_date}</p>
                            <button className='rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>VIEW</button>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default PrescriptionDb;