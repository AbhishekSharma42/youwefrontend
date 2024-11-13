import React, { useContext } from 'react'
import { Context } from '../Utils/Context'

function ContactUs() {

    const {contactUsHading } = useContext(Context);
    return (
        <>

            <div className="bg-amber-50 py-0 my-0 ">
                <div id="Contact" className="mx-auto flex flex-col min-h-screen justify-center items-center">

                    <h1 className="text-3xl font-bold leading-tight text-yellow-900 text-center">{contactUsHading}</h1>

                    <form className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className=" border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="number"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Number"
                                required
                                maxLength={12}
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                rows="4"
                                cols='20'
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-amber-950 text-amber-50 mx-auto mt-4 p-2 w-48 hover:bg-red-500">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ContactUs
