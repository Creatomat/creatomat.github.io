import React from 'react';
import './css/w3.css';
import './css/app.css';
import SplitText from './reactbits/SplitText/SplitText';
import Squares from './reactbits/Squares/Squares';
import ChromaGrid from './reactbits/ChromaGrid/ChromaGrid';
import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent';
import BlurText from './reactbits/BlurText/BlurText';

function App() {
    return (
        <AnimatedContent distance={500} direction="vertical" reverse={false} duration={1} ease="elastic.out(0.5, 5)" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.1}>
        <div>
            <body>
                
            </body>
        </div>
        </AnimatedContent>
    )
}
export default Projects;