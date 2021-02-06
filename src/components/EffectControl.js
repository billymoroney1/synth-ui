import React, { useState } from 'react'

export default function EffectControl(props) {

    const [enabled, setEnabled] = useState(false)

    const handleClick = (e) => {
        if (!enabled) {
            setEnabled(true)
            props.add(props.name)
        }
        else {
            setEnabled(false)
            props.remove(props.name)
        }
    }
    return (
        <div className={enabled ? 'on-effect' : 'off-effect'} onClick={handleClick}>
            <p>{props.name}</p>
        </div>
    )
}