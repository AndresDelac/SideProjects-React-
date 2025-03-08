import { useAuthState } from "react-firebase-hooks/auth"; 
import Login from "./Login";
import Logout from "./LogOut";
import { auth } from "../firebase";

const User = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    
    return ( 
        <div>
            <div className="right-side">
                <h1>Chat rapido</h1>
                <article className="car-user">
                    <img src="" alt="" />
                    <p>{name || "user" }</p>
                    { user ? <Login /> : <Logout /> }
                </article>
            </div>

        </div>
     );
}
 
export default User;