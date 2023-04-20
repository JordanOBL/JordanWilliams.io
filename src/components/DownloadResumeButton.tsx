import ResumePDF from '/Jordan_Williams_Resume_Full_Stack_Developer.pdf';
interface Props {
    bg: string;
    textSize?: string;
    fontSize?: string;
    border?: string;
}
const DownloadResumeButton = ({ bg, textSize, fontSize, border }: Props) => {
    return (
        <a
            href={ResumePDF}
            download='Jordan Williams Resume'
            target='_blank'
            aria-label="Click here to download Jordan Williams' Resume"
        >
            <button
                className={`rounded-full px-4 py-2 tablet:px-8 tablet:py-4 ${bg} project-shadow hover:project-shadow-hover hover:bg-teal-400 cursor-pointer text-white ${textSize} font-${fontSize} ${border}`}
            >
                Download Resume (PDF)
            </button>
        </a>
    );
};

export default DownloadResumeButton;
