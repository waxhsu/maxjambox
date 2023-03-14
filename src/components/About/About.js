import './About.css';
// import maxDance from '../../images/justedebout.png';
// import terrarium from '../../images/terradventure.jpg';
import placeholder1 from '../../images/placeholder1.png';
import placeholder3 from '../../images/placeholder3.gif';

function About() {
    return (
        <div className="About">
            <div className="header">
                <h1>About Me</h1>
            </div>

            <div className='aboutGrid'>
                <div className='aboutImages'>
                    {/* <img src={maxDance} /> */}
                    {/* <img src={terrarium} /> */}
                    <img className='aboutImg' src={placeholder1} />
                    <img className='aboutImg' src={placeholder3} />
                

                </div>
                <div className='containerText'>
                <div className='aboutText'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus leo. Sed convallis, magna sed consectetur auctor, massa nisi finibus justo, eu consequat ante dui sit amet magna. Nullam in fringilla arcu. Duis commodo a est quis aliquet. Nunc blandit est eu mauris consectetur viverra eget eu metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus leo. Sed convallis, magna sed consectetur auctor, massa nisi finibus justo, eu consequat ante dui sit amet magna. Nullam in fringilla arcu. Duis commodo a est quis aliquet. Nunc blandit est eu mauris consectetur viverra eget eu metus.</p>
                </div>
                </div>


                {/* <div className='aboutText'>
                    {ABOUT.map((about) => {
                        return (
                            <div>
                                <p>{about.desc}</p>
                            </div>
                        );
                        })}
                    </div> */}




            </div>
        </div>
    );
}

export default About