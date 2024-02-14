import React from 'react';

const ViewPrescription = () => {
    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <div className='flex flex-col bg-white p-9 aspect-[1/1.4]'>
                {/* Header */}
                <div className='flex gap-4'>
                    <div>
                        <p>Patient's name</p>
                        <p>Phone Number</p>
                        <p>Age</p>
                        <p>Gender</p>
                        <p>Weight</p>
                        <p>Height</p>
                    </div>
                    <div>
                        <p>Doctor's name</p>
                        <p>Phone Number</p>
                        <p>Email Address</p>
                        <p>Clinics address</p>
                        <p>Designation · 4 years of experience</p>
                        <p>Speciality</p>
                    </div>
                </div>
                {/* Observation */}
                <h2>Observation</h2>
                <ul>
                    <li>Patient presented with [symptoms].</li>
                    <li>[Any relevant observations during examination].</li>
                    <li>[Any specific vitals or measurements].</li>
                </ul>
                {/* Diagnosis */}
                <h2>Diagnosis</h2>
                <ul>
                    <li>Provisional Diagnosis: [Provisional Diagnosis]</li>
                    <li>Final Diagnosis: [Final Diagnosis]</li>
                </ul>
                {/* Medicines */}
                <ol>
                    <li>[Medicine Name 1] - [Dosage and Administration Instructions]</li>
                    <li>[Medicine Name 2] - [Dosage and Administration Instructions]</li>
                    <li>[Medicine Name 3] - [Dosage and Administration Instructions]</li>
                </ol>
                {/* Recommendation */}
                <h2>Recommendation</h2>
                <ul>
                    <li>[Any lifestyle or dietary recommendations].</li>
                    <li>[Follow-up instructions or scheduled appointments].</li>
                    <li>[Emergency contact information].</li>
                </ul>
            </div>
        </div>
    );
}

export default ViewPrescription;