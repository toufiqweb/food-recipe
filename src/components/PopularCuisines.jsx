import React from "react";

const PopularCuisines = () => {
  const cuisines = [
    {
      name: "Bangladeshi",
      icon: "🍛",
      dishes: "120+ Recipes",
      color: "from-[#a855f7] to-[#ec4899]",
      bg: "bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10",
    },
    {
      name: "Indian",
      icon: "🍲",
      dishes: "95+ Recipes",
      color: "from-[#ec4899] to-[#22d3ee]",
      bg: "bg-gradient-to-br from-[#ec4899]/10 to-[#22d3ee]/10",
    },
    {
      name: "Mediterranean",
      icon: "🥗",
      dishes: "80+ Recipes",
      color: "from-[#22d3ee] to-[#a855f7]",
      bg: "bg-gradient-to-br from-[#22d3ee]/10 to-[#a855f7]/10",
    },
    {
      name: "Chinese",
      icon: "🥡",
      dishes: "65+ Recipes",
      color: "from-[#a855f7] to-[#22d3ee]",
      bg: "bg-gradient-to-br from-[#a855f7]/10 to-[#22d3ee]/10",
    },
    {
      name: "Thai",
      icon: "🍜",
      dishes: "50+ Recipes",
      color: "from-[#ec4899] to-[#a855f7]",
      bg: "bg-gradient-to-br from-[#ec4899]/10 to-[#a855f7]/10",
    },
    {
      name: "Italian",
      icon: "🍝",
      dishes: "45+ Recipes",
      color: "from-[#22d3ee] to-[#ec4899]",
      bg: "bg-gradient-to-br from-[#22d3ee]/10 to-[#ec4899]/10",
    },
  ];
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-base-200 px-5 py-2 rounded-full mb-4">
            <span className="text-xl">🌍</span>
            <span className="uppercase tracking-[3px] text-sm font-medium">
              Explore Flavors
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Popular Cuisines</h2>
          <p className="text-base-content/70 mt-4 text-lg max-w-md mx-auto">
            Discover authentic and fusion recipes from around the world
          </p>
        </div>

        {/* Cuisines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className={`group card ${cuisine.bg} border border-base-300 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full`}
            >
              <div className="card-body items-center text-center p-8">
                {/* Icon */}
                <div
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${cuisine.color} flex items-center justify-center text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {cuisine.icon}
                </div>

                {/* Cuisine Name */}
                <h3 className="text-2xl font-bold mb-2 text-base-content">
                  {cuisine.name}
                </h3>

                {/* Recipe Count */}
                <p className="text-base-content/70 font-medium">
                  {cuisine.dishes}
                </p>

                {/* Hover Effect Line */}
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#ec4899] to-transparent mt-8 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="btn btn-lg bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:brightness-110 px-10">
            Explore All Cuisines →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCuisines;
