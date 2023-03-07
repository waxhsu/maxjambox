import './About.css';
import maxDance from '../../images/justedebout.png';
import terrarium from '../../images/terradventure.jpg';

function About() {
    return (
        <div className="About">
            <div className="header">
                <h1>About Me</h1>
            </div>

            <div className="aboutGrid">
                    <div className="aboutText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus leo. Sed convallis, magna sed consectetur auctor, massa nisi finibus justo, eu consequat ante dui sit amet magna. Nullam in fringilla arcu. Duis commodo a est quis aliquet. Nunc blandit est eu mauris consectetur viverra eget eu metus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus leo. Sed convallis, magna sed consectetur auctor, massa nisi finibus justo, eu consequat ante dui sit amet magna. Nullam in fringilla arcu. Duis commodo a est quis aliquet. Nunc blandit est eu mauris consectetur viverra eget eu metus.</p>
                    </div>

                    {/* <div className='aboutImages'> */}
                        <img src={maxDance} />
                        <img src={terrarium} />
                    {/* </div> */}
            </div>
        </div>
    );
}

export default About