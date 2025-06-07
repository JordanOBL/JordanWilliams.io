import ContactButton from '../components/ContactButton';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
    return (
        <div className='flex flex-col items-center min-h-screen justify-center p-8 md:p-12 bg-slate-800'>
            <h2 className='text-white text-4xl lg:text-5xl text-center p-8 lg:mb-4 tracking-normal leading-[4rem]'>
                THAT'S IT!<br></br>NOW IT'S YOUR TURN TO SAY HI!
            </h2>
            <ContactButton
                bg='bg-teal-500'
                textSize='text-xl tablet:text-2xl xl:text-3xl'
            />
            <div className='flex px-8 p-4 my-4 lg:my-8 w-fit justify-evenly'>
                <a
                    href='https://www.github.com/JordanOBL'
                    target='_blank'
                    aria-label='Click here to visit jordans Github profile'
                >
                    <SiGithub className='text-orange-400/75 text-4xl md:text-5xl mx-2' />
                </a>
                <a
                    href='https://www.linkedIn.com/in/jordanwilliamsio'
                    target='_blank'
                    aria-label='Click here to visit Jordans LinkedIn profile'
                >
                    <SiLinkedin className='text-blue-400/75 text-4xl md:text-5xl mx-2' />
                </a>
            </div>
        </div>
    );
};

export default Contact;
