import React, {useState} from 'react';
import Navigation from '../components/navigation';
import { GoogleGenerativeAI } from "@google/generative-ai";


const Chat = () => {
    
    const [prompt, setPrompt] = useState("");
    const [fetching, setFetching] = useState("");
    const [conversation, setConversation] = useState([]);
    
    const API_KEY = "enter-your-api-key";
    const genAI = new GoogleGenerativeAI(API_KEY);

    const sendPrompt = async () => {
        setFetching(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        setPrompt(prompt + ". You are a medical AI assistant, named HealthQ AI, designed to provide helpful and informative responses to user queries related to health and medicine. Your primary goal is to assist users in making informed decisions about their health, but you are not a substitute for professional medical advice. Try to answer in long paragraphs and simple bullet points when needed.")
        const userprompt = prompt

        const result = await model.generateContent(userprompt);
        const response = await result.response;
        const text = response.text();
        setConversation((prevState) => ([
            ...prevState,
            {
                prompt: prompt,
                response: text
            }
        ]));
        console.log(conversation);
        setPrompt("");
        setFetching(false);
    }

    const reponseFormat = (text, idx) => {
        if (text.includes('**')) {
            const formattedResponse = text.split('**').filter(str => str).map(str => {
                const [title, description] = str.split(':');
                return { title: title.trim(), description: description ? description.trim() : '' };
            });

            return formattedResponse.map((remedy, idx) => (
                <div key={idx}>
                    <h2>{remedy.title}</h2>
                    <p className='pl-3 '>{remedy.description}</p>
                </div>
            ));
        } else {
            // If the response is a simple text, render it directly
            return (
                <div key={idx}>
                    <p>{text}</p>
                </div>
            );
        }
    }

    return (
        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='h-screen w-full flex flex-col flex-end justify-center align-stretch'>
                <div className='h-full overflow-y-scroll pt-2 items-end'>
                    <div>
                        {
                            conversation.map((message, idx) => (
                            <>
                                <div key={idx} className='p-6 rounded-lg bg-indigo-100'>{message.prompt}</div>
                                <div key={idx} className='p-6'>{reponseFormat(message.response, idx)}</div>
                            </>
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
                        >   {(fetching)? "Thinking": "Send"}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Chat;