import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [ loading, error] = useAuthState(auth);
    

    // console.log("Error:", error);
    console.log("Cargando:", loading);

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Usuario autenticado:", result.user);
            })
            .catch((error) => {
                console.error("Error durante el inicio de sesión:", error);
            });
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
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
};

export default Login;