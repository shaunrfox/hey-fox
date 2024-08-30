import type { LinksFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import FoxLogo from "../Foxes/FoxLogo";
import Rule from "../Rule";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "/app/components/Footer/footer.css",
    },
  ];
};

export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="copyright">
      Copyright &copy; {currentYear} &ndash; Shaun Fox
    </p>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Rule thickness={4} />
      <div className="footer-content">
        <FoxLogo />
        <div className="footer-links">
          <Link to="mailto:hello@okshaun.com">Mail</Link>
          <Link to="https://www.linkedin.com/in/shaunrfox" target="_blank">
            LinkedIn
          </Link>
          <Link to="http://codepen.io/shaunrfox/" target="_blank">
            CodePen
          </Link>
          <Link to="https://github.com/shaunrfox" target="_blank">
            GitHub
          </Link>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
