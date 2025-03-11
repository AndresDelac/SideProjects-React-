import {  GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"

const Login = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    

    // console.log("Usuario:", user);
    // console.log("Cargando:", loading);
    // console.log("Error:", error);
    
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return ( 
        <button
            className="btn-login"
            onClick={googleLogin}
        >
            <i className="fa-brands fa-google"></i>
            Sign in with Google
        </button>
     );
}
 
export default Login;