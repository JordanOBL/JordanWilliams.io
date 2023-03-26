import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaDownload, FaEye } from 'react-icons/fa';
import DownloadResumeButton from './DownloadResumeButton';
import ResumePDF from '/Resume.pdf';
//react-scroll
import * as Scroll from 'react-scroll';

interface Props {
    setScroll: ({}: any) => void;
}

const Nav = ({ setScroll }: Props) => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    const handleOpenMenu = function (): void {
        setOpenMenu((openMenu) => !openMenu);
        setScroll((prev: boolean) => !prev);
    };
    const handleCloseMenu = function (): void {
        setOpenMenu((openMenu) => !openMenu);
        setScroll((prev: boolean) => !prev);
    };
    return (
        <div className='w-screen px-15 lg:pl-[5rem] flex bg-slate-800 border-b-2 border-white justify-between items-center sticky top-0 z-20'>
            <Scroll.Link
                activeClass='active'
                to='HOME.'
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <h1 className='w-full text-teal-50 text-3xl md:text-4xl py-3 px-[3rem] cursor-pointer'>
                    Jordan W.
                </h1>
            </Scroll.Link>

            {openMenu === false ? (
                <GiHamburgerMenu
                    onClick={() => handleOpenMenu()}
                    className=' lg:hidden text-white text-4xl cursor-pointer mr-[3rem]'
                />
            ) : (
                <div className='border-2 border-white absolute flex w-screen h-screen top-0 text-white font-bold justify-center text-4xl bg-slate-800 flex-col items-center text-center'>
                    <CgClose
                        onClick={() => handleCloseMenu()}
                        className='text-white text-4xl cursor-pointer absolute right-10 top-5'
                    />
                    <div onClick={() => handleCloseMenu()}>
                        <Scroll.Link
                            activeClass='active'
                            to='WORK.'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}
                            onClick={() => handleCloseMenu()}
                        >
                            <h2 className='py-8 border-white/50 cursor-pointer '>
                                Work.
                            </h2>{' '}
                        </Scroll.Link>
                        <Scroll.Link
                            activeClass='active'
                            to='ABOUT.'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}
                            onClick={() => handleCloseMenu()}
                        >
                            <h2 className=' border-white/50 py-8 cursor-pointer'>
                                About.
                            </h2>
                        </Scroll.Link>
                        <Scroll.Link
                            activeClass='active'
                            to='CONTACT.'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}
                            onClick={() => handleCloseMenu()}
                        >
                            <h2 className='py-8 cursor-pointer'>Contact.</h2>
                        </Scroll.Link>
                    </div>
                    <div onClick={() => handleCloseMenu()}>
                        <div className='flex flex-col items-center'>
                            {' '}
                            <a
                                href={ResumePDF}
                                target='_blank'
                                rel='noreferrer'
                                className='flex items-center'
                                aria-label='Click here to view Jordans resume as PDF'
                            >
                                <button
                                    className={`flex rounded-full px-8 py-4 bg-transparent project-shadow border-2 border-teal-500 cursor-pointer text-white text-lg font-medium my-2`}
                                >
                                    <FaEye className='hidden md:block md:text-2xl mr-2' />{' '}
                                    View Resume (PDF)
                                </button>
                            </a>
                            <DownloadResumeButton
                                bg='bg-transparent'
                                fontSize='medium'
                                textSize='text-lg md:text-xl'
                                border='border-2 border-teal-500'
                            />
                        </div>
                        <div className='flex px-8 p-4 my-4 w-screen justify-center'>
                            <a
                                href='https://www.github.com/JordanOBL'
                                target='_blank'
                                aria-label='Click here to visit Jordans Github Profile'
                            >
                                <SiGithub className='text-orange-400/75 text-4xl md:text-5xl mx-2' />
                            </a>
                            <a
                                href='https://www.linkedIn.com/in/jwilliams116'
                                target='_blank'
                                aria-label='Click here to visit Jordans LinkedIn profile'
                            >
                                <SiLinkedin className='text-blue-400/75 text-4xl md:text-5xl mx-2' />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <ul className='hidden curspr-pointer lg:flex bg-slate-800 w-[800px] text-center justify-evenly text-white text-xl font-medium items-center'>
                <li className='text-center hover:text-teal-400 cursor-pointer p-2'>
                    <Scroll.Link
                        activeClass='active'
                        to='WORK.'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Work
                    </Scroll.Link>
                </li>
                <li className='text-center hover:text-teal-400 cursor-pointer p-2'>
                    <Scroll.Link
                        activeClass='active'
                        to='ABOUT.'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        About
                    </Scroll.Link>
                </li>
                <li className='text-center  hover:text-teal-400 cursor-pointer p-2'>
                    <Scroll.Link
                        activeClass='active'
                        to='CONTACT.'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Contact
                    </Scroll.Link>
                </li>
                <li className='group relative p-2'>
                    <p className=' cursor-pointer text-center hover:text-teal-500 p-2'>
                        Resume
                    </p>
                    <ul className=' absolute bg-slate-800 cursor-pointer group-hover:flex justify-center hidden  flex-col'>
                        <li className='p-2 flex items-center mt-[.7rem] border-2 border-white hover:bg-teal-400 hover:text-slate-800'>
                            <a
                                href={ResumePDF}
                                target='_blank'
                                rel='noreferrer'
                                className='flex items-center'
                                aria-label='Click here to viewm Jordans resume as a PDF'
                            >
                                <FaEye className='text-xs mr-2' /> View
                            </a>
                        </li>
                        <li className='p-2  border-2 border-white text-center hover:bg-teal-400 hover:text-slate-800'>
                            <a
                                href={ResumePDF}
                                download='Jordan_Williams_Resume'
                                target='_blank'
                                className='flex items-center'
                                aria-label='Click here to download Jordans resume'
                            >
                                <FaDownload className='text-xs mr-2' /> Download
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='p-2'>
                    <a
                        href='https://www.linkedin.com/in/jwilliams116'
                        target='_blank'
                        aria-label='Click here to visit Jordans LinkedIn profile'
                    >
                        <SiLinkedin className='text-blue-500 text-2xl' />
                    </a>
                </li>
                <li className='p-2'>
                    <a
                        href='https://www.github.com/JordanOBL'
                        target='_blank'
                        aria-label='Click here to visit jordans Github profile'
                    >
                        <SiGithub className='text-orange-900 text-2xl' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
