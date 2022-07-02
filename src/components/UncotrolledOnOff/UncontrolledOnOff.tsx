import React, {useState} from 'react';
import s from './UncotrolledOnOff.module.css'


export const UncontrolledOnOff = () => {
    let [IsOn, setIsOn] = useState(false)



    return (
        <div className={s.lights}>
            <div className={`${s.block} ${IsOn && s.green}`} onClick={() => {setIsOn(true)}}>ON</div>
            <div className={`${s.block} ${!IsOn && s.red}`} onClick={() => {setIsOn(false)}}>Off</div>
            {IsOn && <div className={`${s.light} ${s.green}`}></div>}
            {!IsOn && <div className={`${s.light} ${s.red}`}></div>}

        </div>
    )
}

