import * as React from 'react';
import ResumePDF from '/Resume.pdf';
import { nounList } from '../utils/ProjectData';
import { skills } from '../utils/ResumeData';
import { FaEye, FaFileDownload } from 'react-icons/fa';

const About = () => {
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
        <div className='flex flex-col items-center bg-slate-50'>
            <div className=' m-auto mt-[5rem] tablet:mt-[5.5rem] project-shadow rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] tablet:w-[300px] tablet:h-[300px] xl:w-[400px] xl:h-[400px] bg-[url(../../public/portrait.webp)] bg-cover'></div>
            <article className='text-center text-slate-800 text-xl lg:text-2xl  mt-4 tablet:mt-8 font-bold sm:px-6 lg:px-12 tablet:px-18 xl:px-28 tracking-wide  '>
                <h2 className=' px-6 tablet:px-12 xl:px-16 xxl:px-28 leading-[3rem]'>
                    Hey! I'm Jordan, Fullstack Engineer & <br></br>{' '}
                    <span className='text-teal-500'>{noun} </span>
                    <br></br>
                    with a passion for building clean, scalable, and performant
                    web applications. In my free time, I enjoy staying up to
                    date with the latest developments in the tech industry and
                    debugging my way through the backcountry by board, feet, or
                    wheels!
                </h2>
            </article>
            <div className='w-screen flex flex-col items-center justify-center bg-slate-800 h-fit p-4 my-8'>
                <a
                    href={ResumePDF}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center'
                >
                    <button
                        className={`flex rounded-full px-4 py-2 tablet:px-8 tablet:py-4 bg-transparent project-shadow hover:project-shadow-hover hover:bg-teal-300 hover:text-slate-800 cursor-pointer text-teal-300 text-md tablet:text-lg font-medium my-2 border-2 border-teal-300`}
                    >
                        <FaEye className='hidden tablet:block tablet:text-2xl mr-2' />{' '}
                        View Full Resume (PDF)
                    </button>
                </a>
                <a
                    href={ResumePDF}
                    target='_blank'
                    download='Jordan_Williams_Resume'
                    className='flex items-center'
                >
                    <button
                        className={`flex rounded-full px-4 py-2 tablet:px-8 tablet:py-4 bg-transparent project-shadow hover:project-shadow-hover hover:bg-teal-300 hover:text-slate-800 cursor-pointer text-teal-300 text-md tablet:text-lg font-medium my-2 border-2 border-teal-300`}
                    >
                        <FaFileDownload className='hidden tablet:block tablet:text-2xl mr-2' />{' '}
                        Download Full Resume (PDF)
                    </button>
                </a>
            </div>
            <article
                id='skills'
                className='hidden tablet:flex flex-col items-center p-6 tablet:p-12'
            >
                <h2 className='text-2xl my-2  text-teal-800'>
                    Technical Skills
                </h2>
                <div className='grid grid-cols-1 xl:grid-cols-2 border-2 p-6 gap-4 rounded-2xl border-cyan-800/50'>
                    <div className='flex flex-col items-center'>
                        <h3 className=' underline my-3'>Strong:</h3>
                        <ul className='grid grid-cols-2 place-items-center gap-4 my-2 '>
                            {skills.strong.map(
                                (skill: string): JSX.Element => (
                                    <li className=' font-semibold' key={skill}>
                                        {skill}
                                    </li>
                                )
                            )}
                        </ul>{' '}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='underline my-3'>Have Experienced:</h3>{' '}
                        <ul className='grid grid-cols-2 place-items-center gap-4 my-2 '>
                            {skills.experienced.map(
                                (skill: string): JSX.Element => (
                                    <li className=' font-semibold' key={skill}>
                                        {skill}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </article>
            <article
                id='experience'
                className='flex flex-col items-center p-8 tablet:px-12 tablet:py-8'
            >
                <h2 className='text-2xl tablet:text-3xl mb-4 text-teal-800'>
                    Experience
                </h2>{' '}
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    <span className=' underline tracking-wide'>Codesmith</span>{' '}
                    | Software Engineer | Full-time (Contract) 2022
                </h3>{' '}
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    <span className=' underline tracking-wide'>radiQL</span> |
                    Software Engineer - Visual GraphQL migration aid | Open
                    Source | 2022
                </h3>{' '}
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    <span className=' underline tracking-wide'>
                        TwinsDimension.com
                    </span>{' '}
                    | Full-Stack Engineer - Ecommerce | Freelance | November
                    2021
                </h3>
            </article>
            <article className='flex  flex-col items-center p-8 tablet:p-12'>
                <h2 className='text-2xl tablet:text-3xl mb-4 text-teal-800'>
                    Education
                </h2>
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    Codesmith | Software Engineering
                </h3>
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    ITT Technical Institute | Design/ Visual Communication
                </h3>
            </article>
            <article
                className='flex flex-col items-center p-8 tablet:p-12'
                id='talks-publications'
            >
                <h2 className='text-2xl tablet:text-3xl mb-4 text-teal-800'>
                    Talks & Publications
                </h2>
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    "Testing Libraries and Frameworks" | SingleSprout Speaker
                    Series (2022)
                </h3>{' '}
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    Codesmith Lecture Series - JS Fundamentals, Async/Promises,
                    UX/UI, Databases (SQL, NoSQL)
                </h3>
                <h3 className='h3-about text-slate-800 tablet:text-xl'>
                    radiQL, the one-stop solution for setting up GraphQL on a
                    Postgres database" | Medium
                </h3>{' '}
            </article>{' '}
        </div>
    );
};

export default About;
