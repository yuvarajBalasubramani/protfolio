import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Portfolio</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I create amazing web experiences with modern technologies</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with experience in creating web applications
                using modern technologies. I love solving complex problems and bringing
                ideas to life through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-content">
                <h3>E-commerce Platform</h3>
                <p>A full-stack e-commerce solution with React frontend and Node.js backend.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn small">Live Demo</a>
                  <a href="#" className="btn small secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material-UI</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn small">Live Demo</a>
                  <a href="#" className="btn small secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>A responsive weather dashboard with location-based forecasts.</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>API</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn small">Live Demo</a>
                  <a href="#" className="btn small secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <p>Let's connect and discuss how we can work together!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Your City, Country</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
