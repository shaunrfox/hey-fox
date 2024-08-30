import React from "react";
import Rule from "~/components/Rule";

const workJSON = [
  {
    title: "Lead UX Designer, Design Director, Design Technologist",
    company: "Indeed",
    date: "2018–2024",
    location: "Austin, Texas",
    desc: (
      <>
        <p>
          I held a variety of roles during my time at Indeed, and I&rsquo;m
          grateful for the ways I was able to grow and contribute to the
          company.
        </p>
        <p>As UX Director for the Employer Platform team</p>
        <ul>
          <li>
            For two and a half years, I co-led product and organizational
            strategy, planning, and top-level objectives for a 250-person
            organization, in collaboration with my product and engineering
            partners.
          </li>
          <li>
            I devised and launched a UX team dedicated to building user-centric
            practices into the Employer Platform organization.
          </li>
          <li>
            I hired and led a cross-functional team of UX specialists, with
            seven designers, three researchers, two writers, and over a dozen
            front-end developers.
          </li>
        </ul>
        <p>As a Lead UX Designer and Design Technologist</p>
        <ul>
          <li>
            I helped lead the design and company-wide adoption of a new design
            system, built in both Figma and React. I also led the creation of a
            community-driven pattern library with independent contribution
            processes and a governing guild.
          </li>
          <li>
            I served as the primary UX liaison as we planned and launched an
            entirely new front-end framework for Indeed&rsquo;s employer
            products &ndash; the largest technical effort in Indeed&rsquo;s
            history.
          </li>
          <li>
            I designed and helped deliver a new internal tooling ecosystem to go
            with the new front-end framework. These tools provided functionality
            and visibility that helped teams build significantly faster and
            improve the quality of the products.
          </li>
          <li>
            I developed responsive web design standards and adoption strategies,
            opening up a path for the Employer organization to focus on web
            technologies when they decided to deprecate their iOS app.
          </li>
          <li>
            I initiated and led an effort to combine behavioral analysis with
            qualitative research as a means to validate user needs and measure
            their success on our platform. We proved the viability of this
            method through data prototypes, but unfortunately I was laid off
            before we could launch.
          </li>
          <li>
            I mentored multiple people in various UX roles, and led and
            contributed to numerous trainings and workshops.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Principal Product Designer",
    company: "ShipStation",
    date: "2017–2018",
    location: "Austin, Texas",
    desc: (
      <p>
        At ShipStation, I led the design team&rsquo;s work, mentoring junior
        designers and setting up processes for our work and collaboration with
        other departments. I worked closely with engineers to develop a design
        system and front-end component library, establishing best practices for
        responsiveness, interactions, reusability, state handling, and code
        structure. I documented design work through live code mockups,
        interactive walkthroughs, and defining components. We built user
        feedback into our design processes, which informed our decisions and
        helped educate the broader company about user needs.
      </p>
    ),
  },
  {
    title: "Creative Director",
    company: "HotSchedules",
    date: "2016–2017",
    location: "Austin, Texas",
    desc: (
      <p>
        At HotSchedules I hired and managed a team of designers, and guided the
        design of our products. During my time there, we smoothed out a lot of
        communication issues between the design, product management, and
        engineering teams and put many best-practice processes in place. I also
        oversaw the creation of a design system and front-end component library
        to be used across multiple products as a tool to unify the code and the
        user experience
      </p>
    ),
  },
  {
    title: "Creative Director",
    company: "Snaptrends",
    date: "2014–2016",
    location: "Austin, Texas",
    desc: (
      <p>
        At Snaptrends, I served as a player-coach, splitting my time between
        UI/UX design for our application and overseeing a junior designer who
        supported our Marketing needs. On the product side, I led a
        top-to-bottom redesign of our product, and worked closely with a team of
        engineers to implement the designs alongside a major refactor of the
        codebase. We developed a collaborative design process that incorporated
        design, product, and engineering to come up with solutions together. I
        contributed many iterations of both flat and live code mockups, and
        assisted in the front-end development of the final product. On the
        marketing side, I designed and implemented the company&rsquo;s website,
        helped lead marketing campaign efforts, and directed the creation of
        numerous print and digital artifacts to support those efforts.
      </p>
    ),
  },
  {
    title: "Senior UX/UI Designer",
    company: "Bypass Mobile",
    date: "2014",
    location: "Austin, Texas",
    desc: (
      <p>
        At Bypass, I led the design for multiple products on the web and Android
        devices. Bypass had a suite of apps with similar functionalities, but
        disparate codebases and interface patterns (web and Android). I helped
        unify the workflows and UI for these apps and created standards for UI
        consistency.
      </p>
    ),
  },
  {
    title: "User Experience Designer",
    company: "Ringtail Design",
    date: "2012–2014",
    location: "Austin, Texas",
    desc: (
      <p>
        At Ringtail, I was part of a two-person design team, creating interfaces
        and workflows for numerous applications. We worked closely with
        engineers to create apps on multiple platforms, including web, Android,
        and Windows Desktop. Together, we defined objectives, went through
        design processes, and coded numerous applications from the ground up.
      </p>
    ),
  },
  {
    title: "In-house Graphic Designer",
    company: "The Austin Stone, For the City Network",
    date: "2008–2012",
    location: "Austin, Texas",
    desc: (
      <p>
        As an in-house Graphic Designer, I led design for a wide variety of
        media and communications channels for the church and other related
        non-profits. This included things like brand identities, event materials
        and signage, designing and implementing multiple websites, book and
        brochure design, building wayfinding, and managing the printing process.
        I also oversaw the work of multiple design interns and volunteers.
      </p>
    ),
  },
  {
    title: "Design Intern",
    company: "Kym Abrams Design",
    date: "Summer 2009",
    location: "Chicago, Illinois",
    desc: (
      <p>
        I interned at Kym Abrams Design, a branding and design studio in
        Chicago. I worked on a variety of projects, including a new brand
        identity and brochure for a local charter school, and ads for the
        Chicago Symphony Orchestra on billboards and banners that hung
        throughout the city.
      </p>
    ),
  },
];

const schoolJSON = [
  {
    title: "Bachelor of Fine Arts in Communication Design",
    company: "Cum Laude / Texas State University",
    date: "2009",
    location: "San Marcos, Texas",
    desc: (
      <p>
        I graduated from Texas State University with a Bachelor of Fine Arts in
        Communication Design. During my time there, I received design awards in
        multiple student shows, had my work published in a book by Graphis, and
        received the top portfolio award in my graduating class. My program
        focused on traditional graphic design, like branding, typography, book
        design, and illustration, but outside of class, this is also when I
        found my love for front-end web development.
      </p>
    ),
  },
];

export function CVComponent({
  desc,
  title,
  company,
  date,
  location,
}: {
  desc: React.ReactNode;
  title: string;
  company: string;
  date: string;
  location: string;
}) {
  return (
    <div className="cv-component">
      <div className="cv-info">
        <span className="cv-title">{title}</span>
        <span>{company}</span>
        <span>
          {date} / {location}
        </span>
      </div>
      <div className="cv-desc">{desc}</div>
    </div>
  );
}

export default function CVRoute() {
  return (
    <div className="cv-container">
      <div className="callout">
        <p>
          I&rsquo;ve worked with a variety of companies and teams over the
          years, and I&rsquo;m grateful for the experience they&rsquo;ve given
          me. Here&rsquo;s a quick overview of my work history.
        </p>
      </div>
      <Rule />
      <h2>Work</h2>
      {workJSON.map((job, index) => (
        <CVComponent
          key={index}
          desc={job.desc}
          title={job.title}
          company={job.company}
          date={job.date}
          location={job.location}
        />
      ))}
      <Rule />
      <h2>Education</h2>
      {schoolJSON.map((job, index) => (
        <CVComponent
          key={index}
          desc={job.desc}
          title={job.title}
          company={job.company}
          date={job.date}
          location={job.location}
        />
      ))}
    </div>
  );
}
