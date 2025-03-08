/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore";
import Message from "./Message";
const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newQuery = query(collection(db, "messages"), orderBy("timestamp"))

        const unsuscribe = onSnapshot(newQuery, (QuerySnapshot) => {
            let currentMessage = [];
            QuerySnapshot.forEach(item => {
                currentMessage.push({ content: item.data(), id:item.id  });
                
            })
            setMessages(currentMessage);
        })
        return unsuscribe;
    })

    return ( 
        <section className="chat-content">
            {
                messages && messages.map(item =>(
                    <Message
                    key={item.id}
                    message={item.content }
                    />
                ))
            }

        </section>
     );
}
 
export default Chat;