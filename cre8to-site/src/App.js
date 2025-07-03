import React from 'react';
import SplitText from "./reactbits/SplitText/SplitText";
import Squares from './reactbits/Squares/Squares';

function App() {
  return (
    <body bgcolor="silver">
    <Squares 
    speed={0.7} 
    squareSize={30}
    direction='diagonal' // up, down, left, right, diagonal
    borderColor='#00f'
    hoverFillColor='#0f0'
    />
    <h1>
        <SplitText
          text="Welcome to Cre8to-Team"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          />
      </h1>
      </body>
  )
}
export default App;