import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaDownload, FaEye } from 'react-icons/fa';
import DownloadResumeButton from './DownloadResumeButton';
import ResumePDF from '/Resume.pdf';

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
        <div className='w-screen px-15 flex bg-slate-800 border-b-2 border-white justify-between items-center sticky top-0 z-20'>
            <h1 className='w-full text-teal-50 text-3xl md:text-4xl py-3 px-[3rem]'>
                Jordan W.
            </h1>

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
                    <div>
                        <h2 className='py-8 border-white/50  '>My Work.</h2>
                        <h2 className='  border-white/50 py-8'>About Me.</h2>
                        <h2 className='py-8'>Contact Me.</h2>
                    </div>
                    <div>
                        <div className='flex flex-col items-center'>
                            {' '}
                            <a
                                href={ResumePDF}
                                target='_blank'
                                rel='noreferrer'
                                className='flex items-center'
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
                        <div className='flex px-8 p-4 my-4 w-screen justify-evenly'>
                            <a
                                href='https://www.github.com/JordanOBL'
                                target='_blank'
                            >
                                <SiGithub className='text-orange-400/75 text-4xl md:text-5xl mx-2' />
                            </a>
                            <a
                                href='https://www.linkedIn.com/in/jwilliams116'
                                target='_blank'
                            >
                                <SiLinkedin className='text-blue-400/75 text-4xl md:text-5xl mx-2' />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <ul className='hidden curspr-pointer lg:flex bg-slate-800 w-[800px] text-center justify-evenly text-white text-xl font-medium items-center'>
                <li className='text-center hover:text-teal-400 p-2'>
                    <a href='#WORK.'>Work</a>
                </li>
                <li className='text-center hover:text-teal-400 p-2'>
                    <a href='#ABOUT ME.'>About</a>
                </li>
                <li className='text-center  hover:text-teal-400 p-2'>
                    <a href='#CONTACT.'>Contact</a>
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
                            >
                                <FaDownload className='text-xs mr-2' /> Download
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a
                        href='https://www.linkedin.com/in/jwilliams116'
                        target='_blank'
                    >
                        <SiLinkedin className='text-blue-500 text-2xl' />
                    </a>
                </li>
                <li>
                    <a href='https://www.github.com/JordanOBL' target='_blank'>
                        <SiGithub className='text-orange-900 text-2xl' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
