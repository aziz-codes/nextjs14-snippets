"use client";
import { useState, createContext, useContext } from "react";
type AppState = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState: AppState = {
  sidebarOpen: false, // Or true, depending on your default value
  setSidebarOpen: () => {}, // Dummy function to satisfy the type
};

const AppContext = createContext(initialState);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStore = () => useContext(AppContext);
