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
                item.split('/').includes('Videos') ? (
                    <video
                        onClick={(event) => handleThumbnailClick(event, index)}
                        key={item}
                        src={item}
                        className='w-[100px] h-[100px] cursor-pointer border-2 border-teal-600 m-2'
                    />
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
