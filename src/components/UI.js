import React from 'react'
import MainOnOff from './MainOnOff'
import Trigger from './Trigger'
import EffectControl from './EffectControl'

export default function UI() {
    return (
        <div className='flex w-3/5 m-auto flex-col space-y-12'>
            <div className='h-42 flex justify-around content-center'>
                <Trigger />
                <MainOnOff />
            </div>
            <div className='flex justify-around'>
                <EffectControl name={'reverb'} />
                <EffectControl name={'filter'} />
            </div>
        </div>
    )
}