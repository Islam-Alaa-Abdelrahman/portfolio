import { profile } from "@/lib/profile";
import Arrow from "./Arrow";

export default function About() {
  return (
    <section
      className="about-section shell"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="section-label">
        <span>02 / THE PERSON BEHIND THE CODE</span>
        <span>ISLAM ABDELRAHMAN</span>
      </div>
      <div className="about-layout">
        <div className="about-heading">
          <h2 id="about-heading">
            An engineer.
            <br />A listener.
            <br />
            <em>A problem solver.</em>
          </h2>
          <div className="personal-note">
            <span className="chess-mark" aria-hidden="true">
              ♞
            </span>
            <p>
              A chess player’s curiosity.
              <br />A team player’s mindset.
            </p>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I like understanding how things work.
            <br />
            And figuring out how they could work better.
          </p>
          <p>
            I’m a software engineer based in Dubai. My freelance work has taken
            me from gathering client requirements to building responsive
            websites and connecting them to databases.
          </p>
          <p>
            Before development, I worked in customer service and data operations
            at Hexaware. That experience still shapes the way I work: listen
            carefully, communicate clearly, and get to the root of the problem.
          </p>
          <div className="about-facts">
            <span>Dubai, UAE</span>
            <span>English & Arabic</span>
            <span>Chess & football</span>
          </div>
          <a className="underlined-link" href={profile.resume} download>
            Download my résumé <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="journey">
        <h3>
          A few steps
          <br />
          <em>along the way.</em>
        </h3>
        <div className="journey-list">
          <article>
            <span>2024 — 2025</span>
            <div>
              <h4>Freelance Web Developer</h4>
              <p>
                Small-business websites, responsive interfaces, database
                integration, and Fullashes.
              </p>
              <small>DUBAI / FEB 2024 — FEB 2025</small>
            </div>
          </article>
          <article>
            <span>2023 — 2024</span>
            <div>
              <h4>Data Entry & Customer Service</h4>
              <p>
                Customer support, accurate data management, and technical
                troubleshooting at Hexaware.
              </p>
              <small>DUBAI / FEB 2023 — FEB 2024</small>
            </div>
          </article>
          <article>
            <span>2017 — 2022</span>
            <div>
              <h4>BSc Software Engineering</h4>
              <p>
                Eastern Mediterranean University. Microsoft Power Platform
                Fundamentals certification.
              </p>
              <small>EDUCATION & CONTINUED LEARNING</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
