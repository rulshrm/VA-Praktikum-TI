import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Form />
      </div>
      <footer className="text-center text-gray-500 text-sm mt-8">
        <p>
          Developed by{" "}
          <a
            href="instagram://user?username=rulshrm"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.instagram.com/rulshrm/",
                "_blank",
                "noopener,noreferrer"
              );
              setTimeout(() => {
                window.location.href = "https://www.instagram.com/rulshrm/";
              }, 25);
            }}
            className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
          >
            @rulshrm
          </a>
        </p>
      </footer>
      <SpeedInsights />
    </div>
  );
};
