import { createContext } from "react";

type State = {
  isMobile: boolean;
};

export const DeviceContext = createContext<State>({ isMobile: false });
