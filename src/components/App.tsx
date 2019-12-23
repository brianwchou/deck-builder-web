import React from 'react';
import Container from '../Container';

const myName = "floopy poopty";

const App: React.FC = () => {
  return (
    <div>
      <Container name={myName}/>
    </div>
  );
}

export default App;
