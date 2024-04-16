import YouTube from "react-youtube";

function Youtube() {
  const opts = {
    height: "390",
    width: "640",
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
      <h2 className="text-2xl">🐰미미 스마트워치🐰</h2>{" "}
      <YouTube videoId="zsyhLF42LRg" opts={opts} onReady={onReady} />
    </div>
  );
}

export default Youtube;
