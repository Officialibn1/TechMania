import '../components/styles/About.css'
import AboutBanner from "../components/AboutBanner";
import AboutText from '../components/AboutText';

const About = () => {
    return (
        <div className='about'>
            <AboutBanner />
            <AboutText />
        </div>
    );
}

export default About;
