import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Stanislas",
  lastName: "Hinsinger",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Java Developer",
  avatar: "/images/avatar.png",
  location: "Europe/Warsaw", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Polish", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/scraft-official",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/stanislas-hinsinger-a9bab52b0/",
  },
  {
    name: "scraft_official",
    icon: "discord",
    link: "#",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:stanislas@hinsinger.me",
  },
  {
    name: "Docs",
    icon: "book",
    link: "https://docs.hinsinger.me",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Java Developer</>,
  subline: (
    <>
      I am a self-taught <InlineCode>Java Developer</InlineCode> from Gdansk with an interdisciplinary IT skill set.
      <br /><br />
      Currently studing <InlineCode>Computer Science</InlineCode> at the <br/>Polish-Japanese Academy of Information Technology.
    </>
  ),  
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Born in France and residing in Poland, I am a passionate self-taught developer with a diverse and interdisciplinary IT skill set. <br /><br />
        
        My journey began with Minecraft server development, which led me to explore various technological fields and expand my expertise. <br /><br />
        
        I am currently pursuing a part-time degree in Computer Science at the Polish-Japanese Academy of Information Technology while working as a Full-Stack Developer at Hishoo. <br /><br />
        
        In my free time, I am developing an innovative Minecraft network, aiming to deliver exceptional gaming experiences to players worldwide. <br /><br />
        
        While my primary focus is Java development, I continually broaden my knowledge and explore new technologies. <br /><br />
        
        I am also deeply passionate about space exploration and remain optimistic about the future of technology and humanity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Hishoo",
        timeframe: "2024 - Present",
        role: "Full-stack Developer",
        achievements: [
          // <>
          //   Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
          //   engagement and 30% faster load times.
          // </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [],
      },
      {
        company: "NGCMC.NET",
        timeframe: "2019 - Present",
        role: "Lead Software Engineer",
        achievements: [
          // <>
          //   Developed a design system that unified the brand across multiple platforms, improving
          //   design consistency by 40%.
          // </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Polish-Japanese Academy of Information Technology",
        description: <>Studying Computer Science</>,
      },
      {
        name: "St. Louis University High School",
        description: <>High School Exchange Program</>,
      },
      {
        name: "St. Stanislaus Jesuit High School",
        description: <>High School Education</>,
      },
    ],
  },
  technical: {
    display: true, // Set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: <>
          Java (Mid-level Full-Stack, Spring Framework, Maven, Thymeleaf, Caffeine) <br />
          C# .NET (Full-Stack Development, Blazor) <br />
          APIs & Microservices (REST, WebSockets, Microservices Architecture) <br />
          Message Brokers (Kafka)
        </>,
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>
          UI/UX Design Principles (User-centered design, responsive layouts, accessibility best practices) <br />
          Blazor (Component-based .NET frontend development)
        </>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: <>
          Containerization & Orchestration (Docker Compose, Kubernetes Deployment & Management) <br />
          CI/CD Pipelines (GitHub Actions, Octopus Deploy, Sonatype Nexus) <br />
          Cloud Platforms (Google Cloud Platform, Microsoft Azure, Oracle Cloud)
        </>,
        images: [],
      },
      {
        title: "Databases",
        description: <>
          SQL & NoSQL Databases (SurrealDB, MySQL, MariaDB, PostgreSQL, Redis)
        </>,
        images: [],
      },
      {
        title: "Security & Networking",
        description: <>
          Network Security (Firewalls, VPNs, Cloud Infrastructure Security) <br />
          SSL/TLS (Certificate Management) <br />
          Windows Server Management (IIS Site Hosting, Reverse Proxy, Authentication)
        </>,
        images: [],
      },
      {
        title: "Linux & Virtualization",
        description: <>
          Linux Administration (System Setup, Package Management, Firewall Configuration) <br />
          Server Management (Nginx, LAMP Stack) <br />
          Virtualization (VirtualBox, VMWare, VM Setup & Configuration) <br />
          Windows Server Management (IIS Hosting, Reverse Proxy Configuration)
        </>,
        images: [],
      },
      {
        title: "Monitoring & Logging",
        description: <>
          Observability Tools (Grafana)
        </>,
        images: [],
      },
      {
        title: "Scripting & Automation",
        description: <>
          Programming & Scripting Languages (Python, Bash, PowerShell)
        </>,
        images: [],
      },
      {
        title: "Game Development",
        description: <>
          Minecraft Server Development (Over 7 years of experience, Spigot/Paper API, Velocity, Custom Plugin Development, Full Network Configuration) <br />
          Unity (Game Development with C#)
        </>,
        images: [],
      },
      {
        title: "Other Technical Skills",
        description: <>
          Web Technologies (HTML, CSS, JavaScript) <br />
          Content Management Systems (WordPress – Elementor, WooCommerce, Full E-Commerce Setup) <br />
          Multimedia Editing (Image, Audio, and Video Editing)
        </>,
        images: [],
      },
    ],
  },

};

const blog = {
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    // {
    //   src: "/images/gallery/img-01.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-02.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-03.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-04.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-05.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-06.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-07.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-08.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-09.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-10.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
