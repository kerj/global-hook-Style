import React from 'react';
import * as Styled from './styles/App.styles';
import Counter from './components/Counter';
import ButtonMenu from './components/ButtonMenu';
import AdvancedSettings from './components/AdvancedSettings';

function App() {
  return (
    <>
      <Styled.App>
        <Counter />
        <ButtonMenu />
      </Styled.App>
      <AdvancedSettings />
    </>
  );
}

export default App;
