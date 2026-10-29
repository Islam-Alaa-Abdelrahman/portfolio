export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="content-width">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I’m a software engineer based in Dubai with two years of freelance
            web development experience and ongoing work on Parkida. I enjoy
            taking a practical problem from requirements through interface
            design, backend integration, testing, and deployment.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor’s in Software Engineering
                <br />
                Eastern Mediterranean University (EMU), Cyprus
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                ABET-accredited program
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Microsoft Power Platform Fundamentals
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                Beyond development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                English & Arabic · Chess & football
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
