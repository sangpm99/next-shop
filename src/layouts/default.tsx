import { ReactNode } from "react";
import ScrollToTop from "@/components/scrollToTop";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div className="flex-row">
        <div className="flex-column">Navbar</div>

        <div className="flex-column">{children}</div>

        <div className="flex-column">Footer</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
