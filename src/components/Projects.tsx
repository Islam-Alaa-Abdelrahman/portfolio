"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "./Arrow";
import ProjectGallery from "./ProjectGallery";
import { getProjectMedia } from "@/utils/mediaUtils";

const media = getProjectMedia("beauty-shop");
const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "MongoDB",
  "NextAuth.js",
  "PayPal",
  "Cloudinary",
];

export default function Projects() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <section
      className="work-section"
      id="projects"
      aria-labelledby="work-heading"
    >
      <div className="shell">
        <div className="section-label">
          <span>01 / SELECTED WORK</span>
          <span>IDEA → INTERFACE → IMPLEMENTATION</span>
        </div>
        <div className="work-heading">
          <h2 id="work-heading">
            Less talk.
            <br />
            <em>More built.</em>
          </h2>
          <p>
            One project. Many moving parts.
            <br />A look at how I bring them together.
          </p>
        </div>
        <article className="featured-project">
          <div className="project-title-row">
            <div>
              <h3>
                Fullashes<span>01</span>
              </h3>
              <p>Beauty e-commerce / Full-stack development</p>
            </div>
            <a
              href="https://fullashes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-visit"
            >
              Visit website <Arrow diagonal />
            </a>
          </div>
          <button
            className="project-canvas"
            onClick={() => setGalleryOpen(true)}
            aria-label="Open Fullashes screenshot gallery"
          >
            <div className="project-browser">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>fullashes.vercel.app</span>
                <span>↗</span>
              </div>
              <Image
                src="/projects/beauty-shop/media/Screenshot_24.png"
                alt="Fullashes original storefront, featuring beauty products and the collection entry point"
                width={1905}
                height={935}
                sizes="(max-width: 760px) 90vw, 80vw"
              />
            </div>
            <span className="canvas-caption">ACTUAL PROJECT / STOREFRONT</span>
            <span className="gallery-trigger">
              Explore screenshots <Arrow diagonal />
            </span>
          </button>
          <div className="project-story">
            <div>
              <span className="mini-label">THE BUILD</span>
              <p>
                A complete shopping journey, with a product catalog, secure
                accounts, cart and order tracking, PayPal payments, and an admin
                dashboard.
              </p>
            </div>
            <div>
              <span className="mini-label">UNDER THE HOOD</span>
              <div className="tech-list">
                {stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <button
                onClick={() => setGalleryOpen(true)}
                className="underlined-link"
              >
                View all {media.length} screens <Arrow />
              </button>
            </div>
          </div>
          <details className="project-details">
            <summary>
              <span>Inside the implementation</span>
              <span className="details-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="implementation-grid">
              <div>
                <h4>Find & discover</h4>
                <p>
                  Search, category filters, and sorting help customers explore
                  the product catalog.
                </p>
              </div>
              <div>
                <h4>Account & checkout</h4>
                <p>
                  User authentication, profile management, shopping cart,
                  payments, and order tracking connect the purchase journey.
                </p>
              </div>
              <div>
                <h4>Manage & maintain</h4>
                <p>
                  An admin dashboard brings analytics and user management into
                  the same application.
                </p>
              </div>
            </div>
          </details>
        </article>
      </div>
      <ProjectGallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={media}
      />
    </section>
  );
}
