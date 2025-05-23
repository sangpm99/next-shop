import type { NavItems } from "@/layouts/types";

const getNavItems: NavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shops",
    href: "/shops",
  },
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Track Order",
    href: "/track-order",
  },
  {
    title: "Help Center",
    children: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/about",
      },
    ],
  },
];

export default getNavItems;
