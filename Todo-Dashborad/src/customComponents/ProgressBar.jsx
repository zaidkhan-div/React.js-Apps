const ProgressBar = ({ completionRate }) => {
    return (
        <div className='flex flex-col mt-10 md:mt-0 gap-5'>
            <div className=' bg-white h-auto w-full rounded-lg px-5 py-5 flex flex-col gap-2'>
                <div className='rounded-lg w-full py-2 px-10 flex flex-col gap-3 items-center justify-center'>
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <div
                                className="w-24 h-24 rounded-full"
                                style={{
                                    background: `conic-gradient(#3b82f6 ${completionRate * 3.6}deg, #e5e7eb 
                                    ${completionRate * 3.6}deg)`
                                }}
                            />
                            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                <p className="text-blue-500 text-base text-center font-black">{completionRate}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
