import React, { useState } from 'react'
import * as Tone from 'tone'

export default function Trigger(props) {

    const [active, setActive] = useState(false)

    const handleClick = (e) => {
        if (!active){
            setActive(true)
            setTimeout(() => {setActive(false)}, 200)
            patch()
        }
    }


    function patch(){
        const synth = new Tone.Synth()
        if (props.synth.length === 0){
            synth.connect(Tone.getDestination())
        }
        if (props.synth.includes('reverb')){
            console.log('contains reverb!')
            const reverb = new Tone.Reverb("2").toDestination()
            synth.connect(reverb)
        }
        if (props.synth.includes('filter')){
            const filter = new Tone.OnePoleFilter('400', 'lowpass').toDestination()
            synth.connect(filter)
        }
        synth.triggerAttackRelease("C4", "8n")
    }


    return (
        <div className={active ? 'act-trig' : 'inac-trig'} onClick={handleClick}>
            
        </div>
    )
}