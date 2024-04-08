import Head from "next/head";
import localFont from "next/font/local";

const CHPublic = localFont({
  src: [
    {
      path: "../public/fonts/CH-public/CooperHewitt-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  const resumeUrl = "/resume-nonso-anetoh.pdf"; // replace with your resume URL
  const suggestedFilename = "NonsoAnetoh.pdf"; // replace with your suggested filename

  return (
    <>
      <Head>
        <title>Nonso Anetoh</title>
        <meta name="description" content="Nonso Anetoh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Cache-control" content="no-cache" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ padding: "2rem" }}>
        <h1
          style={{
            fontSize: "1.35rem",
            fontWeight: "500",
          }}
          className={`${CHPublic.className}`}
        >
          Nonso Anetoh - Web Developer
        </h1>
      </header>
      <main
        className={`${CHPublic.className}`}
        style={{
          padding: "2rem",
          fontSize: "1.15rem",
          display: "flex",
          flexDirection: "column",
          gap: ".35rem",
        }}
      >
        <section>
          Hi There,
          <br />
          <br />
          This website is currently under construction - sorry for the mess
        </section>
        <section>
          <br />
          <header style={{ fontWeight: "500" }}>
            Some projects I have worked on
          </header>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginTop: "2rem",
            }}
          >
            <li>
              <span className="feature">
                <a
                  href="https://lumos.actta.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lumos
                </a>
              </span>
              <br />
              <span className="feature">February 2024</span> <br />
              <span className="feature">
                For: <a href="https://www.actta.studio">Actta studio</a>{" "}
                (Canada)
              </span>
            </li>
            <li>
              <span className="feature">
                <a
                  href="https://www.rexvirgomedia.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rexvirgo Media
                </a>
              </span>
              <br />
              <span className="feature">September 2023</span> <br />
              <span className="feature">For: Rexvirgo Media (Turkey)</span>
            </li>
            <li>
              <span className="feature">
                <a
                  href="https://anet0001.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nonso Anetoh (Portfolio)
                </a>
              </span>{" "}
              <br />
              <span className="feature">December 2023</span> <br />
              <span className="feature">School Project</span>
            </li>
          </ul>
        </section>
        <section>
          <br />
          <header style={{ fontWeight: "500" }}>
            What I am currently working on (Freelance)
          </header>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginTop: "2rem",
            }}
          >
            <li>The ACTTA Studio Main Website</li>
            <li>
              A shopify theme for a Portugese studio (Studio name withheld)
            </li>
          </ul>
        </section>
        <section>
          <br />
          <header style={{ fontWeight: "500" }}>My Current Interests</header>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginTop: "2rem",
            }}
          >
            <li>Building shopify themes using liquid</li>
            <li>
              Making experiences for the web using three.js and webgl shaders
            </li>
          </ul>
        </section>

        <section>
          <br />
          <header style={{ fontWeight: "500" }}>Links</header>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "row",
              gap: ".5rem",
              marginTop: "2rem",
            }}
          >
            <li>
              <a href="mailto:nonsoanetoh@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://github.com/anet0001"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nonsoanetoh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
