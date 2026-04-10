import Image from "next/image";
import Link from "next/link";
import React from "react";

const Food = ({ food }) => {
  console.log(food, " food is here form food");
  const { id, image_link, dish_name, cuisine, category, rating } = food;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-base-200">
      {/* Image Section */}
      <figure className="relative h-56 overflow-hidden">
        <Image
          src={image_link || "/placeholder-food.jpg"}
          alt={dish_name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="badge badge-sm bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] text-white font-medium shadow-md border-0">
            {category}
          </div>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white text-sm font-semibold">
          {rating}
        </div>
      </figure>

      {/* Content Section */}
      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold line-clamp-2 group-hover:text-[#a855f7] transition-colors">
          {dish_name}
        </h2>
        <div className="  text-black font-medium ">{cuisine}</div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>30 min</span> {/* You can make this dynamic later */}
          </div>

          <Link href={`/allFoods/${id}`}>
            <button className="btn btn-sm btn-ghost text-[#ec4899] hover:bg-[#ec4899]/10">
              View Recipe →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
