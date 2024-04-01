import React, { useState } from 'react';

const Prescription = () => {

    const [prescriptionData, setPrescriptionData] = useState({
        doctor: {
            name: '',
            designation: '',
            specialty: '',
            address: ''
        },
        patient: {
            name: '',
            age: '',
            gender: '',
            weight: '',
            height: ''
        },
        observations: [],
        diagnosis: [],
        medicine: [],
        recommendations: []
    });

    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
        setPrescriptionData(prevState => ({
            ...prevState,
            [dataset.section]: {
                ...prevState[dataset.section],
                [name]: value
            }
        }));
    };

    const handleSubmitPrescription = (event) => {
        event.preventDefault();
        // API Call
    };

  return (
    <div>
      <h2>Write Prescription</h2>
      <form onSubmit={handleSubmitPrescription}>
        
        

        {/* Button to trigger preview */}
        <div className='flex gap-6 justify-center item-center'>
          <button type="button" onClick={() => setPreviewMode(true)}>Preview</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Prescription;