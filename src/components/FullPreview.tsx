import { CgClose } from 'react-icons/cg';
interface Props {
    fullPreviewSource: string;

    handlePreviewClick: (e?: any) => void;
}

const FullPreview = ({ fullPreviewSource, handlePreviewClick }: Props) => {
    return (
        <div
            className='absolute cursor-pointer flex place-content-center place-items-center h-screen w-screen  bg-black/95 z-50 p-8'
            onClick={() => handlePreviewClick()}
        >
            <div className='absolute flex top-20 lg:top-1/2 animate-[colorFade_3s_ease_infinite] text-6xl tracking-widest font-extrabold text-red-500/90'>
                Click to Exit
            </div>
            <img
                className='max-h-screen lg:max-h-screen'
                src={fullPreviewSource}
                alt='full screen Preview'
            />
        </div>
    );
};

export default FullPreview;
