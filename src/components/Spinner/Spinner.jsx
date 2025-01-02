import React from 'react'
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
    return (
        <div>
            <div className='w-fit mx-auto '>
                <ImSpinner9 size={32} className='animate-spin ' />
            </div>
        </div>
    )
}

export default Spinner
