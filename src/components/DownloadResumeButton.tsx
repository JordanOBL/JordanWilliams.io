import ResumePDF from '/Resume.pdf';
interface Props {
    bg: string;
    textSize?: string;
    fontSize?: string;
}
const DownloadResumeButton = ({ bg, textSize, fontSize }: Props) => {
    return (
        <a href={ResumePDF} download='Jordan Williams Resume' target='_blank'>
            <button
                className={`rounded-full px-8 py-4 ${bg} project-shadow hover:project-shadow-hover hover:bg-teal-400 cursor-pointer text-white ${textSize} font-${fontSize}`}
            >
                Download Resume (PDF)
            </button>
        </a>
    );
};

export default DownloadResumeButton;
