

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c-4.4 0-8 3.6-8 8v12l6.5-6.5c.2-.2.5-.3.8-.3H12c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              <circle cx="12" cy="10" r="1" />
              <circle cx="16" cy="10" r="1" />
              <circle cx="8" cy="10" r="1" />
            </svg>
            <h1 className="text-xl font-bold text-white">Podcast-to-Reels</h1>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a>
            <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a 
              href="https://github.com/yourusername/podcast-to-reels" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Podcast-to-Reels. Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
