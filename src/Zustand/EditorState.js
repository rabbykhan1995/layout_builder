"use client"; // Ensures Zustand runs only on the client side

import { create } from "zustand";

const HeroSectionState = create((set) => ({
  stateData: { id: undefined, name: "", title: "" ,paragraph:"",style:{name:"",title:"",paragraph:""}},

  // Add hero: sets the id
  addHero: () => set((state) => ({ ...state, stateData: { ...state.stateData, id: 1 } })),

  // Remove hero: resets the id
  removeHero: () => set((state) => ({ ...state, stateData: { ...state.stateData, id: undefined } })),

  // Add title
  addTitle: (title) => set((state) => ({ ...state, stateData: { ...state.stateData, title } })),

  // Add name
  addName: (name) => set((state) => ({ ...state, stateData: { ...state.stateData, name } })),
  // Add paragraph

  addParagraph: (paragraph) => set((state) => ({ ...state, stateData: { ...state.stateData, paragraph } })),
  // Remove title
  removeTitle: () => set((state) => ({ ...state, stateData: { ...state.stateData, title: "" } })),

  // Remove name
  removeName: () => set((state) => ({ ...state, stateData: { ...state.stateData, name: "" } })),

  // add style 

  addStyle: (style) => set((state) => ({
    ...state,
    stateData: {
      ...state.stateData,
      style: {
        ...state.stateData.style, // Spread existing style
        ...style, // Overwrite only the changed properties
      },
    },
  })),
}));

export default HeroSectionState;