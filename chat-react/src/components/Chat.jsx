/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";
const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [user, loading, error] = useAuthState(auth);


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
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!user) {
        return <p>Por favor, inicia sesión para acceder al chat.</p>;
    }

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
            <SendMessage />
        </section>
     );
}
 
export default Chat;