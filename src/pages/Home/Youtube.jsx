import YouTube from "react-youtube";

function Youtube() {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="font-mimi flex flex-col gap-6 items-center">
      <h2 className="text-2xl sm:text-base">🐰미미 스마트워치🐰</h2>
      <div className="w-full max-w-screen-lg aspect-video">
        <YouTube
          videoId="zsyhLF42LRg"
          opts={opts}
          onReady={onReady}
          className="h-full"
        />
      </div>
    </div>
  );
}

export default Youtube;
