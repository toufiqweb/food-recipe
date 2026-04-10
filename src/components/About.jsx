import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#a855f7]/10 to-[#22d3ee]/10 px-6 py-2 rounded-full mb-4">
            <span className="text-2xl">🍳</span>
            <span className="uppercase tracking-widest font-medium text-sm">
              Our Story
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Cooking with{" "}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
              Love & Passion
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-base-content/70">
            RecipeHub was born from a simple idea — making delicious, healthy,
            and easy-to-cook recipes accessible to everyone in Bangladesh and
            beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Story Text */}
          <div className="space-y-8">
            <div className="prose prose-lg text-base-content/80">
              <p>
                Founded in Dhaka, RecipeHub started as a small passion project
                by a group of food lovers who wanted to share authentic and
                fusion recipes that fit the busy lifestyle of urban
                Bangladeshis.
              </p>
              <p>
                Today, we have grown into a vibrant community where home cooks,
                students, working professionals, and food enthusiasts discover
                thousands of recipes — from traditional Bangladeshi dishes to
                healthy Mediterranean bowls, quick street-food twists, and
                global favorites.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-[#a855f7]">5000+</div>
                <div className="text-sm text-base-content/60 mt-1">Recipes</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-[#ec4899]">50k+</div>
                <div className="text-sm text-base-content/60 mt-1">
                  Happy Cooks
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-[#22d3ee]">120+</div>
                <div className="text-sm text-base-content/60 mt-1">
                  Cuisines
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn btn-lg bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:brightness-110">
                Join Our Cooking Community
              </button>
            </div>
          </div>

          {/* Right - Image + Values */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Cooking together"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Values Cards */}
            <div className="absolute -bottom-6 -left-6 bg-base-100 shadow-xl p-6 rounded-3xl border border-base-200 max-w-[260px] hidden xl:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-2xl flex items-center justify-center text-3xl">
                  ❤️
                </div>
                <div>
                  <h4 className="font-semibold">Made with Love</h4>
                  <p className="text-sm text-base-content/70">
                    Every recipe is tested in real kitchens
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-base-100 shadow-xl p-6 rounded-3xl border border-base-200 max-w-[240px] hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#22d3ee] to-[#a855f7] rounded-2xl flex items-center justify-center text-3xl">
                  🌍
                </div>
                <div>
                  <h4 className="font-semibold">Global Flavors</h4>
                  <p className="text-sm text-base-content/70">
                    Local ingredients, world taste
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Values Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Our Promise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 border border-base-300 hover:border-[#ec4899] transition-all p-8 text-center">
              <div className="text-5xl mb-6">🥗</div>
              <h4 className="text-xl font-semibold mb-3">Healthy & Fresh</h4>
              <p className="text-base-content/70">
                We focus on balanced meals using fresh, locally available
                ingredients.
              </p>
            </div>

            <div className="card bg-base-200 border border-base-300 hover:border-[#a855f7] transition-all p-8 text-center">
              <div className="text-5xl mb-6">⏱️</div>
              <h4 className="text-xl font-semibold mb-3">Quick & Easy</h4>
              <p className="text-base-content/70">
                Most recipes are ready in under 45 minutes — perfect for busy
                days.
              </p>
            </div>

            <div className="card bg-base-200 border border-base-300 hover:border-[#22d3ee] transition-all p-8 text-center">
              <div className="text-5xl mb-6">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-semibold mb-3">For Everyone</h4>
              <p className="text-base-content/70">
                From beginners to expert cooks — clear steps and helpful tips
                for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
