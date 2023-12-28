import { Link, useParams, useLocation } from "react-router-dom";
interface BreadCrumb {
  name: string;
}

interface BreadcrumbProps {
  breadCrumbs: BreadCrumb[];
}
const Breadcrumb = ({ breadCrumbs }: BreadcrumbProps) => {
  const location = useLocation();
  let crumbLink: JSX.Element[] = [];

  crumbLink = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((crumb, index) => {
      const pathSoFar = `/${crumbLink.join("/")}`;
      return (
        <Link key={index} to={pathSoFar}>
          {crumb}
        </Link>
      );
    });

  const { id } = useParams();
  return (
    <div className="w-container my-4">
      <Link
        key="1"
        to="/"
        className={
          location.pathname === "/" ? "text-brand-primary" : "text-black"
        }
      >
        Home
      </Link>
      &nbsp;&gt;&nbsp;
      <Link
        to="/"
        className={
          location.pathname.startsWith("/product") ? "text-black" : "text-black"
        }
      >
        Product
      </Link>
      &nbsp;&gt;&nbsp;
      {breadCrumbs.map((b) => (
        <Link
          to={location.pathname}
          className={
            location.pathname === `/product/${id}`
              ? "text-brand-primary"
              : "text-black"
          }
        >
          {b.name}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
