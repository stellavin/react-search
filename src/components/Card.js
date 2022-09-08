import React from "react";

function Card({ movie }) {
  return (
    <div className="bg-white shadow-lg border-gray-100 max-h-50 border sm:rounded-3xl flex space-x-8 m-5 mb-5">
      <div className="h-4/6 overflow-visible w-3/6">
        <img
          className="rounded-3xl shadow-lg h-50"
          src={movie.thumbnail}
          alt={movie.name}
        />
        <div className="p-4">
          <h2 className="text-l font-bold">Genres</h2>
          {movie.genres.map((item, index) => (
            <div className="text-sm text-gray-800">
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-2 ">
        <div className="flex justify-between items-start">
          <h2 className="text-l font-bold">{movie.name}</h2>
        </div>
        <div>
          <div className="text-sm text-gray-400 mt-2">Duration</div>
          <div className="text-sm text-gray-800">
            {
              new Date(movie.duration * 1000)
                .toUTCString()
                .match(/(\d\d:\d\d:\d\d)/)[0]
            }
          </div>
          <div className="text-sm text-gray-500 mt-2">{movie.description}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
