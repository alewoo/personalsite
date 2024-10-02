"use client";

import { useState } from "react";
import MyStory from "./tabs/MyStory";
import MyExperience from "./tabs/MyExperience";
import MyProjects from "./tabs/MyProjects";
import MyVision from "./tabs/MyVision";

const tabs = ["My Story", "My Experience", "My Projects", "My Vision"];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("My Story");

  return (
    <div className="mb-12">
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 rounded ${
              activeTab === tab ? "bg-blue-600" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "My Story" && <MyStory />}
        {activeTab === "My Experience" && <MyExperience />}
        {activeTab === "My Projects" && <MyProjects />}
        {activeTab === "My Vision" && <MyVision />}
      </div>
    </div>
  );
}
