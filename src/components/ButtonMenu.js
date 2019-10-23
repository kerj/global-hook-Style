import React from 'react'

import * as Styled from '../styles/ButtonMenu.styles'
import useGlobal from '../store';

const ButtonMenu = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <Styled.ButtonMenu>
            <button type="button" onClick={() => globalActions.increaseAmount(1)}>
                Increase add Amount
            </button>
            <button type="button" onClick={() => globalActions.decreaseAmount(1)}>
                Decrease add Amount
            </button>
            <button type='button' onClick={() => globalActions.addToCounter(parseInt(`${globalState.amount}`))}>
                {globalState.amount >= 0 ? `+${globalState.amount}` : `${globalState.amount}`}
            </button>
            <button type='button' onClick={() => globalActions.resetAmount(0)}>
                reset amount counter to 0
            </button>
        </Styled.ButtonMenu>
    )
}

export default ButtonMenu
