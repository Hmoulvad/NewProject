"use client";

import { PropsWithChildren } from "react";
import { DeviceContext } from "./DeviceContext";

type Props = {
  isMobile: boolean;
} & PropsWithChildren;

export default function DeviceProvider({ children, isMobile }: Props) {
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}
