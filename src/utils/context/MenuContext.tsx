import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type MenuCategory = {
  category: string;
};

export interface MenuContextInterface {
  menu: MenuCategory;
  setMenu: React.Dispatch<SetStateAction<MenuCategory>>;
}

const defaultState = {
  menu: {
    category: "",
  },
  setMenu: (menu: MenuCategory) => {},
} as MenuContextInterface;

export const MenuContext = createContext(defaultState);

type MenuProviderProps = {
  children: ReactNode;
};

export default function MenuProvider({ children }: MenuProviderProps) {
  const [menu, setMenu] = useState<MenuCategory>({ category: "Appetizers" });

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
