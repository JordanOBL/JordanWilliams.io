interface Props {
    fullPreviewSource: string;

    handlePreviewClick: (e?: any) => void;
}

const FullPreview = ({ fullPreviewSource, handlePreviewClick }: Props) => {
    return (
        <div
            className='absolute cursor-pointer flex place-content-center place-items-center h-screen w-screen  bg-black z-50 p-8'
            onClick={() => handlePreviewClick()}
        >
            <div className='absolute flex top-20 lg:top-1/2 animate-[colorFade_3s_ease_infinite] text-6xl tracking-widest font-extrabold text-red-500/90'>
                Click to Exit
            </div>
            {fullPreviewSource.split('.').includes('webm' || 'mp4') ? (
                <video
                    className=' max-w-[100%] cursor-pointer'
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={fullPreviewSource} type='video/webm' />
                    <source
                        src={fullPreviewSource.replace('webm', 'mp4')}
                        type='video/mp4'
                    />
                </video>
            ) : (
                <img
                    className='max-h-screen lg:max-h-screen'
                    src={fullPreviewSource}
                    alt='full screen Preview'
                />
            )}
        </div>
    );
};

export default FullPreview;
