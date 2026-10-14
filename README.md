<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, sans-serif;
      background: #090909;
      color: white;
      line-height: 1.6;
    }

    header {
      padding: 20px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #292929;
    }

    .logo {
      font-size: 23px;
      font-weight: bold;
      color: #d6aaff;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 18px;
      font-size: 14px;
    }

    nav a:hover {
      color: #d6aaff;
    }

    .hero {
      min-height: 85vh;
      padding: 100px 8%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background:
        radial-gradient(ellipse at top right,
        #332044 0%, #090909 55%);
    }

    .tag {
      color: #d6aaff;
      letter-spacing: 3px;
      font-size: 12px;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(42px, 8vw, 76px);
      line-height: 1.1;
      margin: 22px 0;
    }

    h1 span {
      color: #d6aaff;
    }

    .hero p {
      max-width: 500px;
      color: #bdbdbd;
      margin-bottom: 30px;
    }

    .btn {
      display: inline-block;
      width: fit-content;
      background: #d6aaff;
      color: #090909;
      padding: 12px 23px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }

    .btn:hover {
      transform: translateY(-4px);
      background: white;
    }

    section {
      padding: 75px 8%;
    }

    .section-title {
      font-size: 35px;
      margin-bottom: 25px;
    }

    .about p {
      max-width: 700px;
      color: #bdbdbd;
    }

    .skills, .projects {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));
      gap: 18px;
    }

    .card {
      background: #141414;
      border: 1px solid #292929;
      border-radius: 15px;
      padding: 24px;
      transition: 0.3s;
    }

    .card:hover {
      border-color: #d6aaff;
      transform: translateY(-5px);
    }

    .card h3 {
      color: #d6aaff;
      margin-bottom: 10px;
    }

    .card p {
      color: #bdbdbd;
      font-size: 14px;
    }

    .contact p {
      color: #bdbdbd;
      margin-bottom: 22px;
    }

    footer {
      padding: 25px;
      text-align: center;
      border-top: 1px solid #292929;
      color: #999;
      font-size: 13px;
    }

    .reveal {
      animation: appear 1s ease both;
    }

    @keyframes appear {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 600px) {
      header {
        padding: 18px 5%;
        flex-wrap: wrap;
        gap: 12px;
      }

      nav a {
        margin-left: 8px;
        font-size: 12px;
      }

      .hero, section {
        padding-left: 6%;
        padding-right: 6%;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">MyPortfolio.</div>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <div class="hero reveal">
      <div class="tag">Welcome to my world</div>

      <h1>Hi, I'm a<br>
        <span>Web Developer.</span>
      </h1>

      <p>
        I create clean, modern and responsive websites.
        Explore my skills and projects below.
      </p>

      <a href="#projects" class="btn">Explore My Work ↗</a>
    </div>

    <section id="about" class="about">
      <h2 class="section-title">About Me</h2>
      <p>
        Hello! I'm learning web development and building
        creative websites using HTML, CSS and JavaScript.
        My goal is to turn ideas into beautiful digital experiences.
      </p>
    </section>

    <section id="skills">
      <h2 class="section-title">My Skills</h2>

      <div class="skills">
        <div class="card">
          <h3>HTML</h3>
          <p>Building website structure.</p>
        </div>

        <div class="card">
          <h3>CSS</h3>
          <p>Creating beautiful layouts and designs.</p>
        </div>

        <div class="card">
          <h3>JavaScript</h3>
          <p>Learning interactive website features.</p>
        </div>
      </div>
    </section>

    <section id="projects">
      <h2 class="section-title">My Projects</h2>

      <div class="projects">
        <div class="card">
          <h3>Project 01</h3>
          <p>My first portfolio website.</p>
        </div>

        <div class="card">
          <h3>Project 02</h3>
          <p>A modern landing page design.</p>
        </div>

        <div class="card">
          <h3>Project 03</h3>
          <p>A creative website concept.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <h2 class="section-title">Let's Connect</h2>
      <p>Interested in working together? Contact me by email.</p>

      <!-- Replace this with your own email address -->
      <a class="btn"
         href="mailto:yourname@example.com">
        Contact Me ↗
      </a>
    </section>
  </main>

  <footer>
    © 2026 My Portfolio. Built with HTML and CSS.
  </footer>

</body>
</html>
