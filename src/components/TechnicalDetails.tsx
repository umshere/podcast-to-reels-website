
import ArchitectureDiagram from './ArchitectureDiagram';

const TechnicalDetails = () => {
  return (
    <section id="technical" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Technical Architecture
          </span>
        </h2>
        
        <div className="mb-12">
          <ArchitectureDiagram />
          <p className="text-center text-gray-400 mt-4">
            Interactive architecture diagram of the podcast-to-reels pipeline
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Audio download:</span>
                  <p className="text-gray-400">yt-dlp CLI with --extract-audio → MP3</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Transcription:</span>
                  <p className="text-gray-400">OpenAI Whisper Audio API (gpt-4o-transcribe)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Text processing:</span>
                  <p className="text-gray-400">GPT-4o-mini for chunking & prompt generation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Image generation:</span>
                  <p className="text-gray-400">Stability AI REST v2beta (sd3.5-medium)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Video assembly:</span>
                  <p className="text-gray-400">MoviePy + FFmpeg for final composition</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Implementation Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Modular design:</span>
                  <p className="text-gray-400">Clean separation of concerns with independent modules</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Error handling:</span>
                  <p className="text-gray-400">Robust retry mechanisms and graceful failure modes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Testing:</span>
                  <p className="text-gray-400">Comprehensive test suite with {'>'} 80% code coverage</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">CI/CD:</span>
                  <p className="text-gray-400">GitHub Actions workflow for automated testing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Output format:</span>
                  <p className="text-gray-400">Vertical 1080×1920 MP4 at 30fps, optimized for social media</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;
