import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Welcome to My Home Page
      </h1>
      <p className="text-gray-700 mb-6 max-w-xl text-center">
        This is a simple homepage built with React and Tailwind CSS. Customize it to fit your project!
      </p>
      <img
        src="https://picsum.photos/800/400"
        alt="Home placeholder"
        className="rounded-lg shadow-md max-w-full"
      />
    </div>
  );
}

export default Home;
