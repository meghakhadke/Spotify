// src/App.js
import React, { useState } from 'react';
import Header from './components/Header'; // Ensure the correct path
import Player from './components/Player'; // Ensure the correct path
import SongList from './components/SongList'; // Ensure the correct path

function App() {
    const [currentSong, setCurrentSong] = useState(null);

    const handleSelectSong = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header />
            <div className="flex flex-col md:flex-row justify-center items-start p-4 space-x-4">
                <SongList onSelect={handleSelectSong} />
                <Player song={currentSong} />
            </div>
        </div>
    );
}

export default App;

