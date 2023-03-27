import React, { ReactNode } from "react";

export const Button = ({ children}: {children: ReactNode}) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-4 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 text-black">
        {children}
      </div>
    </div>
  );
};
