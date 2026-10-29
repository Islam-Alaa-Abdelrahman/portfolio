const capabilities = [
  {
    title: "The experience.",
    text: "Interfaces that are responsive, clear, and considered.",
    skills: "React / Next.js / TypeScript / JavaScript",
    number: "01",
  },
  {
    title: "The engine.",
    text: "Application logic and data that make it all work.",
    skills: "PHP / Laravel / .NET / SQL / MongoDB",
    number: "02",
  },
  {
    title: "The thinking.",
    text: "Debugging, algorithm analysis, and collaborative problem-solving.",
    skills: "C / C++ / Java / Agile development",
    number: "03",
  },
];
export default function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="shell">
        <div className="section-label">
          <span>03 / HOW I BUILD</span>
          <span>THE WHOLE STACK. THE SMALL DETAILS.</span>
        </div>
        <div className="skills-heading">
          <h2 id="skills-heading">
            From what you see
            <br />
            to what <em>makes it work.</em>
          </h2>
          <span className="capability-symbol" aria-hidden="true">
            ↳
          </span>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span className="capability-number">/{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="capability-tools">{item.skills}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
