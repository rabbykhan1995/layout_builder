'use client'

import HeroSectionState from "@/Zustand/EditorState";
import { useState } from "react";

const EditorSideBar = () => {
  const { stateData, addHero, removeHero, addTitle, addName, addParagraph, addStyle } = HeroSectionState();
  const [inputData, setInputData] = useState({id:stateData.id,name:stateData.name,title:stateData.title, paragraph:stateData.paragraph, style:{name:stateData.style.name, title:stateData.style.title, paragraph:stateData.style.paragraph}});

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

    {/* This is for changing Paragraph */}
    <div className="flex gap-2">
         <textarea
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Title"
            value={inputData.paragraph} // Example of input using `name` value from stateData
            onChange={(e) => setInputData({...inputData,paragraph:e.target.value })} // Dynamically update name
          />
          <button
            onClick={() => addParagraph(inputData.paragraph)} // Example for adding title
            className="py-1 bg-blue-400 rounded-md px-3"
          >
            Change
          </button>
         </div>

         <h1>THis is for the style</h1>
             {/* This is for style */}
             <div className="flex flex-col gap-2">
         <input
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Title"
            value={inputData.style.title} // Example of input using `name` value from stateData
            onChange={(e) =>
              setInputData((prevData) => ({
                ...prevData,
                style: {
                  ...prevData.style, 
                  title: e.target.value,
                },
              }))
              
            } 
          />
              <input
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Name"
            value={inputData.style.name} // Example of input using `name` value from stateData
            onChange={(e) =>
              setInputData((prevData) => ({
                ...prevData,
                style: {
                  ...prevData.style, 
                  name: e.target.value,
                },
              }))
              
            } 
          />
              <input
            type="text"
            className="border rounded-md focus:outline-none  py-1 px-3"
            placeholder="Paragraph"
            value={inputData.style.paragraph}
            onChange={(e) =>
              setInputData((prevData) => ({
                ...prevData,
                style: {
                  ...prevData.style, 
                  paragraph: e.target.value,
                },
              }))
              
            } // Dynamically update name
          />
          <button
            onClick={() => addStyle(inputData.style)} // Example for adding title
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
