import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import EmojiPicker from 'emoji-picker-react';
const SendMessage = () => {
    const [ input, setInput ] = useState();
    const [ open, setOpen ] = useState("close");

    const sendMessage = async e =>{
        e.preventDefault()
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid, 
            photo: photoURL,
            timestamp: serverTimestamp(),
    })
    setInput("");
}

    const emoji = () => setOpen("open");
    const closeEmoji = () => setOpen("close");
    const onEmojiClick = (event, emojiObject) => {
        console.log(emojiObject);
        setInput(`${input}${emojiObject}`);
    };

    return ( 
        <form onSubmit={sendMessage}>
            
            <button
                type="button"
                className="btn-emoji"
                onClick={emoji}
            >
                <i className="fa-regular fa-face-smile"></i>
            </button>

            <div className={open}>
            <button
                type="button"
                className="close-emoji"
                onClick={closeEmoji}
            >
                <i className="fa-solid fa-x"></i>
            </button>
            <EmojiPicker />
            </div>

            <input type="text"
            placeholder="Escribe aqui!"
            value={input}
            onChange={e=> setInput(e.target.value)}
            />

            <button type="submit">
            Enviar
            </button>

        </form>
     );
}
 
export default SendMessage;