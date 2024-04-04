import React, {useState} from 'react';
import Navigation from '../components/navigation';


const Chat = () => {
    
    const [prompt, setPrompt] = useState("");
    const [fetching, setFetching] = useState("");
    // const [response, setResponse] = useState("response");
    const [conversation, setConversation] = useState([]);
    
    const sendPrompt = async () => {
        setFetching(true);
        
        // Replace 'YourAPIFunction' with your actual API function and 'apiParams' with the actual parameters your API function needs
        const API_URL = 'https://api.openai.com/v1/chat/completions';
        const OPEN_AI_API = "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";
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
    

    return (
        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='h-screen w-full flex flex-col flex-end justify-center align-stretch'>
                <div className='h-full overflow-y-scroll pt-2 items-end'>
                    <div>
                        {
                            conversation.map((message, idx) => (
                                (message.role === 'user') ?
                                    <div key={idx} className='p-6 rounded-lg bg-indigo-100'>{message.content}</div>
                                :
                                    <div key={idx} className='p-6'>{message.content}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="border px-4 py-4 w-full">
                    <div className="flex">
                        <input 
                            value={prompt}
                            onChange={(e)=>setPrompt(e.target.value)}
                            type="text"
                            placeholder="Write your message!"
                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3"
                        />
                        <button 
                            disabled={fetching}
                            onClick={sendPrompt}
                            type="button" 
                            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                        >   Send
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Chat;