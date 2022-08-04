import './index.scss'
import AnimatedLeters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {   
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a software engineer who is passionate about clean and efficient design. My skill set is built around collaboration whether that be directing a team or boosting an idea to its full potential. As an engineer, I am determined to execute and enhance the customer's experience. I am flexible and centralize new information that will make me a strengthened developer.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#DD0031" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About