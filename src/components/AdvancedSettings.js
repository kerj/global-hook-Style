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
        </Styled.ButtonMenu> : null
    )
}

export default AdvancedSettings
