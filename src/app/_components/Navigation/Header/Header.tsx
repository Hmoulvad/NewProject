import getDevice from "@/app/_lib/utils/getDevice";
import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

export default async function Header() {
  const { isMobile } = await getDevice();
  if (isMobile) {
    return <MobileHeader />;
  }
  return <DesktopHeader />;
}
