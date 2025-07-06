import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.Chat);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col">
            {/* Include your navbar here */}

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-md mx-auto">
                    <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>

                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                        Page not found
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate(`/home/${currentUser.id}`)}
                            className="px-6 cursor-pointer py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-sm"
                        >
                            Go back
                        </button>

                        <button
                            onClick={() => navigate(`/home/${currentUser.id}`)}
                            className="px-6 cursor-pointer py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition duration-300 shadow-sm"
                        >
                            Return home
                        </button>
                    </div>
                </div>
            </main>

            {/* Optional footer can be added here */}
        </div>
    );
};

export default NotFound;