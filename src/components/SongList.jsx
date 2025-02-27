// src/components/SongList.js
import React, { useState } from 'react';

const songs = [
    {
        id: 1,
        title: 'Song 1',
        artist: 'Artist 1',
        audio: '/audio/Song1.mp3',
        image: '/images/img1.jpg',
        duration: '3:45',
    },
    {
        id: 2,
        title: 'Song 2',
        artist: 'Artist 2',
        audio: '/audio/Song2.mp3',
        image: '/images/img2.jpg',
        duration: '4:05',
    },
    {
        id: 3,
        title: 'Song 3',
        artist: 'Artist 3',
        audio: '/audio/Song3.mp3',
        image: '/images/img3.jpg',
        duration: '2:50',
    },
    {
        id: 4,
        title: 'Song 4',
        artist: 'Artist 4',
        audio: '/audio/song4.mp3',
        image: '/images/img4.jpg',
        duration: '3:30',
    },
];

const SongList = ({ onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg w-full md:w-2/3">
            <h2 className="text-2xl mb-4">Songs</h2>
            <input
                type="text"
                placeholder="Search by title or artist"
                className="mb-4 p-2 rounded bg-gray-800 text-white w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="space-y-2">
                {filteredSongs.map(song => (
                    <li
                        key={song.id}
                        onClick={() => onSelect(song)}
                        className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
                    >
                        <img src={song.image} alt={song.artist} className="w-12 h-12 rounded-full mr-3" />
                        <div className="flex-grow">
                            <div className="font-bold">{song.title}</div>
                            <div className="text-gray-400">{song.artist}</div>
                        </div>
                        <div className="text-gray-400">{song.duration}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
