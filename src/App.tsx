import React from 'react';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </>
  );
};

export default App;
