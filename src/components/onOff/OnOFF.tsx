import React from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    isOn: boolean
}

export const OnOff = (props: OnOffType) => {
    return (
        <div className={s.lights}>
            <div className={`${s.block} ${props.isOn && s.green}`}>ON</div>
            <div className={`${s.block} ${!props.isOn && s.red}`}>Off</div>
            {props.isOn && <div className={`${s.light} ${s.green}`}></div>}
            {!props.isOn && <div className={`${s.light} ${s.red}`}></div>}

        </div>
    )
}


