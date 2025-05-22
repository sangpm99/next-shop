import { Icon } from "@iconify/react";
import HorizontalNavLink from "@/layouts/components/HorizontalNavLink";
import HorizontalNavGroup from "@/layouts/components/HorizontalNavGroup";
import type { NavItems } from "@/layouts/types";

import Logo from "@/components/LogoHeader";
import "./HorizontalNav.scss";

interface Props {
  navItems: NavItems;
}

const Navbar = (props: Props) => {
  return (
    <div className="page-container horizontal-nav grid grid-cols-12 gap-4 py-2">
      {/*Logo*/}
      <div className="col-span-2 relative">
        <Logo></Logo>
      </div>

      {/*Navbar*/}
      <div className="col-span-8 flex justify-center">
        <ul className="flex items-center space-x-4 !mb-0">
          {props.navItems.map((item, index) => {
            if ("children" in item) {
              return <HorizontalNavGroup key={index} item={item} />;
            } else {
              return <HorizontalNavLink key={index} item={item} />;
            }
          })}
        </ul>
      </div>
      {/*Cart, Search, User*/}
      <div className="col-span-2 flex gap-4 justify-end items-center">
        <Icon icon="ri-search-line" fontSize={20}></Icon>
        <Icon icon="ri-shopping-bag-line" fontSize={20}></Icon>
        <Icon icon="ri-user-3-line" fontSize={20}></Icon>
      </div>
    </div>
  );
};

export default Navbar;
