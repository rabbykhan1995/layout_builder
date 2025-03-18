"use client"; // Ensures Zustand runs only on the client side

import { create } from "zustand";

const HeroSectionState = create((set) => ({
  stateData: { id: undefined, name: "", title: "" ,paragraph:""},

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
  removeName: () => set((state) => ({ ...state, stateData: { ...state.stateData, name: "" } }))
}));

export default HeroSectionState;