import React, { useState, useEffect } from 'react'
import MainOnOff from './MainOnOff'
import Trigger from './Trigger'
import EffectControl from './EffectControl'

export default function UI() {

    const [synth, setSynth] = useState([])

    const effectAdd = (name) => {
        setSynth([...synth, name])
    }

    useEffect(() => {
        console.log(synth)
    }, [synth])

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
            </div>
        </div>
    )
}