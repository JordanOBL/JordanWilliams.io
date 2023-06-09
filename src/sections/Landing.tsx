import * as React from 'react';
import Portrait from '../../public/portrait.webp';
import { nounList } from '../utils/ProjectData';

import ContactButton from '../components/ContactButton';

const Landing = ({ fullName }: { fullName: { [key: string]: string } }) => {
    //state
    const [noun, setNoun] = React.useState<string>('');
    const [nounNumber, setNounNumber] = React.useState<number>(0);
    const [nounLetter, setNounLetter] = React.useState<number>(0);
    const [deleteType, setDeleteType] = React.useState<boolean>(false);

    //typewriter function
    React.useEffect(() => {
        if (deleteType === false) {
            if (noun === nounList[nounNumber]) {
                let timer = setTimeout(() => setDeleteType(true), 2000);
                return () => {
                    clearTimeout(timer);
                };
            } else {
                let timer = setTimeout(() => {
                    setNoun(
                        (prevNoun) =>
                            prevNoun + nounList[nounNumber][nounLetter]
                    );
                    setNounLetter((prevLetter) => prevLetter + 1);
                }, 100);
                return () => {
                    clearTimeout(timer);
                };
            }
        } else {
            if (noun === '' && deleteType === true) {
                setNounNumber((prev) => prev + 1);
                setDeleteType((prev) => !prev);
            } else {
                let timer = setTimeout(() => {
                    setNoun((prevNoun) => prevNoun.slice(0, noun.length - 1));
                    setNounLetter((prev) => prev - 1);
                    if (
                        nounNumber === nounList.length - 1 &&
                        noun.length === 1 &&
                        deleteType === true
                    ) {
                        setNounNumber(0);
                        setDeleteType((prev) => !prev);
                    }
                }, 100);
                return () => {
                    clearTimeout(timer);
                };
            }
        }
    }, [noun, deleteType]);

    return (
        <div className='flex flex-col items-center min-h-screen w-screen bg-slate-800'>
            <div className='portrait-clip '>
                <img alt='portrait of Jordan' width={'500px'} src={Portrait} />
            </div>
            <div className='flex flex-col p-2 items-center'>
                <h1 className='text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl tracking-normal lg:mb-3'>
                    {fullName.first + ' ' + fullName.last}
                </h1>
                <h2 className='sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-teal-200 tracking-tight'>
                    Full-Stack Engineer
                </h2>{' '}
                <h3 className='text-lg md:text-2xl flex m-1.5  text-teal-500/50 min-h-[40px] font-bold justify-center items-center'>
                    {noun}
                    <div className='animate-[cursorBlink_1s_steps(2)_infinite] bg-red-600 bg-opacity-100 w-2 md:w-4 h-6 md:h-8 font-bold'></div>{' '}
                </h3>
            </div>
            <ContactButton bg={'bg-teal-400'} textSize='text-sm lg:text-lg tracking-wide'/>
        </div>
    );
};

export default Landing;
