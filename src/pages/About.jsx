import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Us</h2>
      <p className="text-gray-700 mb-6 max-w-xl text-center">
        We are passionate about building modern web experiences with React and Tailwind CSS.
      </p>
      <img
        src="https://picsum.photos/600/400?grayscale"
        alt="About placeholder"
        className="rounded-lg shadow-md max-w-full"
      />
    </div>
  );
}

export default About;
