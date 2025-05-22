import type { ReactNode } from "react";
import navItems from "@/navigation";

import HorizontalNav from "@/layouts/components/HorizontalNav";
import ScrollToTop from "@/components/ScrollToTop";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex-row">
        <div className="flex-column">
          <HorizontalNav navItems={navItems}></HorizontalNav>
        </div>

        <div className="flex-column">{children}</div>

        <div className="flex-column">Footer</div>
      </div>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default DefaultLayout;
