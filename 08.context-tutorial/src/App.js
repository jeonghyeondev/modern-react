import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

// 주석주석주석
const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
