import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PlayerBar from './components/PlayerBar';

function App() {
    return (
        <div className="h-screen flex flex-col bg-black text-white">
            <div className="flex-1 flex overflow-hidden">
                <Sidebar />
                <MainContent />
            </div>
            <PlayerBar />
        </div>
    );
}

export default App;