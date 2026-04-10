import React from "react";

const News = () => {
  return (
    <section className="py-20 bg-base-200 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 via-transparent to-[#22d3ee]/5"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#22d3ee] rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-xl">
            📧
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Stay Hungry for New Recipes
          </h2>

          <p className="text-xl text-base-content/70 max-w-lg mx-auto mb-10">
            Join thousands of food lovers and get{" "}
            <span className="font-semibold text-[#ec4899]">
              weekly recipe ideas
            </span>
            , cooking tips, and exclusive offers directly in your inbox.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="join w-full max-w-xl shadow-lf rounded-full overflow-hidden p-5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input join-item w-full h-14 bg-base-100 focus:outline-none text-sm px-4 rounded-none"
              />

              <button className="join-item h-14 px-6 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white font-semibold text-sm hover:brightness-110 transition-all">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-base-content/60 mt-4">
              ✨ We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Food Icons (Decorative) */}
      <div className="absolute hidden lg:block top-12 left-12 text-6xl opacity-10">
        🍜
      </div>
      <div className="absolute hidden lg:block bottom-12 right-16 text-6xl opacity-10">
        🥗
      </div>
      <div className="absolute hidden lg:block top-1/3 right-24 text-5xl opacity-10">
        🍛
      </div>
    </section>
  );
};

export default News;
