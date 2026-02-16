const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[15%] px-12 text-white bg-gradient-to-r from-black/90 to-transparent">
      <h1 className="text-4xl font-bold mt-2 ml-10">{title}</h1>
      
    <p className="text-lg mt-2 ml-10 w-1/3 ">{overview}</p>
     <div className="ml-10 mt-4">
      <button className="bg-white text-black p-4 px-12 rounded-md font-bold hover:bg-opacity-80">Play</button>
      <button className="bg-gray-500 text-white p-4 px-12 rounded-md font-bold ml-4 hover:bg-opacity-80"> More Info</button>
    </div>
    </div>
   

  )

}

export default VideoTitle;