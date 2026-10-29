"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/types/Project";

export default function ProjectGallery({
  isOpen,
  onClose,
  images,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectMedia[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  const move = (step: number) =>
    setIndex((current) => (current + step + images.length) % images.length);
  const current = images[index];
  return (
    <dialog
      ref={dialog}
      className="project-gallery"
      aria-labelledby="gallery-title"
      onCancel={onClose}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
    >
      <header className="gallery-header">
        <div>
          <span className="mini-label">FULLASHES / PROJECT GALLERY</span>
          <h2 id="gallery-title">A closer look.</h2>
        </div>
        <button
          onClick={onClose}
          className="gallery-close"
          aria-label="Close gallery"
        >
          ×
        </button>
      </header>
      {isOpen && (
        <div className="gallery-image">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="90vw"
            className="gallery-media"
          />
        </div>
      )}
      <div className="gallery-controls">
        <button onClick={() => move(-1)} aria-label="Previous screenshot">
          ←
        </button>
        <p aria-live="polite">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
          <span>{current.alt}</span>
        </p>
        <button onClick={() => move(1)} aria-label="Next screenshot">
          →
        </button>
      </div>
    </dialog>
  );
}
