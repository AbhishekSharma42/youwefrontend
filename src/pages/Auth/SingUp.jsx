import React from 'react'
import { Link } from 'react-router-dom'

function SingUp() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button type="button" className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"> Sing Up </button>

                        <div className="text-center text-sm text-grey-dark mt-4 gap-2">
                            By signing up, you agree to the
                            <Link className="underline border-grey-dark text-grey-dark text-blue-500" >Terms of Service </Link> and
                            <Link className="underline border-grey-dark text-grey-dark text-blue-500" >Privacy Policy </Link>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account? <Link to="/LogIn" className="underline text-blue-500 border-b border-blue text-blue">Log in.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUp