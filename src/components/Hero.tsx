

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Transform Science Podcasts Into Engaging Video Reels
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          An automated pipeline that converts YouTube science podcasts into visually stunning, 
          illustrated video reels perfect for Instagram and TikTok.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#demo" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
          >
            See It In Action
          </a>
          <a 
            href="#how-it-works" 
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
          >
            How It Works
          </a>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 relative z-0">
            <pre className="text-left overflow-x-auto text-sm text-green-400">
              <code>
{`$ python scripts/run_pipeline.py --url https://youtu.be/example --duration 60

Starting podcast-to-reels pipeline for URL: https://youtu.be/example
Target duration: 60 seconds
Audio downloaded to: output/audio.mp3
Transcription saved to: output/transcript.json
Generated 8 scene prompts
Generated 8 images
Video reel created at: output/reel.mp4
Pipeline completed successfully!`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
