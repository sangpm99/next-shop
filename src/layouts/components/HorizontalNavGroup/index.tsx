import type { NavGroup } from "@/layouts/types";
import { Icon } from "@iconify/react";

import "./HorizontalNavGroup.scss";
import HorizontalNavPopper from "@/layouts/components/HorizontalNavPopper";
import HorizontalNavLink from "@/layouts/components/HorizontalNavLink";

interface Props {
  item: NavGroup;
  isSubItem?: boolean;
  childrenAtEnd?: boolean;
}

const NavbarGroup = (props: Props) => {
  return (
    <HorizontalNavPopper
      popperInlineEnd={props.childrenAtEnd ?? false}
      tag="li"
      contentContainerTag="ul"
    >
      <div className="horizontal-nav-group cursor-pointer flex">
        <span>{props.item.title}</span>
        {props.item.children && (
          <Icon
            icon="ri-arrow-drop-down-fill"
            fontSize={20}
            className="icon"
          ></Icon>
        )}
      </div>

      {props.item.children &&
        props.item.children.map((item, index) => {
          if ("children" in item) {
            return (
              <NavbarGroup
                key={index}
                item={item}
                childrenAtEnd={false}
                isSubItem
              ></NavbarGroup>
            );
          } else {
            return <HorizontalNavLink key={index} item={item} isSubItem />;
          }
        })}
    </HorizontalNavPopper>
  );
};

export default NavbarGroup;
