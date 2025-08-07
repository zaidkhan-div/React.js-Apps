import React from 'react';

const ProgressBar = ({ completionRate }) => {
    return (
        <div className="flex justify-center items-center">
            <div
                className="w-24 h-24 border-8 border-gray-300 rounded-full relative"
            >
                <div className="text-center mt-[33%] text-blue-500 text-lg font-black">
                    {completionRate}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
