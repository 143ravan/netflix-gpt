
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-b from-black">
      <h1 className="p-6 text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-4/12">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          ▶Play
        </button>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
