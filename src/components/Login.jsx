import {useRef, useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../utils/firebase.config";

const Login = () => {
    const loginEmail = useRef();
    const loginPassword = useRef();
    const [err, setErr] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
             const user = await signInWithEmailAndPassword(auth,loginEmail.current.value,loginPassword.current.value)
        console.log(user)
        } catch (error) {
            console.log(error)
            setErr(true)
        }
    }

    return (
        <div className='login-container'>
            <div className='login'>
                <h3>Login</h3>
                <form className='form-login' onSubmit={e => handleLogin(e)}>
                    <input type='email'
                           placeholder='email'
                           ref={loginEmail}
                           required
                    />
                    <input type='password'
                           placeholder='password'
                           ref={loginPassword}
                           required
                    />
                    <input type='submit'
                           placeholder='Connect'
                    />
                    <span style={{color: 'red'}}>{err && "Password or mail is wrong"}</span>

                </form>
            </div>
        </div>
    )
}

export default Login;