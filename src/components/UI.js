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
    //manage envelope
    const [envelope, setEnvelope] = useState([0.1, 0.2, 1.0, 0.8])

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

    //******** */
    //ENVELOPE HELPER FUNCTIONS
    /********** */

    const adsrChange = (e) => {
        //copy of state array
        let env = envelope
        if (e.target.name === 'attack'){
            env[0] = e.target.value
        } else if (e.target.name === 'decay'){
            env[1] = e.target.value
        } else if (e.target.name === 'sustain'){
            env[2] = e.target.value
        } else if (e.target.name === 'release'){
            env[3] = e.target.value
        }
        
        console.log(env)
        setEnvelope(env)
    }

    return (
        <div className='flex w-3/5 m-auto flex-col space-y-12'>
            <div className='h-42 flex justify-around content-center'>
                <Trigger synth={synth} wave={wave} envelope={envelope}/>
                <WaveSelect handleChange={waveChange} />
                <Envelope adsrChange={adsrChange} env={envelope} />
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