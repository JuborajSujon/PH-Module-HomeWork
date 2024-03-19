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
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <RiCloseLine className=" text-xl" />
        ) : (
          <RiMenu2Line className=" text-xl" />
        )}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
