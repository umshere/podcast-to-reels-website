

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Audio Extraction",
      description: "The pipeline takes a YouTube URL and extracts the audio using yt-dlp. If the video is longer than the specified duration, it automatically trims it to the desired length.",
      code: "download_audio(url, duration=60)"
    },
    {
      number: "02",
      title: "Audio Transcription",
      description: "The extracted audio is sent to OpenAI's Whisper API, which returns a detailed transcript with timestamps for each segment.",
      code: "transcribe_audio(audio_path)"
    },
    {
      number: "03",
      title: "Scene Splitting",
      description: "The transcript is split into semantic chunks of ≤20 words. GPT-4o-mini generates vivid image prompts for each chunk based on the scientific content.",
      code: "split_scenes(transcript_path)"
    },
    {
      number: "04",
      title: "Image Generation",
      description: "For each scene prompt, the pipeline calls Stability AI's API to generate visually engaging illustrations in a modern flat style with bright colors.",
      code: "generate_images(scenes)"
    },
    {
      number: "05",
      title: "Video Composition",
      description: "Finally, MoviePy assembles the images and audio into a vertical 1080×1920 video reel at 30fps, perfectly timed to match the spoken content.",
      code: "compose_video(audio_path, image_paths, scenes)"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            How It Works
          </span>
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 bg-purple-500/20 rounded-full p-4 border border-purple-500/50">
                <span className="text-2xl font-bold text-purple-400">{step.number}</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <code className="text-green-400">{step.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            The entire pipeline is modular, robust, and extensively tested with comprehensive error handling.
          </p>
          <a 
            href="#docs" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors inline-block"
          >
            View Full Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
