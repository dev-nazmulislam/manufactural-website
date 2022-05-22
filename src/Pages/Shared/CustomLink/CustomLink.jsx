import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  const [navbar] = useScroll(false);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="list-none font-semibold uppercase">
      <Link
        style={{
          backgroundColor: match
            ? "rgba(117, 190, 218, 0.5)"
            : "rgba(117, 190, 218, 0.0)",
          color: navbar ? "black" : "white",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
