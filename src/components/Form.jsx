import React, { useState } from 'react';

const Form = () => {
    const [touched, setTouched] = useState(false);
    const [num, setNum] = useState('Initial value');

    const handleTextChange = event => {
        // console.log('handleTextChange: event is ', event.target.value);
        setNum(event.target.value)
    }
    const isValidNumber = x => {
        let maybeNumber = x - 0;  // Alternativ: Number(x), +x
        // Ta reda på om maybeNumber är NaN
        return !isNaN(maybeNumber);
        // if( isNaN(maybeNumber) )
        //     return false;
        // else
        //     return true;
    }

    let cssClass = '';
    if( touched ) {
        if( isValidNumber(num) )
            cssClass = 'valid';
        else
            cssClass = 'invalid';
    }
    const makeHandler = (stateVarFunc) => {
        return event => stateVarFunc(event.target.value)
    }
    return (
        <div>
            <p>
                Please enter a number: <br/>
                <input type="text"
                    value={num}
                    className={cssClass}
                    onChange={event => setNum(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
                You typed: {num}
            </p>
        </div>
    )
    // Tre sätt att hantera change-händelser:
    // onChange={handleTextChange}
    // onChange={makeHandler(setNum)}
    // onChange={event => setNum(event.target.value)}
}

export default Form;
