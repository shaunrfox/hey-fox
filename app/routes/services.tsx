import Box from "~/components/Box";
import Rule from "../components/Rule";

// const iceStyle = {
//   "& > ::before": {
//     backgroundColor: "pink",
//     width: "150px",
//     height: "150px",
//     backgroundImage: "url('app/assets/vanilla-ice.png')",
//   },
// };

export default function ServicesRoute() {
  return (
    <div className="services-container">
      <div className="callout">
        <p>
          I&rsquo;ve been fortunate enough to acquire a diverse set of skills
          through my various roles, projects, and obsessions. Below are some
          examples of the kinds of work I do.
        </p>
        <p>
          {" "}
          If you have a problem,{" "}
          <span
            className="ice"
            // style={{ ...iceStyle, display: "inline-block" }}
          >
            yo, I&rsquo;ll solve it,
          </span>{" "}
          <a
            href="mailto:hello@shaunfox.com"
            style={{ fontSize: "0.8em", whiteSpace: "nowrap" }}
          >
            please get in touch
          </a>{" "}
          and I&rsquo;ll help you resolve it.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Users</h2>
          <ul>
            <li>User research + validation</li>
            <li>
              <span>Develop personas</span> + <span>goal mapping</span>
            </li>
            <li>Opportunity Discovery</li>
            <li>Identify usability problems</li>
          </ul>
        </div>
        <p>
          All of my work is aimed at making the users I serve happier and more
          productive, whether they&rsquo;re a customer, a teammate, or a
          stakeholder. Every decision is rooted in understanding who my users
          are and what they need. There are many methods to gain this
          understanding, but one of the best ways is to invite users into the
          process to both generate and validate ideas.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Design</h2>
          <ul>
            <li>Product design (UI/UX)</li>
            <li>Visual design</li>
            <li>Design Systems</li>
            <li>Prototyping + testing</li>
          </ul>
        </div>
        <p>
          Delivering good design is my bread and butter, but pixel perfection is
          just the beginning. Along with solving the problem at hand, design
          work should always consider the surrounding context &ndash; things
          like relevant history or related research, development constraints,
          usability standards, potential business impact, and the anticipated
          effect on the users.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Implementation</h2>
          <ul>
            <li>Front-end development</li>
            <li>
              <span>Design Systems</span> + <span>Style Guides</span>
            </li>
            <li>Component libraries</li>
            <li>Technical strategy</li>
          </ul>
        </div>
        <p>
          I have a passion for building things that are both beautiful and
          functional. I fell in love with coding for the web in 2007, and cut my
          teeth in the software industry teaching my engineering partners all
          the CSS tricks I&rsquo;d learned. I&rsquo;ve been fortunate to have a
          career that&rsquo;s allowed me to combine my love of design with my
          love of technology.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Operations</h2>
          <ul>
            <li>Operational analysis</li>
            <li>Team processes + tools</li>
            <li>Customer-centric processes</li>
            <li>Training + Workshops</li>
            <li>Design + build internal tools</li>
          </ul>
        </div>
        <p>
          With my systems-oriented mind, identifying and solving operational
          problems has been second nature. My focus on users has given me a
          unique perspective on how to address the issues that teams and
          organizations face. I understand the importance of clear
          communication, effective processes, and the variety of motivations and
          pressures that can make or break a team.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Strategy</h2>
          <ul>
            <li>
              <span>Product strategy</span> + <span>value alignment</span>
            </li>
            <li>Strategic planning</li>
            <li>Product performance measurement</li>
          </ul>
        </div>
        <p>
          It&rsquo;s incredibly satisfying to help a company identify ways to
          align their business goals with the needs of their users. Building
          customer satisfaction into strategic planning and having the right
          metrics to measure success are the keys to doing this well.
        </p>
      </div>
    </div>
  );
}
