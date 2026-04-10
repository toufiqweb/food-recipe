import Food from "@/components/Food";
import React from "react";

const AllFoodPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  return (
    <div className="py-20 px-4 md:px-10 lg:px-20">
      <h1 className="font-bold text-5xl  pb-10 text-center tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]">
        All Foods
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFoodPage;
