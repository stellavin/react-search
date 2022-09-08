import React from "react";

function Card({ movie }) {
  return (
    <div class="bg-white shadow-lg border-gray-100 max-h-50 border sm:rounded-3xl flex space-x-8 m-5 mb-5">
      <div class="h-4/6 overflow-visible w-3/6">
        <img
          class="rounded-3xl shadow-lg h-50"
          src={movie.thumbnail}
          alt={movie.name}
        />
      </div>
      <div class="flex flex-col w-1/2 p-2 ">
        <div class="flex justify-between items-start">
          <h2 class="text-l font-bold">{movie.name}</h2>
        </div>
        <div>
          <div class="text-sm text-gray-400">Duration</div>
          <div class="text-sm text-gray-800">{movie.duration}</div>
          <div class="text-sm text-gray-500">{movie.description}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
