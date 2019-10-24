import React from 'react'

import * as Styled from '../styles/ButtonMenu.styles'
import useGlobal from '../store';

const ButtonMenu = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <Styled.ButtonMenu>
            <button type="button" onClick={() => globalActions.mainmenu.increaseAmount(1)}>
                Increase add Amount
            </button>
            <button type="button" onClick={() => globalActions.mainmenu.decreaseAmount(1)}>
                Decrease add Amount
            </button>
            <button type='button' onClick={() => globalActions.mainmenu.addToCounter(parseInt(`${globalState.amount}`))}>
                {globalState.amount >= 0 ? `+${globalState.amount}` : `${globalState.amount}`}
            </button>
            <button type='button' onClick={() => globalActions.mainmenu.resetAmount(0)}>
                reset amount counter to 0
            </button>
            <button type="button" onClick={() => globalActions.mainmenu.showAdvancedSettings()}>Advanced Settings</button>
        </Styled.ButtonMenu>
    )
}

export default ButtonMenu
