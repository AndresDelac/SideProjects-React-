import { auth } from "../firebase";
import { formatDate } from "./helpers";

/* eslint-disable react/prop-types */
const Message = ({ message }) => {

    let newStyle = "message"
    if (auth.currentUser) {
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        newStyle = user === newUser ? 'my-message' : "message"; 
    }




    return ( 
        <article className={newStyle}>
            <div>
                {/* <button>
                    <i className="fa-regular fa-trash"></i>
                </button> */}
                <p className="name"> {message.name} </p>
                <div className="text-message">
                <p className="text"> {message.text} </p>
                </div>
                <p className="time"> {formatDate(message.timestamp)} </p>
            </div>
            <img src={message.photo} alt="user photo" referrerPolicy="no-referr" />
        </article>

     );
}
 
export default Message;