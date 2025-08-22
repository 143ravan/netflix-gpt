
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video px-6 md:px-24 pt-[10%] absolute text-white bg-gradient-to-b from-black">
      <h1 className="text-2xl md:text-6xl p-2 md:p-6 font-bold">{title}</h1>
      <p className="hidden md:inline-block p-6 text-lg w-4/12">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-2 md:px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          ▶Play
        </button>
        <button className="hidden md:inline-block bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
