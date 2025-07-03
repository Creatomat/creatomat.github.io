import React from 'react';
import './css/w3.css';
import SplitText from "./reactbits/SplitText/SplitText";
import Squares from './reactbits/Squares/Squares';
import LetterGlitch from './reactbits/LetterGlitch/LetterGlitch';
function App() {
  return (
    <><body bgcolor="black"></body>
    
    <div class="w3-display-container" style={{height: '500px'}}>
      <div class="w3-display-left w3-bottombar w3-border-cyan" style={{position: 'absolute', zIndex: '-2', height: '100%'}}>
      <LetterGlitch
      glitchSpeed={0} />
      </div>
      <div class="w3-display-right w3-bottombar w3-border-cyan" style={{position: 'absolute', zIndex: '-2', height: '100%'}}>
      <LetterGlitch
      glitchSpeed={0} />
      </div>
      <div class="w3-display-middle w3-text-white w3-jumbo w3-bold" style={{position: 'absolute'}}>
      <SplitText
      text="Cre8to Team"
      className="text-2xl font-semibold text-center"
      delay={300}
      duration={0.6}
      ease="elastic.out(1, 0.3)"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center" />
      </div>
      <div class="w3-display-middle w3-jumbo w3-border-left w3-border-right w3-border-cyan w3-bottombar w3-black" style={{position: 'absolute', zIndex: '-1', height: '100%'}}>
      <Squares 
      speed={0.5} 
      squareSize={80}
      direction='up' // up, down, left, right, diagonal
      borderColor='cyan' />
      </div>
    </div>  
    </>
  )
}
export default App;