import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Chat = () => {
    const [user, loading, error] = useAuthState(auth);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (user) {
            fetchMessages();
        }
    }, [user]);

    const fetchMessages = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "messages"));
            const messagesList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(messagesList);
        } catch (error) {
            console.error("Error al obtener los mensajes:", error);
        }
    };

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
        <div className="messages">
            <h1>Chat</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>{message.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Chat;