"use client";

import { useRouter } from "next/navigation";
import type { NavLink } from "@/layouts/types";
import "./HorizontalNavLink.scss";

interface Props {
  item: NavLink;
  isSubItem?: boolean;
}

const NavbarLink = (props: Props) => {
  const router = useRouter();

  const handleClick = (url?: string) => {
    if (url) router.push(url);
  };

  return (
    <li
      onClick={() => handleClick(props.item.href)}
      className={`horizontal-nav-link cursor-pointer ${props.isSubItem ? "sub-item" : ""}`}
    >
      <span>{props.item.title}</span>
    </li>
  );
};

export default NavbarLink;
