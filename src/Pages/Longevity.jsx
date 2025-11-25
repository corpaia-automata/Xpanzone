import React from 'react'

const Longevity = () => {
  return (
    <div className=" rounded-3xl overflow-hidden p-6 md:p-10 max-w-screen-2xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left: Video */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/media/IMG_0060.mov"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[32rem] object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-white">
          <h2 className="text-3xl md:text-6xl font-bold mb-7 text-yellow-400">Rethinking the Floorplan</h2>
          <p className="mb-6 text-lg leading-relaxed text-black">
            By introducing truly effortless space transformation, Ori expands what's possible through architecture,
            enabling architects and developers to create more innovative and desirable housing with a revolutionary and ready-to-use toolkit.
            <br /><br />
            With Ori, static square footage is no longer the primary driver of real estate value and experience.
            This new model for real estate development better aligns the interests of renters and developers,
            enabling a future of adaptable, more affordable, and effortless living.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-300">
            Explore Layouts
          </button>
        </div>
      </div>
    </div>

  )
}

export default Longevity