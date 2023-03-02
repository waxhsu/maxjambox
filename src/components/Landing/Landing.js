import './Landing.css';
import Slider from 'react-animated-slider';
import { CONTENT } from './Content.js';
import 'react-animated-slider/build/horizontal.css';

function Landing(){
    return (
        <div className="Landing">
            <div className="myName">
                Max Hsu
            </div>
        


            <Slider
        className='slider'
        autoplay={3000}
        previousButton={null}
        nextButton={null}
      >
        {CONTENT.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: `contain`,
            }}
          ></div>
        ))}
      </Slider>

        
        {/* ADD SLIDER FEATURE FROM SLIDING.JS */}



        </div>
    )
}

export default Landing;