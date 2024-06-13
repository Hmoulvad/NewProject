import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

type Props = {
  viewport: string;
};

export default function Header({ viewport }: Props) {
  if (viewport === "mobile") {
    return <MobileHeader />;
  }
  return <DesktopHeader />;
}
