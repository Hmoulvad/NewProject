"use client";

import { useContext } from "react";
import { DeviceContext } from "../context";

export default function useDevice() {
  return useContext(DeviceContext);
}
