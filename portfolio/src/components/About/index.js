import './index.scss'
import AnimatedLeters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a software engineer who is passionate about clean and efficient design. My skill set is built around collaboration whether that be directing a team or boosting an idea to its full potential. As an engineer, I am determined to execute and enhance the customer's experience. I am flexible and centralize new information that will make me a strengthened developer.</p>
            </div>
        </div>
    )
}

export default About