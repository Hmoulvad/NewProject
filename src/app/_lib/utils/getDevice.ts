import { headers } from "next/headers";

export default function getDevice() {
  const headersList = headers();
  const viewport = headersList.get("x-viewport") || "";

  return {
    isMobile: viewport === "mobile",
  };
}
