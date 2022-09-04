import {useState} from "react";
import SignUp from "./SignUp";
import Login from './Login'

const ConnectModal = () => {

    const [signUp, setSignUp] = useState(true)

    return (
        <div className='connect-modal'>
            <div className='header-btn'>

                <button
                    style={{ background: signUp ? "rgb(28,28,28)" : "rgb(82,82,82)"}}
                    onClick={() => setSignUp(true)}
                >
                    SignUp
                </button>

                <button
                    style={{ background: signUp ? "rgb(82,82,82)" : "rgb(28,28,28)"}}
                    onClick={() => setSignUp(false)}
                >
                    Connect
                </button>

            </div>
            {/* event signup/connect affichage */}
            {signUp ? <SignUp/> : <Login/>}

        </div>
    );
};

export default ConnectModal