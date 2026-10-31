
import React, { useEffect } from 'react';

function Landing({ onFinish }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#111827]">

            <div className="text-center px-4">

                {/* Brand Name */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-white
                    tracking-tight animate-[fadeIn_1s_ease-out]">
                    Blogger Pro
                </h1>

                {/* Tagline */}
                <p className="mt-5 text-lg md:text-xl text-gray-400
                    animate-[fadeIn_1.5s_ease-out]">
                    Your thoughts. Your stories. Your space.
                </p>

                {/* Loading Progress Bar */}
                <div className="w-48 h-1 bg-gray-700 rounded-full mx-auto mt-5 overflow-hidden">
                    <div className="h-full w-[45%] bg-blue-500 rounded-full
                        animate-[loading_1.5s_ease-in-out_infinite]">
                    </div>
                </div>

                {/* Loading Text */}
                <p className="mt-4 text-gray-500 text-base
                    animate-pulse">
                    Loading experience
                </p>

            </div>

            {/* Inline CSS Animations */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes loading {
                        0% {
                            transform: translateX(-110%);
                        }
                        100% {
                            transform: translateX(230%);
                        }
                    }
                `}
            </style>

        </div>
    );
}

export default Landing;
