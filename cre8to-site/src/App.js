import React from 'react';
import './css/w3.css';
import SplitText from './reactbits/SplitText/SplitText';
import Squares from './reactbits/Squares/Squares';
import ChromaGrid from './reactbits/ChromaGrid/ChromaGrid';
const items = [
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=2",

    title: "Mike Chen",

    subtitle: "Backend Engineer",

    handle: "@mikechen",

    borderColor: "#10B981",

    gradient: "linear-gradient(180deg, #10B981, #000)",

    url: "https://linkedin.com/in/mikechen"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://i.pravatar.cc/300?img=1",

    title: "Sarah Johnson",

    subtitle: "Frontend Developer",

    handle: "@sarahjohnson",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg, #3B82F6, #000)",

    url: "https://github.com/sarahjohnson"

  }
];
function App() {
  return (
    <><body bgcolor="black"></body>
    
    <div class="w3-display-container" style={{height: '500px'}}>
      <div class="w3-display-middle w3-bottombar w3-border-cyan" style={{position: 'absolute', zIndex: '-2', height: '100%', width: '100%'}}>
      <Squares 
      speed={0.5} 
      squareSize={90}
      direction='down' // up, down, left, right, diagonal
      borderColor='cyan' />
      </div>
      <div class="w3-display-middle w3-text-white w3-jumbo w3-bold" style={{position: 'absolute'}}>
      <SplitText
      text="Cre8to Team"
      className="text-2xl font-semibold text-center"
      delay={300}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center" />
      </div>
    </div>  
    <div style={{height: '100%', width: "100%", position: 'relative'}}>
    <ChromaGrid 

    items={items}

    radius={300}

    damping={0.45}

    fadeOut={0.6}

    ease="power3.out" />
    </div>
    
    </>
  )
}
export default App;