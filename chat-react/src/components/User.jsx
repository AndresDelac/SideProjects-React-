import { useAuthState } from "react-firebase-hooks/auth"; 
import Login from "./Login";
import Logout from "./LogOut";
import { auth } from "../firebase";

const User = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    const image = user ? user.photoURL : "/userImage.png";
    const name = user ? user.displayName : "User name";
    
    return ( 
        
            <div className="right-side">
                <h1>Chat rapido</h1>
                <article className="card-user">
                    <img src={image} alt="user photo" />
                    <p>{ name }</p>
                    { user ?  <Logout /> : <Login /> }
                </article>
            </div>
     );
}
 
export default User;