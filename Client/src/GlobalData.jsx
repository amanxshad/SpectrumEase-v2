import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState([]); 

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use datas in any component
export const useData = () => {
  return useContext(DataContext);
};
