import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {

 const {movieResults, movieNames}= useSelector(store => store.gpt);
 if(!movieNames) return null;
 

  return (
    <div className='p-4 m-4 bg-black text-white'>{movieNames}
    
    </div>
  )
}

export default GptMovieSuggestions