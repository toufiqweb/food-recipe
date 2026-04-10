"use client";

import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-12">
            <div className="max-w-lg w-full text-center">
                
                {/* Big Error Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#22d3ee] rounded-full flex items-center justify-center text-7xl shadow-2xl">
                        😕
                    </div>
                </div>

                {/* Error Code */}
                <div className="text-[120px] font-bold leading-none text-base-content/10 mb-4">
                    404
                </div>

                <h1 className="text-5xl font-bold text-base-content mb-4">
                    Oops! Page Not Found
                </h1>

                <p className="text-xl text-base-content/70 mb-10">
                    The recipe you're looking for seems to have disappeared from our kitchen.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <button className="btn btn-lg bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:brightness-110 w-full sm:w-auto px-10">
                            ← Back to Home
                        </button>
                    </Link>

                    <Link href="/recipes">
                        <button className="btn btn-lg btn-outline border-base-content/30 hover:bg-base-200 w-full sm:w-auto px-10">
                            Browse All Recipes
                        </button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-base-300">
                    <p className="text-base-content/60 mb-4">You can also try:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/recipes" className="hover:text-[#ec4899] transition-colors">
                            All Recipes
                        </Link>
                        <Link href="/cuisines" className="hover:text-[#ec4899] transition-colors">
                            Popular Cuisines
                        </Link>
                        <Link href="/about" className="hover:text-[#ec4899] transition-colors">
                            About Us
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;