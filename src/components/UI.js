import React, { useState, useEffect } from 'react'
import MainOnOff from './MainOnOff'
import Trigger from './Trigger'
import EffectControl from './EffectControl'
import WaveSelect from './WaveSelect'
import Envelope from './Envelope'

export default function UI() {

    //keep track of effects to be passed to the synth(trigger)
    const [synth, setSynth] = useState([])
    //keep track of waveform
    const [wave, setWave] = useState("sine")

    //use drop down menu to change waveform
    const waveChange = (e) => {
        setWave(e.target.value)
    }

    //helper function to pass down into effects
    const effectAdd = (name) => {
        setSynth([...synth, name])
    }

    //helper function to pass down into effects
    const effectRemove = (name) => {
        let i = synth.indexOf(name)
        synth.splice(i, 1)
        setSynth([...synth])
    }

    return (
        <div className='flex w-3/5 m-auto flex-col space-y-12'>
            <div className='h-42 flex justify-around content-center'>
                <Trigger synth={synth} wave={wave} />
                <WaveSelect handleChange={waveChange} />
                <Envelope />
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