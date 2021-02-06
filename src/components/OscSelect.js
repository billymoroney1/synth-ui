import React, {useState} from 'react'

export default function OscSelect() {
    // need buttons to enable oscillators
    // drop down menu to pick osc type
    // drop down menu to pick pitch
    // drop down menu to pick octave
    // send this data to global 'synth' as an object?
    return(
        <div>
            <select name='osc-type'>
                <option value='sine'>sine</option>
                <option value='triangle'>triangle</option>
                <option value='square'>square</option>
                <option value='sawtooth'>sawtooth</option>
            </select>
        </div>
    )
}