import React, { useState, useEffect } from 'react'

//challenge here is learning how to input decimals in react, finished product could be like ableton where you can either type in value or use slider

export default function Envelope(props) {

    const [envelope, setEnvelope] = useState(props.env)

    return (
        <div>
            <div>Envelope</div>
            {/* <form>
                <label for='attack'>Attack</label>
                <input type='number' id='attack' name='attack' min='0' max='5' step="0.01" />
                <label for='decay'>decay</label>
                <input type='number' id='decay' name='decay' min='0' max='5' step="0.01" />
                <label for='sustain'>sustain</label>
                <input type='number' id='sustain' name='sustain' min='0' max='5' step="0.01" />
                <label for='release'>release</label>
                <input type='number' id='release' name='release' min='0' max='5' step="0.01" />
            </form> */}
            <label for='attack'>attack</label>
            <input onChange={props.adsrChange} type='range' value={envelope[0]} id='attack' name='attack' min='0' max='2' step='0.1' />
            <label for='decay'>decay</label>
            <input onChange={props.adsrChange} type='range' value={envelope[1]} id='decay' name='decay' min='0' max='2' step='0.1' />
            <label for='sustain'>sustain</label>
            <input onChange={props.adsrChange} type='range' value={envelope[2]} id='sustain' name='sustain' min='0' max='1' step='0.1' />
            <label for='release'>release</label>
            <input onChange={props.adsrChange} type='range' value={envelope[3]} id='release' name='release' min='0' max='5' step='0.1' />
        </div>
    )
}