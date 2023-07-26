import { createContext, useContext, useState } from "react";

interface AppContextType {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  openMenu: true,
  setOpenMenu: () => {},
} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
};