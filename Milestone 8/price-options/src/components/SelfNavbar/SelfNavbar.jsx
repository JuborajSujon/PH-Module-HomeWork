import Link from "../Link/Link";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
export default function SelfNavbar() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "about", path: "/about" },
    { id: 3, name: "services", path: "/services" },
    { id: 4, name: "contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];
  return (
    <nav className="text-black bg-yellow-200 p-4 shadow-lg">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <RiCloseLine className=" text-xl" />
        ) : (
          <RiMenu2Line className=" text-xl" />
        )}
      </div>
      <ul
        className={`md:flex absolute md:static left-0 duration-1000 bg-yellow-200 px-6 ${
          open ? "top-12 " : "-top-60"
        }`}>
        {/**
         * ${open ? "" : "hidden"}
         */}
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
