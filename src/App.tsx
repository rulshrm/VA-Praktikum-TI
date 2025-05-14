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
      <SpeedInsights />
    </div>
  );
};
