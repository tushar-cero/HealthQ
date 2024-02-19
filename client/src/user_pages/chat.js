import React, {useState} from 'react';
import Navigation from '../components/navigation';

const OPEN_AI_API = "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";

const Chat = () => {

    const [prompt, setPrompt] = useState("");
    const [conversation, setConversation] = useState([]);
    const sendPrompt = async () => {
        console.log(prompt)
        let url = "https://api.openai.com/v1/chat/completions";
        let token = `Bearer ${OPEN_AI_API}`;
        let model = 'gpt-3.5-turbo';

        let messagesToSend = [
            ...conversation, {
                role: 'user',
                content: prompt
            }
        ];
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messagesToSend
            })
        });
        let resjson = await res.json();
        if (resjson) {
            console.log(resjson);
            console.log(resjson.choices[0].message);
            let newAllMessages = [
                ...messagesToSend,
                resjson.choices[0].message
            ];
            console.log(newAllMessages);
            setConversation(newAllMessages);
            setPrompt('');
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
                                (message.role === 'user') ?
                                    <div className='p-6 rounded-lg bg-indigo-100'>{message.content}</div>
                                :
                                    <div className='p-6'>{message.content}</div>
                            ))
                        }
                        {/* <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div>
                        <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div>
                        <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div>
                        <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div>
                        <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div>
                        <div className='p-6 rounded-lg bg-indigo-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique velit corporis quod porro aperiam harum eos vero autem rem.</div>
                        <div className='p-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum vero hic quo placeat molestiae sed eligendi? Rem molestias a molestiae eos, asperiores quidem beatae dolor dicta esse sapiente qui ducimus hic impedit magnam quia velit pariatur eveniet! Officia sapiente magnam dicta suscipit voluptates nostrum facilis voluptatum? Vitae laudantium, quas quae, quis at repellendus id consectetur blanditiis, eligendi atque et aut mollitia vel veritatis eum quos quaerat voluptas. Distinctio eveniet earum ipsam doloremque. Tempore nam molestias accusamus, beatae delectus sunt dicta esse vitae cupiditate iusto distinctio, est harum vero perspiciatis praesentium omnis. Animi totam itaque placeat minima iusto, nemo, asperiores doloribus dolores expedita distinctio consectetur libero molestias illo id vero corporis excepturi tempora corrupti tenetur aut eius quam veniam. Libero consequatur ipsa, tenetur numquam neque sunt iusto atque, expedita voluptatibus unde dolores doloremque similique laborum magnam necessitatibus incidunt perspiciatis pariatur? Saepe fugiat dolor ipsum, deleniti suscipit eius atque ipsam porro ratione! Officia accusamus beatae esse impedit enim cum. Dolores dolor, voluptates consequuntur a placeat illo possimus ut enim esse laborum dignissimos totam, laudantium velit rerum perspiciatis accusamus, quas distinctio expedita minus dolorum alias quasi. At aut exercitationem distinctio fuga, velit soluta nostrum eaque corporis voluptatem recusandae voluptas ea perferendis facilis omnis laborum, repudiandae atque voluptates mollitia ratione aperiam incidunt illum. Inventore, officiis. Doloribus in recusandae sequi ea possimus libero odit cum necessitatibus velit quo expedita voluptatum, quidem, nesciunt aliquid error nam fuga, maxime impedit cupiditate nihil nulla quia ad. Maxime magni qui provident autem rerum ex quasi possimus! Consequuntur, doloremque earum? Vitae corrupti fuga minus optio accusamus sunt excepturi. Expedita maiores nam illum fugit adipisci iusto saepe omnis excepturi odit. Soluta eligendi ad ullam debitis impedit, modi libero magnam atque eum, optio cupiditate animi explicabo perferendis iste maiores amet quod dicta laborum vero laudantium. Iure, perferendis necessitatibus! Molestiae, officia corrupti!</div> */}
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
