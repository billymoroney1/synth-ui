import React, { useState } from 'react'
import * as Tone from 'tone'

export default function Trigger() {

    const [active, setActive] = useState(false)

    const handleClick = (e) => {
        if (!active){
            setActive(true)
            setTimeout(() => {setActive(false)}, 200)
            helloTone()
        }
    }

    function helloTone(){
        const synth = new Tone.Synth().toDestination()
        synth.triggerAttackRelease("C4", "8n")
    }


    return (
        <div className={active ? 'act-trig' : 'inac-trig'} onClick={handleClick}>
            
        </div>
    )
}