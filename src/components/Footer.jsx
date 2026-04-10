import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#22d3ee] rounded-2xl flex items-center justify-center text-white text-3xl">
                🍳
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
                RecipeHub
              </h2>
            </div>

            <p className="text-base-content/70 max-w-xs">
              Discover delicious recipes from around the world. Cook with love,
              eat with joy.
            </p>

            {/* Social Icons - Inline SVG */}
            <div className="flex gap-5">
              <a
                href="#"
                className="text-base-content/60 hover:text-[#ec4899] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="#"
                className="text-base-content/60 hover:text-[#22d3ee] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="text-base-content/60 hover:text-[#a855f7] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6-1 3.4-1.6 5-1.4-1.6 1-2.7 2.6-3 4.4-3.2-.2-6.1-1.7-8-4-1.6 2.6-1.3 6 .3 8-1.4-.1-2.7-.5-3.8-1.2-.1 3.4 2.4 6.6 5.8 7.2-1 .3-2 .4-3 .4-.8 0-1.6-.1-2.4-.3 1.7 3.3 5.3 5.3 9 5.3 10.8 0 16.7-9 16.7-16.7 0-.3 0-.6-.1-.9 1.1-.8 2.1-1.8 2.8-3z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="text-base-content/60 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-base-content">
              Explore
            </h3>
            <ul className="space-y-3 text-base-content/70">
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/cuisines"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="/easy-recipes"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Easy Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-base-content">
              Categories
            </h3>
            <ul className="space-y-3 text-base-content/70">
              <li>
                <Link
                  href="/breakfast"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  href="/main-course"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Main Course
                </Link>
              </li>
              <li>
                <Link
                  href="/desserts"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  href="/vegetarian"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link
                  href="/healthy"
                  className="hover:text-[#ec4899] transition-colors"
                >
                  Healthy Meals
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg mb-4 text-base-content">
              Stay Updated
            </h3>

            <div className="join w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered join-item w-full bg-base-100 focus:border-[#a855f7]"
              />
              <button className="btn join-item bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] border-0 text-white hover:brightness-110">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-base-content/60">
              Get weekly recipe ideas and cooking tips directly in your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
          <div>© 2026 RecipeHub. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-1">
            Made with ❤️ for food lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
