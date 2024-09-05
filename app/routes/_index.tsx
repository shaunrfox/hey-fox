// import { type MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";

// export const meta: MetaFunction = () => {
//   return [{ title: "Shaun Fox | Principal Product Designer" }];
// };

export default function Index() {
  return (
    <div className="home">
      <div className="home-main">
        <h1>
          Howdy, I&rsquo;m Shaun <span>👋</span>
        </h1>
        <p>
          I&rsquo;m a designer and technologist living in Austin, Texas, with my
          beautiful wife and daughters. I&rsquo;ve worked with a variety of
          companies in the design and technology space for over 15 years.
        </p>
        <p>
          My natural curiosity and love for learning has allowed me to acquire
          complementary skills in multiple areas. I began my career in design,
          and quickly recognized the value of understanding the other parts of
          the business &ndash; technology, product management, data analysis,
          operations, hiring, and others.
        </p>
        <p>
          I have a knack for understanding systems, and can often recognize
          patterns where others simply see complexity. Having an intuitive grasp
          of the way things connect allows me to build bridges between people
          and ideas, and to quickly process options and analyze the implications
          of a direction.
        </p>
        <p>
          <span style={{ color: "#f1aaaa", fontStyle: "italic" }}>
            I&rsquo;m currently taking on new clients.
          </span>{" "}
          If you have a problem you think I could help solve or a gap on your
          team, I&rsquo;d love to chat with you about it.
        </p>
      </div>
      <div className="home-aside">
        <img src="assets/shaun-photo.jpg" alt="Shaun Fox" />
        <Link to="mailto:hello@okshaun.com">hello@okshaun.com</Link>
      </div>
    </div>
  );
}
