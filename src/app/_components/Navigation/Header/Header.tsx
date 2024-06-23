import getDevice from "@/app/_lib/utils/getDevice";
import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

export default function Header() {
  const { isMobile } = getDevice();
  if (isMobile) {
    return <MobileHeader />;
  }
  return <DesktopHeader />;
}
