import React, {useState} from 'react';


export const UncontrolledRating = () => {


    let [value, setValue] = useState(0)

    const onClickSetHandler = (e:any) => {
        setValue(Number(e.target.innerText))
    }

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={onClickSetHandler}>1</button>
            <Star selected={value > 1}/>
            <button onClick={onClickSetHandler}>2</button>
            <Star selected={value > 2}/>
            <button onClick={onClickSetHandler}>3</button>
            <Star selected={value > 3}/>
            <button onClick={onClickSetHandler}>4</button>
            <Star selected={value > 4}/>
            <button onClick={onClickSetHandler}>5</button>
        </div>
    )

}

type StarPropsStart = {
    selected: boolean
}

const Star = (props: StarPropsStart) => {
    console.log('Star rendering')

    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star</span>
    }


}

