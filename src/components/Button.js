import React, { useState } from 'react'
import { Play } from 'heroicons-react'

export default function Button() {
    const [enabled, setEnabled] = useState(false)

    const handleClick = (e) => {
        return (enabled ? setEnabled(false) : setEnabled(true))
    }

    return (
        <div className={enabled ? "on-btn" : "off-btn"} onClick={handleClick}>
            <Play className='w-32 h-32' />
        </div>
    )
}