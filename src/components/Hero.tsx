import Image from "next/image";
import Arrow from "./Arrow";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="hero shell" id="hero" aria-labelledby="hero-heading">
      <div className="hero-eyebrow">
        <span>
          <i className="status-dot" /> SOFTWARE ENGINEER / FULL STACK
        </span>
        <span>
          DUBAI, UAE <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-heading">
            The details
            <br />
            make the
            <br />
            <em>difference.</em>
          </h1>
          <p>
            I’m Islam. I build thoughtful web applications,
            <br className="desktop-break" /> from the first interaction to the
            logic behind it.
          </p>
          <a href="#projects" className="action-link">
            Explore selected work{" "}
            <span className="circle-arrow">
              <Arrow />
            </span>
          </a>
        </div>
        <a
          href="#projects"
          className="hero-feature"
          aria-label="Explore Fullashes, my featured e-commerce project"
        >
          <div className="feature-coordinate">
            <span>SELECTED BUILD — 01</span>
            <span>FULLASHES ↗</span>
          </div>
          <div className="feature-stage">
            <span className="stage-grid" aria-hidden="true" />
            <span className="stage-orbit" aria-hidden="true" />
            <div className="hero-browser">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>fullashes / storefront</span>
                <span>↗</span>
              </div>
              <Image
                src="/projects/beauty-shop/media/Screenshot_24.png"
                alt="Fullashes beauty store homepage"
                width={1905}
                height={935}
                sizes="(max-width: 760px) 85vw, 44vw"
                priority
              />
            </div>
            <div className="hero-browser hero-browser-front">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>product discovery</span>
                <span>↗</span>
              </div>
              <Image
                src="/projects/beauty-shop/media/Screenshot_3.png"
                alt="Fullashes product catalog with search and filters"
                width={1905}
                height={946}
                sizes="(max-width: 760px) 65vw, 31vw"
                priority
              />
            </div>
            <div className="build-stamp">
              <span>UI</span>
              <i>↔</i>
              <span>DATA</span>
            </div>
          </div>
          <div className="feature-bottom">
            <span>COMMERCE, FROM END TO END.</span>
            <span>
              VIEW PROJECT <Arrow diagonal />
            </span>
          </div>
        </a>
      </div>
      <div className="hero-baseline">
        <span>DESIGN MINDED. ENGINEERING LED.</span>
        <div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <a href="#projects" className="scroll-cue">
          SCROLL TO DISCOVER <span>↓</span>
        </a>
      </div>
    </section>
  );
}
