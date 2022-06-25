import React from "react";
import {
  BiLayout,
  BiUser,
  BiBarChartAlt2,
  BiCartAlt,
  BiShoppingBag,
  BiLineChart,
  BiMessageRounded,
  BiCog,
  BiStar,
  BiHistory,
  BiLogOut,
  BiCube,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const dataSidebar = [
  {
    id: 1,
    linkTo: "/dashboard",
    icon: <BiLayout />,
    name: "Dashboard",
  },
  {
    id: 2,
    linkTo: "/profile",
    icon: <BiUser />,
    name: "Profile",
  },
  {
    id: 3,
    linkTo: "/leaderboard",
    icon: <BiBarChartAlt2 />,
    name: "Leaderboard",
  },
  {
    id: 4,
    linkTo: "/order",
    icon: <BiCartAlt />,
    name: "order",
  },
  {
    id: 5,
    linkTo: "/product",
    icon: <BiShoppingBag />,
    name: "Product",
  },
  {
    id: 6,
    linkTo: "/sales-report",
    icon: <BiLineChart />,
    name: "Sales Report",
  },
  {
    id: 7,
    linkTo: "/message",
    icon: <BiMessageRounded />,
    name: "Message",
  },
  {
    id: 8,
    linkTo: "/settings",
    icon: <BiCog />,
    name: "Settings",
  },
  {
    id: 9,
    linkTo: "/favourite",
    icon: <BiStar />,
    name: "Favourite",
  },
  {
    id: 10,
    linkTo: "/history",
    icon: <BiHistory />,
    name: "History",
  },
  {
    id: 11,
    linkTo: "/signout",
    icon: <BiLogOut />,
    name: "Signout",
  },
];

let unactiveClassName =
  "flex items-center space-x-2 w-36 h-[36px] px-3 rounded-md text-sm cursor-pointer";
let activeClassName = unactiveClassName + " bg-app-green text-app-d800";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 self-start min-h-screen w-44 border-r-2 border-app-d600">
      {/* Logo */}
      <BiCube className="mt-3 mx-auto text-super text-app-orange" />

      {/* Nav */}
      <nav className="px-4 pt-3">
        <ul>
          {dataSidebar.map((data) => {
            return (
              <li key={data.id}>
                <NavLink
                  to={data.linkTo}
                  className={({ isActive }) =>
                    isActive ? activeClassName : unactiveClassName
                  }
                >
                  <span>{data.icon}</span>
                  <p>{data.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
