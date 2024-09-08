import React, { createContext, useContext, useState } from 'react';

interface StateContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  incrementCount: () => void;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

// Create the context
// const StateContext = createContext()
const StateContext = createContext<StateContextType | undefined>(undefined);

// Create a custom hook to use the context
// export const useStateContext = () => useContext(StateContext);
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

// Create the provider component
export const StateProvider = ({ children }:{children: React.ReactNode}) => {
  // Define your state variables here
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  // Define any functions to update state
  const incrementCount = () => setCount(prev => prev + 1);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // Create the value object to be provided to consumers
  const contextValue: StateContextType = {
    count,
    setCount,
    incrementCount,
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

// You can remove this default export and the View/Text components
// as they're not needed for the context functionality
// export default StateContext;