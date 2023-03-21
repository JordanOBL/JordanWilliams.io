import * as React from 'react';
import { projectData, Project } from '../utils/ProjectData';
import FullPreview from '../components/FullPreview';
import ProjectThumbnails from '../components/ProjectThumbnails';

import radiqlVid1 from '../../public/Radiql/Videos/Radiql1-1.webm';

import tDImg10 from '../../public/TwinsDimension/Images/Screen Shot 2023-03-18 at 9.55.19 PM.png';
import TechIcons from '../components/TechIcons';
interface Props {
    setScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const Portfolio = ({ setScroll }: Props) => {
    const [source, setSource] = React.useState<string>(radiqlVid1);
    const [source1, setSource1] = React.useState<string>(tDImg10);
    const [fullPreviewSource, setFullPreviewSource] =
        React.useState<string>('');
    const [fullPreviewIndex, setFullPreviewIndex] = React.useState<
        number | null
    >(null);
    const handleThumbnailClick = function (
        //@ts-ignore
        event,
        index: number
    ) {
        console.log({event, index})
        if (event.target.localName === 'video') {
            if (index === 0) setSource(event.target.childNodes[0].src);
            if (index === 1) setSource1(event.target.childNodes[0].src);
        } else {
            if (index === 0) setSource(event.target.src);
            if (index === 1) setSource1(event.target.src);
        }
    };

    React.useEffect(() => {}, [fullPreviewSource]);

    const handlePreviewClick = function (e?: any, index?: any): void {
        if (e && index !== undefined) {
            setFullPreviewSource(e.target.src);
            setFullPreviewIndex(index);
            //setScroll(false);
        } else {
            setFullPreviewIndex(null);
            setFullPreviewSource('');
            //setScroll(true);
        }
    };

    return (
        <div id='WORK.' className='bg-zinc-50'>
            {projectData.map((project: Project, index: number) => (
                <div
                    key={index}
                    className='p-8 md:p-14 lg:p-20 grid grid-cols-1 xl:grid-cols-[_1fr_1fr] min-h-screen w-screen place-items-center even:text-white odd:text-slate-800 even:bg-slate-800 odd:bg-slate-50'
                >
                    {fullPreviewSource && index === fullPreviewIndex && (
                        <FullPreview
                            handlePreviewClick={handlePreviewClick}
                            fullPreviewSource={fullPreviewSource}
                        />
                    )}

                    <article>
                        <h2 className='text-5xl md:text-5xl lg:text-6xl text-center my-4'>
                            {project.title}
                        </h2>
                        <h3 className='text-xl text-center font-medium'>
                            {project.description}
                        </h3>
                        <div className='flex w-full justify-evenly my-6 px-6'>
                            <TechIcons
                                techArray={project.technologies}
                                fontSize={
                                    'text-2xl md:text-3xl lg:text-4xl font-bold '
                                }
                            />
                        </div>
                        <div className=' my-10 md:hidden'>
                            {project
                                .media![0].split('.')
                                .includes('webm' || 'mp4') ? (
                                <video autoPlay loop muted playsInline>
                                    <source src={source} type='video/webm' />
                                    <source
                                        src={source.replace('webm', 'mp4')}
                                        type='video/mp4'
                                    />
                                </video>
                            ) : (
                                <img
                                    width={'400px'}
                                    src={index === 0 ? source : source1}
                                    onClick={(e) =>
                                        handlePreviewClick(e, index)
                                    }
                                />
                            )}
                        </div>
                        <div className='flex flex-col md:flex-row flex-wrap w-full place-content-center my-2 lg:my-12 text-2xl lg:text-3xl '>
                            <button className='m-2 project-shadow hover:project-hovershadow text-center bg-teal-400 hover:bg-teal-300 text-slate-800 font-medium w-[200px] md:w-fit px-6 py-2 rounded-2xl'>
                                <a href={project.github} target='_blank'>
                                    GitHub
                                </a>
                            </button>
                            <button className='m-2 project-shadow hover:project-hovershadow text-center bg-teal-400 hover:bg-teal-300 text-slate-800 font-medium w-[200px] md:w-fit px-6 py-2 rounded-2xl'>
                                <a href={project.website} target='_blank'>
                                    Website
                                </a>
                            </button>
                            {project.article && (
                                <button className='m-2 project-shadow hover:project-hovershadow text-center bg-teal-400 hover:bg-teal-300 text-slate-800 font-medium  w-[200px] md:w-fit px-6 py-2 rounded-2xl'>
                                    <a href={project.article} target='_blank'>
                                        Medium
                                    </a>
                                </button>
                            )}
                        </div>
                    </article>

                    <div className='hidden md:flex flex-col place-items-center '>
                        <div
                            className={`flex justify-center h-[300px] md:h-[400px] lg:h-[500px] w-fit p-4`}
                        >
                            <div className='flex justify-center items-center '>
                                {index === 0 ? (
                                    source
                                        .split('.')
                                        .includes('webm' || 'mp4') ? (
                                        <video
                                            className='h-[300px] md:h-[400px] lg:h-[500px] max-w-[100%] cursor-pointer'
                                            onClick={(e) =>
                                                handlePreviewClick(e, index)
                                            }
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src={source}
                                                type='video/webm'
                                            />
                                            <source
                                                src={source.replace(
                                                    'webm',
                                                    'mp4'
                                                )}
                                                type='video/mp4'
                                            />
                                        </video>
                                    ) : (
                                        <img
                                            alt='expanded image'
                                            className='h-[300px] md:h-[400px] lg:h-[500px] max-w-[100%] cursor-pointer'
                                            src={source}
                                            onClick={(e) =>
                                                handlePreviewClick(e, index)
                                            }
                                        />
                                    )
                                ) : source1
                                      .split('.')
                                      .includes('webm' || 'mp4') ? (
                                    <video
                                        className='h-[300px] md:h-[400px] lg:h-[500px] max-w-[100%] cursor-pointer'
                                        onClick={(e) =>
                                            handlePreviewClick(e, index)
                                        }
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source
                                            src={source1}
                                            type='video/webm'
                                        />
                                        <source
                                            src={source1.replace('webm', 'mp4')}
                                            type='video/mp4'
                                        />
                                    </video>
                                ) : (
                                    <img
                                        alt='expanded image'
                                        className='h-[300px] md:h-[400px] lg:h-[500px] max-w-[100%] cursor-pointer'
                                        src={source1}
                                        onClick={(e) =>
                                            handlePreviewClick(e, index)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <ProjectThumbnails
                            mediaArray={project.media!}
                            index={index}
                            handleThumbnailClick={handleThumbnailClick}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
