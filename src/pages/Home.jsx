import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vdo from '../assets/InShot_20240723_234557451.mp4';
import CustomCard from '../component/CustumCard';

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCardClick = (condition) => {
    navigate(`/${condition}`);
  };

  const conditions = [
    'anxiety',
    'depression',
    'social-anxiety',
    'panic-disorder',
    'bipolar-disorder',
    'borderline-personality-disorder',
    'postpartum',
    'insuiavity',
    'ocd',
    'eating-disorder'
  ];

  return (
    <div className="relative max-w-full bg-white  font-sans">
      {/* Video Background */}
      <div className="absolute inset-0 ">
        <video
          ref={videoRef}
          src={vdo}
          autoPlay
          muted
          loop
          className="object-cover w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
        />
      </div>

      {/* Content Over Video */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          Discover mental health resources and support. Empower yourself with the tools and knowledge to improve your well-being.
        </p>
        <button
          onClick={handlePlayPause}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          {isPlaying ? 'Pause Video' : 'Play Video'}
        </button>
      </div>

      {/* Text Section */}
      <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 bg-white text-black max-w-4xl mx-auto rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Mind Care</h2>
        <p className="text-base md:text-lg leading-relaxed">
          In today's fast-paced world, taking care of our mental well-being is more important than ever. Life can get overwhelming at times, and that's why it's crucial to prioritize our mental health just like we do with our physical health. Mental health is increasingly disturbed due to irregular schedules and stress, affecting many people today. Take some time from your busy schedule to improve your mental health by taking our mental health assessment test and checking your well-being.
        </p>
      </div>

      {/* Card Section */}
      <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 bg-white text-black max-w-6xl mx-auto rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Mental Health Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="bg-white border border-blue-200 hover:bg-blue-100 text-black rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleCardClick(condition)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 capitalize">{condition.replace('-', ' ')}</h3>
                <p className="text-sm">
                  Learn more about {condition.replace('-', ' ')} and find resources and support to help manage it.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* Custom Card */}
    <div>
        <CustomCard/>
    </div>
    </div>
  );
}
