import React from "react";

import * as Styled from '../styles/Counter.styles'
import useGlobal from '../store';

const Counter = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <Styled.Counter className="Counter">
            <h1>
                Counter:
                {globalState.counter}
            </h1>
        </Styled.Counter>
    )
}

export default Counter;