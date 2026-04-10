import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] my-10 rounded-2xl relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Gradient Overlay using your colors */}
      <div className="hero-overlay bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>

      <div className="hero-content text-center text-white px-4 py-12 max-w-5xl mx-auto z-10">
        <div className="space-y-8">
          {/* Badge / Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium tracking-widest">
              🍳 DISCOVER NEW FLAVORS
            </span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Delicious Recipes <br />
            <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
              Made Easy
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200">
            Explore thousands of mouth-watering recipes from around the world.
            Cook like a pro with step-by-step guides and pro tips.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link href={"/allFoods"}>
              <button className="btn btn-lg bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:scale-105 transition-transform shadow-xl shadow-purple-500/30 font-semibold px-10">
                Browse Recipes
              </button>
            </Link>

            <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-black transition-all">
              Watch Cooking Video
            </button>
          </div>

          {/* Trust / Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm opacity-90">
            <div>⭐ 4.9/5 from 12k+ happy cooks</div>
            <div>🍽️ 2500+ Recipes</div>
            <div>🌍 50+ Cuisines</div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <div className="w-32 h-32 bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 backdrop-blur-3xl rounded-3xl rotate-12 flex items-center justify-center text-6xl shadow-2xl">
          👨‍🍳
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Banner;
