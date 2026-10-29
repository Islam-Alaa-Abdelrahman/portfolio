import Arrow from "./Arrow";
import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <div className="section-label">
          <span>04 / LET’S MAKE SOMETHING USEFUL</span>
          <span>OPEN TO CONVERSATIONS</span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-heading">
            Have a good
            <br />
            <em>problem?</em>
          </h2>
          <a
            href={"mailto:" + profile.email}
            className="contact-arrow"
            aria-label="Email Islam Abdelrahman"
          >
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <p>
              Looking for a full-stack engineer?
              <br />
              Let’s talk about what you’re building.
            </p>
            <a className="contact-email" href={"mailto:" + profile.email}>
              {profile.email}
            </a>
          </div>
          <div className="contact-socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a
              href={"https://wa.me/971551417445"}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <Arrow diagonal />
            </a>
            <a href={"tel:" + profile.phone}>
              +971 55 141 7445 <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
