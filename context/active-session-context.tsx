"use client"
import React, { createContext, useContext, useState } from "react";
import { links } from "../lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectioncontextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSessionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSessionContextProvider({
  children,
}: ActiveSectioncontextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSessionContext.Provider value={{ 
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
      }}>
      {children}
    </ActiveSessionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSessionContext);
    if (context === null) {
        throw new Error( "useActiveSectionContext must be used within ActiveSessionContextProvider");
    }

    return context;
}