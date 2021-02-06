import React from 'react'
import MainOnOff from './MainOnOff'
import Trigger from './Trigger'

export default function UI() {
    return (
        <div className='w-full h-screen flex justify-around content-center'>
            <div className='w-2/5 h-42 flex flex-wrap justify-around content-center'>
                <Trigger />
                <MainOnOff />
            </div>
        </div>
    )
}