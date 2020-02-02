import React, { useState, useEffect } from 'react'

//takes array of items and duration as props
//returns a span that cycles through provided array

const Ticker = (props) => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        setTimeout(list => {
            if (num < list.length - 1) {
                setNum(num + 1)
            } else {
                setNum(0)
            }
        }, props.duration, props.items)
    })



    return (
        <span className='ticker' key={num}>{props.items[num]}</span>
    )
}

export default Ticker
