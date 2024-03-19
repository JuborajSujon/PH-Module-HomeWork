import Link from "../Link/Link";
export default function SelfNavbar() {
  const routes = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "about", path: "/about" },
    { id: 3, name: "services", path: "/services" },
    { id: 4, name: "contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];
  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
