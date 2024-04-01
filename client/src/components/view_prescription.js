import React from 'react';

const ViewPrescription = ({ openPrescription, setOpenPrescription, prescriptionData }) => {
  return (
    <>{ openPrescription && (
    
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-start bg-[rgba(0,0,0,0.5)] overflow-y-scroll">
      <button onClick={()=>setOpenPrescription(false)} className='fixed top-4 right-4 p-3'>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
      <div className="flex flex-col bg-white p-6 aspect-1/1.4 w-4/5 m-6">
        {/* ----- Header ----- */}
        <div className='pb-4 flex justify-between'>
          <div className='flex gap-4'>
            <img class="h-12 w-auto" src="https://www.shutterstock.com/image-vector/medical-healthy-clinic-logo-concept-260nw-1398954623.jpg" alt="Clinic"/>
            <div>
              <p className='text-lg font-semibold'>{prescriptionData.doctor.name}</p>
              <p className='text-sm'>{prescriptionData.doctor.designation}</p>
              <p className='text-sm'>{prescriptionData.doctor.specialty}</p>
            </div>
          </div>
          <div>
            <p>{prescriptionData.doctor.address}</p>
          </div>
        </div>

        <div className="flex justify-between gap-2 flex-wrap border custom-border-bottom-doctor-cards px-6 py-3">
          <p>{prescriptionData.patient.name}</p>
          <p>{prescriptionData.patient.age} | {prescriptionData.patient.gender}</p>
          <p>Weight: {prescriptionData.patient.weight}kgs</p> 
          <p>Height: {prescriptionData.patient.height}cms</p> 
        </div>

        {/* ----- Observation ----- */}
        <h2 className="text-xl font-medium py-4">Observation</h2>
        <ul className="pl-6 list-disc">
          {prescriptionData.observations.map((observation) => (
            <li key={observation}>{observation}</li>
          ))}
        </ul>

        <hr className="mt-4" />

        {/* ----- Diagnosis ----- */}
        <h2 className="text-xl font-medium py-4">Diagnosis</h2>
        <ul className="pl-6 mb-6 list-disc">
          {prescriptionData.diagnosis.map((diagnosisItem) => (
            <li key={diagnosisItem}>{diagnosisItem}</li> 
          ))}
        </ul>

        {/* ----- Medicines ----- */}
            <table className='medicine-table'>
                <thead>
                    <tr>
                    <th>Sr. No.</th> 
                    <th>Medicine Name</th> 
                    <th>Dosage</th> 
                    <th>Instructions</th> 
                    </tr> 
                </thead>
                <tbody>
                    {prescriptionData.medicine.map((medicine, idx) => (
                    <tr key={medicine.name}>
                        <td>{idx+1}</td>
                        <td>{medicine.name}</td>
                        <td>{medicine.daily_dosage} times a day</td>
                        <td>{medicine.instructions || ''}</td> 
                    </tr>
                    ))}
                </tbody>
            </table>

        {/* ----- Recommendation ----- */}
        <h2 className="text-xl font-medium py-4">Recommendation</h2>
        <ul className="pl-6 list-disc">
          {prescriptionData.recommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>)}</>
  );
};

export default ViewPrescription;