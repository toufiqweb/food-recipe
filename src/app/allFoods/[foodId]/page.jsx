import Image from "next/image";
import Link from "next/link";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;

  //   console.log(foodId, " dynamic");

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;
  const {
    dish_name,
    image_link,
    cuisine,
    category,
    rating,
    price,
    possible_price_in_dhaka,
    main_ingredients,
    cooking_steps,
    approximate_nutrition_per_serving,
    alternative_names,
  } = food;

  console.log(food, " food is here");

  return (
    <div className="min-h-[70vh] my-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
       
       <Link href={"/allFoods"}>
        <button className="btn btn-ghost mb-8 flex items-center gap-2 hover:bg-base-200">
          ← Back to All Recipes
        </button>
       </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image Section - Left */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-base-300 sticky top-8">
              <Image
                src={image_link}
                alt={dish_name}
                width={800}
                height={600}
                className="w-full h-auto p-10 object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="badge badge-lg bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] text-white border-0 font-medium">
                  {cuisine.split(" ")[0]}
                </div>
                <div className="badge badge-lg badge-outline">{category}</div>
                <div className="badge badge-lg bg-yellow-400 text-black font-bold flex items-center gap-1">
                  ⭐ {rating}.0
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {dish_name}
              </h1>

              {alternative_names && alternative_names.length > 0 && (
                <p className="mt-3 text-base-content/70 italic">
                  Also known as: {alternative_names.slice(0, 2).join(", ")}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-[#a855f7]">
                ৳{price}
              </span>
              <span className="text-base-content/60">starting price</span>
            </div>

            {/* Dhaka Price Breakdown */}
            <div className="bg-base-200 p-6 rounded-3xl">
              <h3 className="font-semibold text-lg mb-5">Price in Dhaka</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-base-content/60">Home Cooked</p>
                  <p className="font-semibold text-lg">
                    ৳{possible_price_in_dhaka.home_cooked}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-base-content/60">
                    Street / Small Restaurant
                  </p>
                  <p className="font-semibold text-lg">
                    ৳{possible_price_in_dhaka.street_food_or_small_restaurant}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-base-content/60">
                    Cafe / Healthy Eatery
                  </p>
                  <p className="font-semibold text-lg">
                    ৳{possible_price_in_dhaka.cafe_or_healthy_eatery}
                  </p>
                </div>
              </div>
            </div>

            {/* Nutrition Facts */}
            <div className="bg-base-200 p-6 rounded-3xl">
              <h3 className="font-semibold text-lg mb-5">
                Approximate Nutrition (Per Serving)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(approximate_nutrition_per_serving).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="bg-base-100 p-5 rounded-2xl text-center"
                    >
                      <p className="uppercase text-xs tracking-widest text-base-content/60 mb-1">
                        {key}
                      </p>
                      <p className="font-semibold text-xl">{value}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Main Ingredients</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {main_ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-base-200 hover:bg-base-300 p-5 rounded-2xl transition-colors"
                  >
                    <span className="text-2xl text-[#22d3ee]">•</span>
                    <span className="leading-relaxed">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooking Steps */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">
                Step-by-Step Cooking Instructions
              </h3>
              <div className="space-y-8">
                {cooking_steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-11 h-11 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#22d3ee] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                      {index + 1}
                    </div>
                    <div className="pt-2 text-base-content/80 leading-relaxed text-[17px]">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
