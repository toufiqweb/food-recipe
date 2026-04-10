import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Food Icon + Spinner */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Spinner */}
            <span className="loading loading-spinner loading-lg text-[#a855f7]"></span>

            {/* Floating Food Emoji */}
            <div className="absolute inset-0 flex items-center justify-center text-5xl animate-bounce">
              🍳
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-base-content mb-2">
          Cooking up something delicious...
        </h2>

        <p className="text-base-content/60 text-lg">
          Please wait while we prepare your recipe
        </p>

        {/* Progress Bar (Optional nice touch) */}
        <div className="max-w-xs mx-auto mt-10">
          <div className="h-1.5 bg-base-300 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] animate-[loading_1.5s_infinite_linear]"></div>
          </div>
        </div>

        {/* Subtle message */}
        <p className="text-xs text-base-content/50 mt-12">
          This wont take long...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
