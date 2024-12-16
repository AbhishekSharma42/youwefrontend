import React, { useContext, useState } from 'react'
import { Context } from '../../Utils/Context'
import { Link } from 'react-router-dom';

function Login() {

    const { appName } = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        let url = `${process.env.REACT_APP_API_URL}/token/`;

        let options = {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": email, "password": password })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {

                // Store the token in local storage
                if (json) {
                    localStorage.setItem('accessToken', json.access);
                    localStorage.setItem('refreshToken', json.refresh);
                }
            })
            .catch(err => console.error('error:' + err));

        setEmail("")
        setPassword("")
        // const token = localStorage.getItem('accessToken');

    };

    return (
        <>
            <div className="bg-gray-50 font-[sans-serif] text-[#333]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
                        <div>{appName}</div>
                        <h2 className="text-center text-3xl font-extrabold">
                            Log in to your account
                        </h2>
                        <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input name="email" type="text" autoComplete="email" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <input name="password" type="password" autoComplete="current-password" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="flex items-center justify-between gap-4">

                                <div>
                                    <Link to="/SingUp" className='text-sm text-blue-600 hover:text-blue-500 hover:underline'>Create Account</Link>
                                </div>
                                <div>
                                    <Link to="/" className="text-sm text-blue-600 hover:text-blue-500 hover:underline">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login