import React from 'react';
import s from '../UncotrolledOnOff/UncotrolledOnOff.module.css'

type OnOffPropsType = {
    IsOn: boolean
    setIsOn: (IsOn:boolean) => void
}


export const OnOff = (props:OnOffPropsType) => {

    const setLights = () => {
       return  props.IsOn ? s.green : s.red
    }

 /*   <div className={s.lights}>
        <div className={`${s.block} ${props.IsOn && s.green}`} onClick={() => {props.setIsOn(true)}}>ON</div>
        <div className={`${s.block} ${!IsOn && s.red}`} onClick={() => {setIsOn(false)}}>Off</div>
        <div className={`${s.light} ${setLights()}`}></div>
    </div>*/


    return (
        <div className={s.lights}>
            <div className={`${s.block} ${props.IsOn && s.green}`} onClick={() => {props.setIsOn(true)}}>ON</div>
            <div className={`${s.block} ${!props.IsOn && s.red}`} onClick={() => {props.setIsOn(false)}}>Off</div>
            <div className={`${s.light} ${setLights()}`}></div>

        </div>
    )
}

