import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url(https://picsum.photos/3800/1900/)",
      }}
    >
      <div className="bg-gradient-to-br from-green-300 via-red-500 to-blue-600 animate-gradient-x rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Pathfinder
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#" className="w-full sm:w-auto">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              size="lg"
            >
              Career Advisor
            </Button>
          </Link>
          <Link href="/Chat" className="w-full sm:w-auto">
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              size="lg"
            >
              ICSDS Chatbot
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
