import React from "react";

function Card({ movie }) {
  return (
    <div class="bg-white shadow-lg border-gray-100 max-h-44 border sm:rounded-3xl p-8 flex space-x-8 m-5 mb-20">
      <div class="h-48 overflow-visible w-3/2">
        <img
          class="rounded-3xl shadow-lg h-48"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col w-1/2">
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-bold">Sweet Tooth: El niño ciervo</h2>
        </div>
        <div>
          <div class="text-sm text-gray-400">Year</div>
          <div class="text-lg text-gray-800">2019</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
