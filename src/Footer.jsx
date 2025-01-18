import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section: Branding or Tagline */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Onboarding Portal</h2>
            <p className="text-sm text-gray-400">Your partner in growth and success.</p>
          </div>

          {/* Center Section: Links */}
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white text-sm">
              About Us
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
              Contact
            </Link>
          </div>

          {/* Right Section: Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M22.675 0h-21.35c-.729 0-1.325.597-1.325 1.333v21.333c0 .736.596 1.333 1.325 1.333h11.495v-9.293h-3.127v-3.622h3.127v-2.667c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.506 0-1.797.718-1.797 1.769v2.303h3.595l-.469 3.622h-3.127v9.293h6.127c.729 0 1.325-.597 1.325-1.333v-21.333c0-.736-.596-1.333-1.325-1.333z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M24 4.556c-.883.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.724-.949.564-2.007.974-3.127 1.195-.897-.958-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.72-2.162-10.148-5.138-.423.725-.666 1.565-.666 2.465 0 1.7.867 3.2 2.186 4.078-.807-.025-1.566-.248-2.228-.616v.062c0 2.372 1.687 4.348 3.918 4.8-.411.112-.845.171-1.293.171-.316 0-.623-.03-.924-.086.624 1.953 2.434 3.377 4.58 3.417-1.676 1.313-3.787 2.096-6.081 2.096-.395 0-.786-.023-1.175-.067 2.171 1.394 4.75 2.209 7.52 2.209 9.024 0 13.961-7.476 13.961-13.961 0-.213-.005-.426-.014-.637.96-.695 1.796-1.562 2.457-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M22.23 0h-20.46c-.98 0-1.77.79-1.77 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77v-20.46c0-.98-.79-1.77-1.77-1.77zm-14.154 20.452h-3.692v-10.769h3.692v10.769zm-1.846-12.308c-1.178 0-2.135-.957-2.135-2.135s.957-2.135 2.135-2.135 2.135.957 2.135 2.135-.957 2.135-2.135 2.135zm13.846 12.308h-3.692v-5.385c0-1.282-.023-2.928-1.785-2.928-1.785 0-2.06 1.394-2.06 2.829v5.484h-3.692v-10.769h3.538v1.475h.049c.492-.93 1.697-1.903 3.492-1.903 3.731 0 4.417 2.457 4.417 5.652v5.546z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Onboarding Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
