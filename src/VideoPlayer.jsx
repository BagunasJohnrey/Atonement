import React from 'react';
import YouTube from 'react-youtube';
import { FaArrowLeft } from 'react-icons/fa';

const VideoPlayer = ({ videoId, onEnd, onBack }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,      
      controls: 1,      
      disablekb: 0,      
      fs: 1,            
      modestbranding: 1, 
      rel: 0,            
      iv_load_policy: 3, 
    },
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-50 flex items-center text-white/80 hover:text-red-600 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
      >
        <FaArrowLeft className="mr-2 h-5 w-5" />
        <span className="text-base font-semibold">Back</span>
      </button>

      <div className="flex-grow relative"> 
        <YouTube
          videoId={videoId}
          opts={opts}
          onEnd={onEnd}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;