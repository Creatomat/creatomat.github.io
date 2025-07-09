import React from 'react';
import './css/w3.css';
import './css/app.css';
import SplitText from './reactbits/SplitText/SplitText';
import Squares from './reactbits/Squares/Squares';
import ChromaGrid from './reactbits/ChromaGrid/ChromaGrid';
import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent';
import BlurText from './reactbits/BlurText/BlurText';
const items = [
  {

    image: "https://cdn.modrinth.com/data/MX1wPfW8/images/63943a2edf593c207f5473456f0a0d9eb3657ed7.png",

    title: "Projects",

    subtitle: "Minecraft Customization!",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg,rgb(11, 105, 255), #000)",

    url: "https://github.com/sarahjohnson"

  },
  {

    image: "https://cdn.modrinth.com/data/UXBYg86h/images/f7b627e8dad949fa723a9bf43097747dba64ad9c.png",

    title: "Archives",

    subtitle: "Open Source archives",

    borderColor: "#10B981",

    gradient: "linear-gradient(180deg,rgb(223, 69, 18), #000)",

    url: "https://linkedin.com/in/mikechen"

  },
  {

    image: "https://thumbs.dreamstime.com/b/feedback-topic-mobile-tablet-many-light-bulbs-69117421.jpg",

    title: "Feedback",

    subtitle: "No login feedback",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg,rgb(54, 237, 22), #000)",

    url: "https://github.com/sarahjohnson"

  }
];
function App() {
  return (
    <AnimatedContent distance={500} direction="vertical" reverse={false} duration={1} ease="elastic.out(0.5, 5)" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.1}>
    <div>
    <body bgcolor="black"></body>
    
    <div class="w3-display-container" style={{height: '500px'}}>
      <div class="w3-display-middle w3-bottombar w3-border-cyan" style={{position: 'absolute', zIndex: '-2', height: '100%', width: '100%'}}>
      <Squares 
      speed={0.5} 
      squareSize={90}
      direction='down' // up, down, left, right, diagonal
      borderColor='cyan' />
      </div>
      <div class="w3-animate-opacity w3-display-middle w3-text-white w3-jumbo w3-bold doto" style={{position: 'absolute'}}>
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
    <div class="raleway w3-bottombar w3-border-cyan w3-animate-zoom w3-text-white" style={{height: '100%', width: "100%", position: 'relative'}}>
    <ChromaGrid items={items} radius={400} damping={0.45} fadeOut={0} ease="power3.out" />
    <br />
    <div class="w3-display-container">
      <div class="w3-display-middle w3-large">
        <BlurText text="Where do you want to go?" delay={150} animateBy="words" direction="top" className="text-2xl mb-8"/>
      </div>
    </div>
    <br />
    </div>
    </div>
    </AnimatedContent>
  )
}
export default App;