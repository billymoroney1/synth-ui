import React, { useState, useEffect } from 'react'
import MainOnOff from './MainOnOff'
import Trigger from './Trigger'
import EffectControl from './EffectControl'

export default function UI() {

    //keep track of effects to be passed to the synth(trigger)
    const [synth, setSynth] = useState([])

    //helper function to pass down into effects
    const effectAdd = (name) => {
        setSynth([...synth, name])
    }
    
    //fire this hook everytime synth state changes
    useEffect(() => {
        console.log(synth)
    }, [synth])

    //helper function to pass down into effects
    const effectRemove = (name) => {
        let i = synth.indexOf(name)
        synth.splice(i, 1)
        setSynth([...synth])
    }

    return (
        <div className='flex w-3/5 m-auto flex-col space-y-12'>
            <div className='h-42 flex justify-around content-center'>
                <Trigger synth={synth} />
                <MainOnOff />
            </div>
            <div className='flex justify-around'>
                <EffectControl name={'reverb'} add={effectAdd} remove={effectRemove} />
                <EffectControl name={'filter'} add={effectAdd} remove={effectRemove} />
                <EffectControl name={'phaser'} add={effectAdd} remove={effectRemove} />
                <EffectControl name={'delay'} add={effectAdd} remove={effectRemove} />
            </div>
        </div>
    )
}