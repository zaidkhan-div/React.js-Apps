import React from "react"

function App() {

  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500 animate-fadeIn">
            Welcome to <span className="text-yellow-300">Your Brand</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            Crafting digital experiences that captivate and convert.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Get Started
          </button>
        </section>

        {/* Features Grid */}
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {['Design', 'Performance', 'Innovation'].map((item) => (
            <div key={item} className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
              <div className="text-yellow-300 text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-3">{item}</h3>
              <p className="opacity-80">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          ))}
        </div>

        {/* Animated CTA */}
        <div className="bg-black bg-opacity-20 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform?</h2>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-300 hover:text-indigo-900 font-bold py-3 px-10 rounded-full transition-all animate-pulse">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
