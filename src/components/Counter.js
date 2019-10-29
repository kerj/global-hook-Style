import React from "react";

import * as Styled from '../styles/Counter.styles'
import useGlobal from '../store';

const Counter = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <Styled.Counter>
            <h1>
                Counter:
                {globalState.counter}
            </h1>
            {
            globalState.poison ?
             <h1>
                Poison Counter: 
                {globalState.poisonCounter}
            </h1> : null
            }
        </Styled.Counter>
    )
}

export default Counter;