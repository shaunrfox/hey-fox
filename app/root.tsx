import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "assets/index.css",
    },
    {
      rel: "icon",
      href: "assets/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "shortcut icon",
      href: "assets/favicon.ico",
      type: "image/x-icon",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "Shaun Fox | Principal Product Designer" }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta title="Shaun Fox | Principal Product Designer" />
        <meta
          name="description"
          content="I'm an experienced Product Designer living in Austin, TX, with my beautiful wife and daughters."
        />
        <meta
          name="keywords"
          content="Shaun Fox, Shaun, Sean, Shawn, Fox, Design, Austin, Designer, Principal Product Designer, Product Designer, Lead UX Designer, UX Designer, Portfolio, Web Design, design technologist, strategy, design systems, design leadership, operations, user-centric"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <div className="breakpoint-tester"></div> */}
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
