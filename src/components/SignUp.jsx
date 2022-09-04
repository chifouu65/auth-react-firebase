import {useRef, useState} from "react";
import {auth} from "../utils/firebase.config";

const SignUp = () => {

    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setDisplayName] = useState('');

    const handleRegister = (e) => {
        e.preventDefault()

        try {
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value, registerPassword.current.value
            ).then(async (userAuth) => {
                    await userAuth.user.updateProfile
                    ({
                        displayName,
                    })
                    console.log(userAuth);
                window.location.reload();
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup'>
                <h3>Sincrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input
                        type="text"
                        placeholder='Name/Pseudo'
                        onChange={(e) => setDisplayName(e.target.value)}
                        required
                    />
                    <input
                        type='email'
                        placeholder='email ex: noah@gmail.com'
                        ref={registerEmail}
                        required
                    />
                    <input
                        type='password 6.min caractere'
                        placeholder='Password'
                        ref={registerPassword}
                        required
                    />
                    <input
                        type='submit'
                        value='valide signup'
                    />
                </form>
            </div>
        </div>
    )
}

export default SignUp