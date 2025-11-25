import React from 'react'

const blogs = [
  {
    id: 1,
    title: 'Discover the Serenity of the Himalayas',
    description: 'Explore the serene landscapes and hidden hiking trails of Himachal Pradesh.',
    image: '/home/1.jpg',
  },
  {
    id: 2,
    title: 'Your Perfect Mountain Escape',
    description: 'Immerse yourself in the tranquility of the mountains with our handcrafted experiences.',
    image: '/home/2.jpg',
  },
  {
    id: 3,
    title: 'Eco-Stays That Redefine Comfort',
    description: 'Reconnect with nature by staying at our eco-friendly cottages amidst lush greenery.',
    image: '/home/3.jpg',
  },

];

const BlogsDetailPage = () => {
  return (
    <div className=" px-4 ">
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-indigo-600 rounded-sm"></div>
            <span className="text-indigo-600 text-2xl font-semibold uppercase">Featured</span>
          </div>

          <h2 className="text-gray-900 text-lg mt-2 font-semibold mb-5">RAJEEV SHARMA <span className="text-gray-500 font-normal ml-2">November 29, 2024</span></h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            AI Agent Development Cost: How Much Does it Cost to Build?
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Imagine you are running a busy customer service center. Every time a customer reaches out, an intelligent assistant instantly knows their issue and offers the perfect solution without ever needing to escalate to a human...
          </p>
          <button className="mt-6 px-6 py-3 bg-white border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition">
            READ MORE
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/home/1.jpg" // Make sure the path is correct and accessible
            alt="AI Agent Development Infographic"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
      <div className="py-5  max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-md overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
                <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsDetailPage
