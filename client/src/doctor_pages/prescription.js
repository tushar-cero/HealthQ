import React, { useState } from 'react';
import ViewPrescription from '../components/view_prescription.js';

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
        // ... Logic to validate and potentially submit the prescription data ...
    };

  return (
    <div>
      <h2>Write Prescription</h2>
      <form onSubmit={handleSubmitPrescription}>
        {/* ... Input fields for doctor, patient, observations, etc. ... */}

        {/* Button to trigger preview */}
        {/* <button type="button" onClick={() => setPreviewMode(true)}>Preview</button> */}
        <button type="submit">Save Prescription</button>
      </form>

      {/* Conditionally render ViewPrescription to show preview */}
      {/* {previewMode && (
        <ViewPrescription prescriptionData={prescriptionData} />
      )} */}
    </div>
  );
};

export default Prescription;