import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    const [newObservation, setNewObservation] = useState('');
    const [newDiagnosis, setNewDiagnosis] = useState("");
    // const [newMedicine, setNewMedicine] = useState({
    //     id: '',
    //     name: '',
    //     dailyDosage: '',
    //     instructions: ''
    // });
    const [newRecommendation, setNewRecommendation] = useState("");

    const handleAddObservations = (newObservation) => {
        setPrescriptionData(prevState => ({
            ...prevState,
            observations: [...prevState.observations, newObservation]
        }));
    }  
    const handleAddDiagnosis = (newDiagnosis) => {
        setPrescriptionData((prevState) => ({
            ...prevState,
            diagnosis: [...prevState.diagnosis, newDiagnosis],
        }));
    };

    const [medicineName, setMedicineName] = useState('');
    const [dailyDosage, setDailyDosage] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddMedicine = () => {
        const medicineData = {
            id: generateRandomString(),
            name: medicineName,
            dailyDosage,
            instructions
        };
        console.log(prescriptionData.medicine);
        
        setPrescriptionData((prevState) => ({
            ...prevState,
            medicine: [...prevState.medicine, medicineData],
        }));
    
        // Reset the medicine input fields after adding
        setMedicineName('');
    };

    const handleAddRecommendation = (newRecommendation) => {
        setPrescriptionData((prevState) => ({
            ...prevState,
            recommendations: [...prevState.recommendations, newRecommendation],
        }));
    };

    const handleSubmitPrescription = (event) => {
        event.preventDefault();
        console.log(prescriptionData);
        // API Call
    };

    function generateRandomString() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }    

    return (
        <div className='px-6'>
            <form onSubmit={handleSubmitPrescription}>
                
                {/* ---------- Button to trigger actions ---------- */}
                <div className='flex gap-6 justify-between item-center py-6'>
                    {/* <button type="button" onClick={() => setPreviewMode(true)}>Preview</button> */}
                    <Link to='/doc-dashboard' className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Back</Link>
                    <h1 className='text-xl font-medium text-gray-700'>Write Prescription</h1>
                    <span>
                        <button type="button" className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0">Preview</span>
                        </button>
                        <button type="submit" className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Save</button>
                    </span>
                </div>

                {/* ---------- Prescription Section ---------- */}

                <div className="flex flex-col">

                    <div className="flex justify-between gap-2 flex-wrap border rounded-lg custom-border-bottom-doctor-cards px-6 py-3">
                        <p>Name: <input className='prescription-input-fields' placeholder="Patient's Name" type="text" id="patient-name" name="patient-name" required/></p>
                        <p>Age: <input className='prescription-input-fields' placeholder='Age' type="number" id="patient-age" name="patient-age" required/></p>
                        <p>Gender:
                            <select id="patient-gender" name="patient-gender" required>
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </p>
                        <p>Weight (kgs): <input className='prescription-input-fields' type="number" id="patient-age" name="patient-age" required/></p>
                        <p>Height (cms): <input className='prescription-input-fields' type="number" id="patient-age" name="patient-age" required/></p>
                    </div>

                    {/* ----- Observation ----- */}
                    <h2 className="text-xl font-medium py-4">Observation</h2>
                    <ul className="pl-6 list-disc">
                        {prescriptionData.observations.map((observation) => (
                            <li key={observation}>{observation}</li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center my-4'>
                        <input value={newObservation} onChange={(e) => setNewObservation(e.target.value)}  className='prescription-input-fields' id="recommendations" name="recommendations" required/>
                        <button onClick={()=>handleAddObservations(newObservation)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>ADD</button>
                    </div>

                    <hr className="mt-4" />

                    {/* ----- Diagnosis ----- */}
                    <h2 className="text-xl font-medium py-4">Diagnosis</h2>
                    <ul className="pl-6 mb-6 list-disc">
                        {prescriptionData.diagnosis.map((diagnosisItem) => (
                            <li key={diagnosisItem}>{diagnosisItem}</li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center my-4'>
                        <input value={newDiagnosis} onChange={(e) => setNewDiagnosis(e.target.value)} className='prescription-input-fields' id="recommendations" name="recommendations" required/>
                        <button onClick={()=>handleAddDiagnosis(newDiagnosis)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>ADD</button>
                    </div>

                    {/* ----- Medicines ----- */}
                    <h2 className="text-xl font-medium py-4">Medicines</h2>
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
                                <tr key={medicine.id}>
                                    <td>{idx + 1}</td>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.dailyDosage} times a day</td>
                                    <td>{medicine.instructions || ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center gap-2 my-4">
                        <label className='w-max' htmlFor="medicine-name">Medicine Name:</label>
                        <input className='prescription-input-fields' type="text" id="medicine-name" name="medicine-name" required onChange={e => setMedicineName(e.target.value)}/>

                        <label className='w-max' htmlFor="daily-dosage">Daily Dosage:</label>
                        <input className='prescription-input-fields' type="text" id="daily-dosage" name="daily-dosage" required onChange={e => setDailyDosage(e.target.value)}/>

                        <label className='w-max' htmlFor="medicine-instructions">Instructions:</label>
                        <input className='prescription-input-fields' id="medicine-instructions" name="instructions" onChange={e => setInstructions(e.target.value)}/>
                        <button onClick={()=>handleAddMedicine()} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>ADD</button>
                    </div>

                    {/* ----- Recommendation ----- */}
                    <h2 className="text-xl font-medium py-4">Recommendation</h2>
                    <ul className="pl-6 list-disc">
                        {prescriptionData.recommendations.map((recommendation) => (
                            <li key={recommendation}>{recommendation}</li>
                            ))}
                    </ul>
                    <div className='flex justify-center items-center my-4'>
                        <input value={newRecommendation} onChange={(e) => setNewRecommendation(e.target.value)} className='prescription-input-fields' id="recommendations" name="recommendations"/>
                        <button onClick={()=>handleAddRecommendation(newRecommendation)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>ADD</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Prescription;