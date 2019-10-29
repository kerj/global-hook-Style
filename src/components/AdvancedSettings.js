import React, { useEffect } from 'react'

import useGlobal from '../store'
import * as Styled from '../styles/ButtonMenu.styles';

const AdvancedSettings = () => {
    const [globalState, globalActions] = useGlobal();
    
    useEffect(() => {
    
    },[globalState.setting]) 

    return (
        globalState.setting ?
         <Styled.ButtonMenu>
             <h1>Settings</h1>
             <h3>Show Poison Counter:</h3>
             <button onClick={() => {globalActions.mainmenu.activatePoisonCount()}}></button>
        </Styled.ButtonMenu> : null
    )
}

export default AdvancedSettings
