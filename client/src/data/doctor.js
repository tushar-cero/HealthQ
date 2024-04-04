export const sendPrompt = async () => {
    setFetching(true);
    
    // Replace 'YourAPIFunction' with your actual API function and 'apiParams' with the actual parameters your API function needs
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const OPEN_AI_API = "";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPEN_AI_API}`
    }
    const data = {
        'model': 'gpt-3.5-turbo',
        'message': [
            {
                role: 'system',
                content: 'you are a medical professional built by HealthQ'
            },
            {
                role: 'user', 
                prompt
            }
        ]
    }
    const response = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })

    const apiResponse = await response.json();

    if (apiResponse && apiResponse.choices && apiResponse.choices[0] && apiResponse.choices[0].message && apiResponse.choices[0].message.content) {
        setConversation((prevState) => ([
            ...prevState,
            {
                prompt: prompt,
                response: apiResponse.choices[0].message.content
            }
        ]));
    } else {
        console.error('Unexpected API response', apiResponse);
    }
    
    setFetching(false);
};

export const data = [
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