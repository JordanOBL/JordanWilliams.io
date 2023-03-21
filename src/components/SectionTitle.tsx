import React from 'react';

interface Props {
    title: string;
    nav?: boolean;
}

const SectionTitle = ({ title, nav }: Props) => {
    return (
        <h2
            id={title}
            className={`project-shadow text-left text-md lg:text-xl sticky font-medium rounded-r-3xl ${
                nav ? 'top-0 border-b-2 w-fit' : 'w-fit top-[65px] '
            } bg-teal-700/95 text-white h-fit py-4 pr-3 pl-1 lg:px-[3rem]  z-10`}
        >
            {title}
        </h2>
    );
};

export default SectionTitle;
