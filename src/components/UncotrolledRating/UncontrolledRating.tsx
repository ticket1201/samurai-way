import React, {useState} from 'react';


export const UncontrolledRating = () => {


    let [value, setValue] = useState(0)

    const onClickSetHandler = (e: any) => {
        setValue(Number(e.target.innerText))
    }

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )

}

type StarPropsStart = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StarPropsStart) => {
    console.log('Star rendering')
    return <span onClick={() => props.setValue()}>{props.selected ? <b>Star </b> : 'Star '}</span>
}

