import React from 'react';

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
  {
    id: 4,
    title: 'Hiking Adventures Await',
    description: 'Discover the thrill of adventure with our guided hiking tours across the scenic Himalayas.',
    image: '/home/1.jpg',
  },
];

const BlogCards = () => {
  return (
    <div className="py-16 px-4 w-10/12 mx-auto ">
      <div className='text-start mb-8'>
        <h2 className="text-6xl font-bold mb-3 text-yellow-300">Latest Blogs</h2>
        <p className='text-black'>Immerse yourself in the tranquility of the mountains with our handcrafted experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">{blog.title}</h3>
              <p className="text-sm text-black">{blog.description}</p>
              {/* <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                Read More →
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
