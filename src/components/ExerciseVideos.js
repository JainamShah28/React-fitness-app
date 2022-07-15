import laoding from '../assets/images/Rolling-1s-200px.gif';

function ExerciseVideos({ name, exerciseVideos }) {
    if (exerciseVideos.length == 0) {
        return (
            <div className="loading-spinner flex justify-center items-center my-4 md:my-8 lg:my-12">
                <img src={laoding} className="w-6 md:w-8"></img>
                <span className="text-sm ml-2 md:text-base md:ml-4">Loading . . .</span>
            </div>
        );
    }

    const videos = exerciseVideos.slice(1, 4).map((item) => {
        return (
            <div className="video box-border transition-all duration-200 ease-linear hover:scale-105 bg-white p-4 rounded-md shadow-md">
                <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="__blank" rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} className="w-full rounded-md"></img>
                    <p className="video-title font-semibold leading-5 mt-3">{item.video.title}</p>
                    <p className="channel-name text-xs font-light mt-2">{item.video.channelName}</p>
                </a>
            </div>
        );
    });

    return (
        <div className="exercise-videos box-border">
            <h1 className="font-semibold font-josefin-sans text-xl my-8 lg:my-12 lg:text-2xl">Watch <span className="capitalize font-bold text-[#FF2625]">{name}</span> exercise videos</h1>

            <div className="videos-container box-border grid grid-cols-1 gap-y-2 my-4 md:grid-cols-3 md:gap-y-0 md:gap-x-4 xl:gap-y-6 2xl:gap-y-10">
                { videos }
            </div>
        </div>
    );
}

export default ExerciseVideos;