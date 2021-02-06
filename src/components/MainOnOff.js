import React, { useState } from 'react'
import { Play } from 'heroicons-react'

import * as Tone from 'tone'

export default function MainOnOff() {
    const [enabled, setEnabled] = useState(false)

    const handleClick = async (e) => {
        if (!enabled) {
            await Tone.start()
            console.log('audio is ready')
        }
        return (enabled ? setEnabled(false) : setEnabled(true))
    }

    return (
        <div className={enabled ? "on-btn" : "off-btn"} onClick={handleClick}>
            <Play className='w-32 h-32' />
        </div>
    )
}