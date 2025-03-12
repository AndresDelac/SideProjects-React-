import { useAuthState } from "react-firebase-hooks/auth"; 
import Login from "./Login";
import Logout from "./LogOut";
import { auth } from "../firebase";

const User = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    
    return ( 
        
            <div className="right-side">
                <h1>Chat rapido</h1>
                <article className="card-user">
                    <img src="/userImage.png" alt="user photo" />
                    <p>{ name }</p>
                    { user ?  <Logout /> : <Login /> }
                </article>
            </div>
     );
}
 
export default User;