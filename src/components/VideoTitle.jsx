const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r ">
      <h1 className="text-3xl font-bold mt-20 ml-10">{title}</h1>
      
    <p className="text-lg mt-2 ml-10 w-1/3">{overview}</p>
     <div className="ml-10 mt-4">
      <button className="bg-gray-500 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-80">Play</button>
      <button className="bg-gray-500 text-white px-6 py-2 rounded-md font-bold ml-4 hover:bg-opacity-80">More Info</button>
    </div>
    </div>
   

  )

}

export default VideoTitle;