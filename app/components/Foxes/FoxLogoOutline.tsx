// import type { LinksFunction } from "@remix-run/node";

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: "app/components/Foxes/foxes.css",
//     },
//   ];
// };

export function GhostFoxLogo() {
  return (
    <pre className="ghost-fox-logo">
      <code>│\&nbsp;_&nbsp;/│</code>
      <code>‹&nbsp;•&nbsp;•&nbsp;›</code>
      <code>&nbsp;&nbsp;`•´</code>
    </pre>
  );
}

export default function FoxLogoOutline() {
  return (
    <>
      <svg
        className="fox-logo-outline"
        role="img"
        width="50"
        height="50"
        viewBox="0 0 243.08 221.34"
      >
        <path d="m241.2 109.1-22.5-18.4L223.1 8c.4-7.2-8.6-10.9-13.3-5.4l-63.1 73c-6.6 1.1-15 2-25.2 2s-18.6-.9-25.2-2L33.2 2.7C28.5-2.8 19.5.8 19.9 8.1l4.4 82.7-22.4 18.3c-3.1 2.5-2.2 7.4 1.6 8.7l20.5 6.7-14 15.1c-2.7 3-1.1 7.8 2.9 8.4l23 3.5-7.2 11.4c-2.1 3.4.3 7.8 4.3 7.7l22.9-.3-2.7 8.2c-1.2 3.6 1.9 7.2 5.6 6.6l11-1.9c11.7-2 23.2 4.6 27.3 15.7s4.2 11.1 6.3 14.7l1 1.5c.1.2.3.4.4.6 2.9 3.8 7.2 5.6 11.5 5.6h10.1c4.3 0 8.6-1.9 11.5-5.6l1.4-2.1c2.1-3.6 4.1-8.8 6.3-14.7 4.1-11.1 15.6-17.7 27.3-15.7l11 1.9c3.8.6 6.8-2.9 5.6-6.6l-2.7-8.2 22.9.3c4 0 6.5-4.3 4.3-7.7l-7.2-11.4 23-3.5c4-.6 5.7-5.4 2.9-8.4l-14-15.1 20.5-6.7c3.8-1.2 4.7-6.2 1.6-8.7Z" />
      </svg>
      <svg
        className="fox-logo-skull"
        role="img"
        width="50"
        height="50"
        viewBox="0 0 243.08 221.34"
      >
        <path d="m56.1 109.6-3-20.8c-.9-6.2 1-12.1 4.4-13.6 2.8-1.3 6.7.7 10.8 5.5l9.1 10.5c1.1 1.3 3 1.4 4.2.3 1.3-1.1 1.4-3 .3-4.2L46.6 46.2c-.9-1-2.3-1.3-3.5-.8-1.2.6-1.9 1.8-1.7 3.2l5.9 41.1 3 20.8c.2 1.5 1.5 2.6 3 2.6h.4c1.6-.2 2.8-1.8 2.5-3.4ZM200.1 45.4c-1.2-.6-2.6-.2-3.5.8l-35.3 41.1c-1.1 1.3-.9 3.2.3 4.2 1.3 1.1 3.2.9 4.2-.3l9.1-10.5c4.1-4.7 8-6.7 10.8-5.5 3.4 1.5 5.2 7.4 4.4 13.6s-3 20.8-3 20.8c-.2 1.6.9 3.2 2.5 3.4h.4c1.5 0 2.8-1.1 3-2.6l3-20.8 5.9-41.1c.2-1.3-.5-2.6-1.7-3.2ZM185.3 121.6c-1.8 0-9.8 1.3-12.6-5-7.9-17.7-32.8-26.5-51.1-26.5s-43.3 8.8-51.1 26.5c-2.8 6.3-10.8 4.9-12.6 5-1.6 0-2.9 1.5-2.7 3 1.1 7.6 4.9 17.3 8.3 24.8 5.6 12.4 28.7 11.8 35.4 25.9 3.3 6.9 6.7 18.9 10.7 24 2.8 3.5 7.3 3.8 12 3.6 4.7.1 9.2-.1 12-3.6 4.1-5.1 7.5-17.1 10.7-24 6.8-14.2 29.8-13.5 35.4-25.9 3.4-7.5 7.3-17.2 8.3-24.8.2-1.5-1-2.9-2.7-3Zm-87.9 8.8c-2.4 6.5-14 19.8-20.7 11.2-4.5-5.8-4.9-10.9-.9-17.4 3.7-6.1 11.8-11.3 16.5-10.3 7.6 1.7 7.6 9.8 5.1 16.5Zm30.4 4.2c.4.1.8.1 1.2 0 .9-.3 1.6-1.3 2.3-3.1-.1 9.6-1 16.4-1.9 22.4-.2 1.8-.5 3.5-.7 5.3-.8-1.1-1.6-1.6-2.4-2.1-.1 0-.3-.2-.5-.3.2-9.2 1.1-16.1 1.9-22.3Zm-13.7 0c.4.1.8.1 1.2 0 .8 6.1 1.7 13.1 1.9 22.3-.2 0-.3.2-.5.3-.8.5-1.7 1-2.4 2.1-.2-1.8-.4-3.5-.7-5.3-.8-6.1-1.7-12.9-1.9-22.4.7 1.8 1.5 2.8 2.3 3.1Zm17.2 50.2c0 5.4-4.4 9.8-9.8 9.8s-9.8-4.4-9.8-9.8v-5.6c0-.4.3-.8.7-.8 1.6-.2 2.8-.9 3.7-2.2 1.4-2.1 3.9-2.9 5.4-.7 1.5-2.2 4-1.3 5.4.7.8 1.2 2.1 2 3.7 2.2.4 0 .7.4.7.8v5.6Zm35-43.2c-6.6 8.6-18.3-4.7-20.7-11.2-2.5-6.7-2.5-14.8 5.1-16.5 4.7-1.1 12.8 4.2 16.5 10.3 4 6.5 3.6 11.6-.9 17.4Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ position: "absolute", top: -6000, left: -6000 }}
      >
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale="2"
            />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
