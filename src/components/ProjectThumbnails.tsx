interface Props {
    mediaArray: string[];
    index: number;
    handleThumbnailClick: (event: any, index: number) => void;
}
const ProjectThumbnails = ({
    mediaArray,
    index,
    handleThumbnailClick,
}: Props) => {
    return (
        <div className='flex place-content-center mt-4 w-full h-fit flex-wrap'>
            {mediaArray.map((item, idx) =>
                item.split('.').includes('webm') ? (
                    <video
                        className='cursor-pointer rounded-full border-2 border-teal-600 m-2 w-[50px] h-[50px]'
                        autoPlay
                        loop
                        muted
                        playsInline
                        onClick={(event) => handleThumbnailClick(event, index)}
                        
                    >
                        <source  src={item} type='video/webm' />
                        <source
                            src={item.replace('webm', 'mp4')}
                            type='video/mp4'
                        />
                    </video>
                ) : (
                    <img
                        key={item}
                        className='cursor-pointer rounded-full border-2 border-teal-600 m-2 w-[50px] h-[50px]'
                        onClick={(event) => handleThumbnailClick(event, index)}
                        src={item}
                    />
                )
            )}
        </div>
    );
};

export default ProjectThumbnails;
