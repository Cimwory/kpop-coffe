'use client';

import React, { useState, useEffect } from 'react';
import { SOUND_TRACKS, SoundTrack } from '@/data/coffeeData';
import { soundEngine } from '@/utils/audioEngine';
import {
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Disc3,
  Timer,
  Minimize2,
  Maximize2,
  Sparkles,
} from 'lucide-react';

interface AudioDockProps {
  lang: 'EN' | 'KR';
  isPlaying: boolean;
  onTogglePlay: () => void;
  currentTrackIndex: number;
  onSelectTrack: (index: number) => void;
  selectedMoodId: string;
}

export const AudioDock: React.FC<AudioDockProps> = ({
  lang,
  isPlaying,
  onTogglePlay,
  currentTrackIndex,
  onSelectTrack,
  selectedMoodId,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progressSec, setProgressSec] = useState(0);

  // 15-Minute Synchronized Coffee Brewing Acoustic Session
  const [brewTimerActive, setBrewTimerActive] = useState(false);
  const [brewSecondsLeft, setBrewSecondsLeft] = useState(15 * 60);

  const currentTrack = SOUND_TRACKS[currentTrackIndex] || SOUND_TRACKS[0];

  // Sound Engine sync
  useEffect(() => {
    if (isPlaying) {
      soundEngine.playTrack(currentTrack.frequencyHz, selectedMoodId);
    } else {
      soundEngine.stop();
    }
  }, [isPlaying, currentTrackIndex, selectedMoodId]);

  // Volume control
  useEffect(() => {
    soundEngine.setVolume(isMuted ? 0 : volume);
  }, [volume, isMuted]);

  // Track progress ticker
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgressSec((prev) => (prev + 1) % currentTrack.durationSeconds);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.durationSeconds]);

  // 15-Minute Brew Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (brewTimerActive && brewSecondsLeft > 0) {
      timer = setInterval(() => {
        setBrewSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (brewSecondsLeft === 0) {
      setBrewTimerActive(false);
      alert(lang === 'EN' ? '15-Minute Brewing Session Completed! Enjoy your cup.' : '15분 어쿠스틱 브루잉 세션이 완료되었습니다. 향미를 즐겨보세요.');
    }
    return () => clearInterval(timer);
  }, [brewTimerActive, brewSecondsLeft, lang]);

  const toggleBrewTimer = () => {
    if (!brewTimerActive) {
      setBrewSecondsLeft(15 * 60);
      setBrewTimerActive(true);
      if (!isPlaying) onTogglePlay();
    } else {
      setBrewTimerActive(false);
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % SOUND_TRACKS.length;
    onSelectTrack(nextIdx);
    setProgressSec(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      id="ksound"
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 glass-dock text-warm-ivory shadow-2xl ${
        isMinimized ? 'translate-y-[calc(100%-48px)]' : 'translate-y-0'
      }`}
    >
      {/* Top Thin Progress Bar */}
      <div className="w-full bg-seoul-concrete/20 h-1">
        <div
          className="bg-korean-red h-1 transition-all duration-300"
          style={{ width: `${(progressSec / currentTrack.durationSeconds) * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Vinyl Record & Track Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            {/* Spinning Vinyl */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
              <div
                className={`w-full h-full rounded-full bg-ink-black border border-champagne-gold/60 p-1 flex items-center justify-center shadow-lg ${
                  isPlaying ? 'animate-spin-slow' : ''
                }`}
              >
                {/* Vinyl grooves */}
                <div className="w-full h-full rounded-full border border-seoul-concrete/20 flex items-center justify-center bg-[radial-gradient(circle,#2A1B16_30%,#111111_70%)]">
                  <div className="w-3.5 h-3.5 rounded-full bg-champagne-gold border border-ink-black flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-ink-black" />
                  </div>
                </div>
              </div>
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-korean-red animate-ping" />
              )}
            </div>

            {/* Track Text */}
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.2 text-champagne-gold border border-champagne-gold/40 uppercase">
                  {currentTrack.frequencyHz} Hz
                </span>
                <span className="text-[10px] font-mono text-seoul-concrete truncate hidden sm:inline">
                  {currentTrack.genre}
                </span>
              </div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-warm-ivory truncate">
                {lang === 'EN' ? currentTrack.titleEn : currentTrack.titleKr}
              </h4>
              <p className="text-[11px] font-mono text-seoul-concrete/90 truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={onTogglePlay}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-warm-ivory text-ink-black hover:bg-champagne-gold transition-colors flex items-center justify-center shadow-md"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={handleNextTrack}
              className="p-2 text-seoul-concrete hover:text-warm-ivory transition-colors"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-seoul-concrete">
              <span>{formatTime(progressSec)}</span>
              <span>/</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          {/* Right: 15-Min Brew Sync & Volume Controls */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* 15-Min Synchronized Brewing Button */}
            <button
              onClick={toggleBrewTimer}
              className={`hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono border rounded transition-all ${
                brewTimerActive
                  ? 'border-korean-red bg-korean-red/20 text-korean-red font-bold animate-pulse'
                  : 'border-seoul-concrete/40 text-warm-ivory hover:border-champagne-gold'
              }`}
              title="15-Minute Synchronized Pour-Over Acoustic Session"
            >
              <Timer className="w-3.5 h-3.5" />
              <span>
                {brewTimerActive
                  ? `${formatTime(brewSecondsLeft)} ${lang === 'EN' ? 'BREWING' : '추출중'}`
                  : lang === 'EN'
                  ? '15m Brew Session'
                  : '15분 브루잉 세션'}
              </span>
            </button>

            {/* Volume Slider */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-seoul-concrete hover:text-warm-ivory transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-16 sm:w-20 accent-champagne-gold cursor-pointer h-1 bg-seoul-concrete/40 rounded"
              />
            </div>

            {/* Minimize / Maximize Dock */}
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 text-seoul-concrete hover:text-warm-ivory transition-colors"
              title={isMinimized ? 'Expand Dock' : 'Minimize Dock'}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
