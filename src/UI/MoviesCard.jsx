import React from 'react'

function MoviesCard({videolist}) {
    const{Poster, Title, Year}=videolist;
  return (
     <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-gray-200">
            <img
              src={Poster} className='w-full h-full'
            />

            {/* Card Body */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{Title}</h3>
              <p className="text-sm text-gray-600">A short movie description or genre.</p>
            </div>

            {/* Card Footer */}
            <div className="px-4 py-2 border-t border-gray-200 text-sm text-gray-500 flex justify-between items-center">
              <span>Year: {Year}</span>
              <span>Type: Movie</span>
            </div>
          </div>
  )
}

export default MoviesCard
