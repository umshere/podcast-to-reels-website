import React from 'react';

const Documentation = () => {
  const sections = [
    {
      title: "Installation",
      content: `
# Installation

## Requirements
- Python 3.11 or higher
- FFmpeg installed on your system
- OpenAI API key
- Stability AI API key

## Using pip
\`\`\`bash
# Clone the repository
git clone https://github.com/umshere/podcast-to-reels.git
cd podcast-to-reels

# Install dependencies
pip install -r requirements.txt
\`\`\`

## Configuration
1. Copy the example environment file:
\`\`\`bash
cp .env.example .env
\`\`\`

2. Edit \`.env\` to add your API keys:
\`\`\`
OPENAI_API_KEY=your_openai_api_key_here
STABILITY_API_KEY=your_stability_api_key_here
\`\`\`
      `
    },
    {
      title: "Usage",
      content: `
# Usage

## Basic Usage
\`\`\`bash
python scripts/run_pipeline.py --url <YOUTUBE_URL> --duration 60
\`\`\`

This will:
1. Download audio from the specified YouTube URL
2. Process it through the pipeline
3. Generate a video reel at \`output/reel.mp4\`

## Advanced Options
\`\`\`bash
python scripts/run_pipeline.py --url <YOUTUBE_URL> --duration 30 --output custom_output.mp4
\`\`\`
      `
    },
    {
      title: "Project Structure",
      content: `
# Project Structure

\`\`\`
podcast-to-reels/
├── podcast_to_reels/       # Main package
│   ├── downloader/         # YouTube audio extraction
│   ├── transcriber/        # Audio to text conversion
│   ├── scene_splitter/     # Transcript chunking and prompt generation
│   ├── image_generator/    # Generate images from prompts
│   ├── video_composer/     # Assemble final video with audio
│   └── utils/              # Shared utilities
├── scripts/                # Command-line scripts
│   └── run_pipeline.py     # Main entry point
├── tests/                  # Unit tests
├── output/                 # Generated artifacts
├── docs/                   # Documentation
├── .github/workflows/      # CI configuration
├── requirements.txt        # Dependencies
└── README.md               # This file
\`\`\`
      `
    },
    {
      title: "API Costs",
      content: `
# API Costs

The pipeline is designed to keep cloud costs under $0.25 per run:

- OpenAI Whisper API: ~$0.10 per minute of audio
- GPT-4o-mini: ~$0.01 for prompt generation
- Stability AI: ~$0.02 per image (typically 5-10 images per minute)
      `
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="docs" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Documentation
          </span>
        </h2>
        
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-700">
            {sections.map((section, index) => (
              <button
                key={index}
                className={`px-6 py-3 font-medium whitespace-nowrap ${
                  activeTab === index 
                    ? 'bg-gray-700 text-white border-b-2 border-purple-500' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <div className="prose prose-invert max-w-none prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: sections[activeTab].content }} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            For complete documentation, please refer to the GitHub repository.
          </p>
          <a 
            href="https://github.com/umshere/podcast-to-reels#readme" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            View Full Documentation on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
