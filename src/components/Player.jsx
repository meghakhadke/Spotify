// src/components/Player.js
import React, { useState, useRef } from 'react';

const Player = ({ song }) => {
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg w-full md:w-1/3">
            {song ? (
                <>
                    <h2 className="text-xl mb-2">{song.title} - {song.artist}</h2>
                    <audio ref={audioRef} controls className="w-full">
                        <source src={song.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="flex items-center mt-2">
                        <label className="mr-2">Volume:</label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-full"
                        />
                    </div>
                </>
            ) : (
                <p className="text-gray-400">No Song Selected</p>
            )}
        </div>
    );
};

export default Player;

