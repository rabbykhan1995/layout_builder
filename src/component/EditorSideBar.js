'use client'

import HeroSectionState from "@/Zustand/EditorState";
import { useState } from "react";

const EditorSideBar = () => {
  const { stateData, addHero, removeHero, addTitle, addName, removeTitle, removeName } = HeroSectionState();
  const [inputData, setInputData] = useState({id:stateData.id,name:stateData.name,title:stateData.title});

  return (
    <div className="bg-amber-300 h-[100vh] rounded-r-xl p-5 gap-5 flex flex-col">
      {/* Dynamically display either "Choose Component" or "Edit Component" */}
      {stateData.id === undefined ? (
        <h1>Choose Component</h1>
      ) : (
        <h1>Edit Component</h1>
      )}

      {/* Render different UI based on whether hero exists */}
      {stateData.id === undefined ? (
        <button
          onClick={() => addHero()} // Call addHero here
          className="px-5 py-1 bg-green-400 rounded-md"
        >
          Add New Hero Section
        </button>
      ) : (
        <div className="flex flex-col gap-5">
            {/* This is for changing name */}
         <div className="flex gap-2">
         <input
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Name"
            value={inputData.name} // Example of input using `name` value from stateData
            onChange={(e) => setInputData({...inputData,name:e.target.value })} // Dynamically update name
          />
          <button
            onClick={() => addName(inputData.name)} // Example for adding title
            className="py-1 bg-blue-400 rounded-md px-3"
          >
            Change
          </button>
         </div>
         {/* This is for changing Title */}
         <div className="flex gap-2">
         <input
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Title"
            value={inputData.title} // Example of input using `name` value from stateData
            onChange={(e) => setInputData({...inputData,title:e.target.value })} // Dynamically update name
          />
          <button
            onClick={() => addTitle(inputData.title)} // Example for adding title
            className="py-1 bg-blue-400 rounded-md px-3"
          >
            Change
          </button>
         </div>
          <button
            onClick={() => removeHero()} // Example to remove hero
            className="px-5 py-1 bg-red-400 rounded-md"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EditorSideBar;
