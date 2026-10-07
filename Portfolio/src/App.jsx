import "./App.css";
// Replace 'profile.jpg' with your image file name in src/assets/
import heroImage from "./assets/profile.png";

function App() {
  const projects = [
    {
      number: "01",
      title: "CuyoTech Student Services Information System",
      category: "Full Stack System",
      description:
        "A comprehensive student services system designed to manage institutional records, academic data, and student information efficiently.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      link: "https://github.com/JESSIEWANTSLEARN/CuyoTech-Student-Services-Information-System",
    },
    {
      number: "02",
      title: "Task Management Application",
      category: "Full Stack Web App",
      description:
        "A full-stack task manager application built with a decoupled architecture featuring a dedicated React frontend interface and RESTful API backend service.",
      technologies: ["React", "Node.js", "Express", "REST API"],
      links: [
        {
          label: "Frontend Repo ↗",
          url: "https://github.com/aryanacarillovecina-star/Task-Manager-FRONTEND",
        },
        {
          label: "Backend Repo ↗",
          url: "https://github.com/aryanacarillovecina-star/Task-Manager-BACKEND",
        },
      ],
    },
    {
      number: "03",
      title: "Library Management System",
      category: "Software / Database",
      description:
        "A streamlined application built to automate cataloging, book borrowing tracking, and member administration for library environments.",
      technologies: ["Java", "SQL", "Database Management"],
      link: "https://github.com/jhnyz/Library-Management-System",
    },
  ];

  const skills = [
    "Team Collaboration",
    "Time Management",
    "Communication",
    "Adaptability",
  ];

  const technologies = [
    "HTML",
    "CSS",
    "React",
    "Bootstrap",
    "Java",
    "C#",
    "Python",
    "SQL",
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          AV
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

            <h1>
              Aryana
              <br />
              <span>Vecina.</span>
            </h1>

            <p className="hero-description">
              A detail-oriented and motivated Computer Science student
              passionate about programming, technology, and creating practical
              digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work ↗
              </a>

              <a href="#about" className="text-button">
                More About Me ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Aryana Vecina" />
            </div>

            <div className="available-badge">
              <span>CS STUDENT</span>
              <strong>✦</strong>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>
            <span>WEB DEVELOPMENT</span>
            <b>✦</b>
            <span>PROGRAMMING</span>
            <b>✦</b>
            <span>DATABASE MANAGEMENT</span>
            <b>✦</b>
            <span>PROBLEM SOLVING</span>
            <b>✦</b>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="section-label">
            <span>01</span>
            <span>ABOUT ME</span>
          </div>

          <div className="about-grid">
            <div>
              <h2>
                Curious mind.
                <br />
                <em>Creative problem solver.</em>
              </h2>
            </div>

            <div className="about-text">
              <p>
                A detail-oriented and motivated Computer Science student with
                strong skills in programming, database management, and problem
                solving.
              </p>

              <p>
                Adept at collaborating in team environments and adapting to new
                technologies, with a commitment to delivering high-quality
                results.
              </p>

              <div className="about-details">
                <div>
                  <span>FIELD</span>
                  <strong>Computer Science</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Web & Software Development</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">
            <span>02</span>
            <span>EXPERTISE</span>
          </div>

          <div className="skills-header">
            <h2>
              Skills that
              <br />
              <em>make things happen.</em>
            </h2>

            <p>
              Combining technical knowledge with communication, teamwork, and
              adaptability to approach challenges effectively.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">01</div>
              <h3>Soft Skills</h3>

              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-card dark-card">
              <div className="skill-icon">02</div>
              <h3>Technical Skills</h3>

              <div className="skill-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">
            <span>03</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="projects-heading">
            <h2>
              Projects I've
              <br />
              <em>worked on.</em>
            </h2>

            <p>
              A selection of projects that demonstrate my experience with
              programming, web development, and database management.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div
                    className="project-links"
                    style={{ marginTop: "1.5rem" }}
                  >
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-button"
                        style={{ display: "inline-block" }}
                      >
                        View on GitHub ↗
                      </a>
                    ) : (
                      <div style={{ display: "flex", gap: "1rem" }}>
                        {project.links.map((item) => (
                          <a
                            key={item.label}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-button"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-content">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's work
              <br />
              <em>together.</em>
            </h2>

            <p className="contact-description">
              I'm always interested in learning, building, and collaborating on
              meaningful projects.
            </p>

            <a
              href="mailto:aryana.carillo.vecina@gmail.com"
              className="primary-button"
            >
              Send Me an Email ↗
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>EMAIL</span>
              <a href="mailto:aryana.carillo.vecina@gmail.com">
                aryana.carillo.vecina@gmail.com
              </a>
            </div>

            <div>
              <span>PHONE</span>
              <a href="tel:09914801972">09914801972</a>
            </div>

            <div>
              <span>FACEBOOK</span>
              <p>Aryana Vecina</p>
            </div>

            <div>
              <span>GITHUB</span>
              <a
                href="https://github.com/aryanacarillovecina-star"
                target="_blank"
                rel="noreferrer"
              >
                aryanacarillovecina-star ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">AV</div>

        <p>DESIGNING • BUILDING • LEARNING</p>

        <p>© 2026 Aryana Vecina</p>
      </footer>
    </div>
  );
}

export default App;
