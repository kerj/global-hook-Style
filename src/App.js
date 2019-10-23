import React from 'react';
import * as Styled from './styles/App.styles';
import Counter from './components/Counter';
import ButtonMenu from './components/ButtonMenu';

function App() {
  return (
    <>
    <Styled.App>
      <Counter/>
      <ButtonMenu/>
    </Styled.App>
    </>
  );
}

export default App;
