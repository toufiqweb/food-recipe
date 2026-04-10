import React from "react";
import Food from "./Food";
import Link from "next/link";

const Foods = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;

  console.log(foods);

  return (
    <div className="py-20 px-4 md:px-10 lg:px-20">
      <h1 className="font-bold text-5xl py-10 text-center tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]">
        {" "}
        Foods{" "}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
        {foods.slice(0, 8).map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>

      <Link href={"/allFoods"}>
        <button className="btn btn-lg my-10 flex justify-self-center bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:scale-105 transition-transform shadow-xl shadow-purple-500/30 font-semibold px-10">
          Show more <span className="pl-1"> →</span>
        </button>
      </Link>
    </div>
  );
};

export default Foods;
