import React from 'react'
import * as Tone from 'tone'

export default function Trigger() {

    const handleClick = (e) => {
        helloTone()
    }

    function helloTone(){
        const synth = new Tone.Synth().toDestination()
        synth.triggerAttackRelease("C4", "8n")
    }


    return (
        <div className='rounded-full w-12 h-12 border border-black bg-green-800 active:bg-green-300' onClick={handleClick}>
            
        </div>
    )
}