import React from 'react'

const Subscribe = () => {


  return (

    <div>

      <section className="bg-white text-center py-20 px-6">
        {/* Top Icon (Optional) */}
        <img
          src="/media/minimal.png"
          alt="Icon"
          className="mx-auto mb-6 h-24"
        />

        {/* Subtitle */}
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
          Continue Your Journey
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-10">
          Inspiration in Your Inbox
        </h2>

        {/* Form */}
        <form className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input
                type="text"
                placeholder="First name*"
                className="w-full border-b border-gray-400 py-3 text-lg italic placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name*"
                className="w-full border-b border-gray-400 py-3 text-lg italic placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="email"
                placeholder="Email address*"
                className="w-full border-b border-gray-400 py-3 text-lg italic placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
              />
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
                id="consent"
              />
              <label htmlFor="consent" className="text-left text-gray-700">
                I consent to receive email communications from Xpanzone.*
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 inline-block border border-gray-800 px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-white transition-all duration-300"
          >
            Subscribe →
          </button>
        </form>
      </section>


    </div>
  )
}

export default Subscribe