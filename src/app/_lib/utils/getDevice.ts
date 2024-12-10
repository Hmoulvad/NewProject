import { headers } from "next/headers";

export default async function getDevice() {
  const headersList = await headers();
  const viewport = headersList.get("x-viewport") || "";

  return {
    isMobile: viewport === "mobile",
  };
}
