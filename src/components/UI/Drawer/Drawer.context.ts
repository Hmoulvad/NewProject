import { createContext } from "react";

type DrawerContext = {
  onClose?: () => void;
};
export const Context = createContext<DrawerContext>({});
