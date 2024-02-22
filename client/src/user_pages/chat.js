import React, {useState} from 'react';
import Navigation from '../components/navigation';

const OPEN_AI_API = "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";

const Chat = () => {

    const [prompt, setPrompt] = useState("");
    const [conversation, setConversation] = useState([]);
    const sendPrompt = () => {
        setConversation();
        console.log(OPEN_AI_API);
    }

    return (
        <article className='h-screen flex flex-auto overflow-hidden'>
            <Navigation/>
            <div className='h-screen w-full flex flex-col flex-end justify-center align-stretch'>
                <div className='h-full overflow-y-scroll pt-2 items-end'>
                    <div>
                        {
                            conversation.map((message, idx) => (
                                (message.role === 'user') ?
                                    <div className='p-6 rounded-lg bg-indigo-100'>{message.content}</div>
                                :
                                    <div className='p-6'>{message.content}</div>
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
