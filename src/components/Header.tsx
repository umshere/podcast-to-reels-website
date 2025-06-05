

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2c-4.4 0-8 3.6-8 8v12l6.5-6.5c.2-.2.5-.3.8-.3H12c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
            <circle cx="12" cy="10" r="1" />
            <circle cx="16" cy="10" r="1" />
            <circle cx="8" cy="10" r="1" />
          </svg>
          <h1 className="text-xl font-bold text-white">Podcast-to-Reels</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
            <li><a href="#demo" className="hover:text-purple-400 transition-colors">Demo</a></li>
            <li><a href="#docs" className="hover:text-purple-400 transition-colors">Docs</a></li>
            <li>
              <a 
                href="https://github.com/yourusername/podcast-to-reels" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
