"use client";

import { useRef, useState, useEffect } from "react";
import {
    FaVolumeMute,
    FaVolumeUp,
    FaPause,
    FaPlay
} from "react-icons/fa";

export default function VideoSection() {

    // States for video controls
    const [isMuted, setMuted] = useState(true);
    const [isPaused, setPaused] = useState(false);

    // Lazy loading state
    const [loadVideo, setLoadVideo] = useState(false);

    // Ref to access the video element
    const videoRef = useRef(null);

    const videoSrc = "/random-video.mp4";

    // UseEffect with normal function for lazy loading
    useEffect(function () {

        // Callback function for IntersectionObserver
        function handleIntersect(entries) {
            if (entries[0].isIntersecting) {
                setLoadVideo(true);
                observer.disconnect();
            }
        }

        // Creating the observer object
        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.2
        });

        // Start observing
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Cleanup function
        return function () {
            observer.disconnect();
        };

    }, []);

    // Toggle mute / unmute
    function toggleMute() {
        const video = videoRef.current;
        video.muted = !video.muted;
        setMuted(video.muted);
    }

    // Toggle play / pause
    function togglePlay() {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
            setPaused(false);
        } else {
            video.pause();
            setPaused(true);
        }
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                ref={videoRef}
                src={loadVideo ? videoSrc : undefined}  // Lazy loading (if loadvideo is true then set else don't )
                autoPlay={loadVideo}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Controls */}
            <div className="absolute bottom-5 right-5 flex items-center gap-3">

                {/* Play / Pause */}
                <button
                    onClick={togglePlay}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg"
                >
                    {isPaused ? <FaPlay size={18} /> : <FaPause size={18} />}
                </button>

                {/* Mute / Unmute */}
                <button
                    onClick={toggleMute}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg"
                >
                    {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                </button>

            </div>

        </div>
    );
}
