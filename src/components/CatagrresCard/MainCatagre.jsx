import React from 'react'
import CatagresCard from './CatagresCard'
import CatagrieTitle from './CatagrieTitle'

function MainCatagre() {
    return (
        <>
            <div>
                <div className='pt-5 md:pt-14'>
                    <CatagrieTitle />
                </div>
                <div>
                    <CatagresCard />
                </div>
            </div>
        </>
    )
}

export default MainCatagre