"use client";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Code2,
  ShieldCheck,
  Database,
  Smartphone,
  PenTool,
  Cloud,
  ArrowRight,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Laptop,
  BadgePercent,
  Briefcase,
  Star,
  Quote,
  GraduationCap,
  Wallet,
  CalendarDays,
  Terminal,
  BarChart3,
  Lock,
  Layers,
  Camera,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Music2Icon,
} from "lucide-react";

/* ---------- Content: edit freely ---------- */
const NAV = [
  ["Courses", "#courses"],
  ["Why us", "#difference"],
  ["Study Abroad", "#partners"],
  ["Hostels", "#hostels"],
  ["Gallery", "#gallery"],
  ["Visit", "#location"],
];

const WHATSAPP_URL =
  "https://wa.me/2348036518761?text=Hello%20Aptech%20Bodija%2C%20I%20would%20like%20to%20make%20an%20enquiry.";
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/aptechbodija",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aptechbodija",
    icon: Instagram,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@aptechbodija",
    icon: Music2Icon,
  },
];

const COURSES = [
  {
    icon: Code2,
    name: "Web Development",
    line: "Build websites and web apps people actually use.",
    covers: [
      "HTML, CSS and JavaScript",
      "React and Next.js",
      "Node.js and databases",
      "Deploying real projects",
    ],
    roles: [
      "Frontend Developer",
      "Full-stack Developer",
      "Freelance Web Developer",
      "Product Engineer",
    ],
    why: "Every business needs a web presence. Developers can work for companies, freelance for clients abroad, or launch their own products.",
  },
  {
    icon: ShieldCheck,
    name: "Cybersecurity",
    line: "Learn to find weaknesses before attackers do.",
    covers: [
      "Network and system security",
      "Ethical hacking basics",
      "Threat detection and response",
      "Security tools and reporting",
    ],
    roles: [
      "Security Analyst",
      "Penetration Tester",
      "SOC Analyst",
      "IT Security Consultant",
    ],
    why: "Banks, fintechs and government bodies are hiring defenders. Security is one of the most in-demand skills in the industry.",
  },
  {
    icon: BarChart3,
    name: "Data Science",
    line: "Turn raw numbers into decisions.",
    covers: [
      "Python and SQL",
      "Data cleaning and analysis",
      "Visualisation and dashboards",
      "Intro to machine learning",
    ],
    roles: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Scientist",
      "Research Analyst",
    ],
    why: "Companies in every sector rely on data to plan and grow. Analysts are needed in banking, health, retail and telecoms.",
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    line: "Ship apps for the phone in everyone’s pocket.",
    covers: [
      "Android and cross-platform apps",
      "UI patterns for mobile",
      "APIs and local storage",
      "Publishing to app stores",
    ],
    roles: ["Mobile Developer", "App Freelancer", "Startup Engineer"],
    why: "Mobile is how most people in Nigeria go online. Good app developers are scarce and well paid.",
  },
  {
    icon: PenTool,
    name: "UI/UX Design",
    line: "Design products that feel obvious to use.",
    covers: [
      "User research and flows",
      "Wireframing and prototyping",
      "Visual design systems",
      "Portfolio case studies",
    ],
    roles: ["Product Designer", "UI Designer", "UX Researcher"],
    why: "Teams need designers who understand people and code. It is a strong path for creative minds who like problem solving.",
  },
  {
    icon: Cloud,
    name: "Cloud and Networking",
    line: "Run the infrastructure the internet depends on.",
    covers: [
      "Networking fundamentals",
      "Cloud platforms and servers",
      "Linux and administration",
      "Monitoring and automation",
    ],
    roles: [
      "Network Engineer",
      "Cloud Engineer",
      "Systems Administrator",
      "DevOps Engineer",
    ],
    why: "Every app runs on infrastructure. Cloud and network engineers keep businesses online and are hired across industries.",
  },
  {
    icon: Layers,
    name: "Office Automation",
    line: "Work smarter with the tools modern offices rely on.",
    covers: [
      "Microsoft Office mastery",
      "Digital documentation",
      "Spreadsheets and reporting",
      "Workflows and collaboration",
    ],
    roles: [
      "Administrative Assistant",
      "Office Technology Specialist",
      "Data Entry Specialist",
      "Operations Assistant",
    ],
    why: "Every organisation needs people who can organise information, automate routine work and communicate clearly with digital tools.",
  },
  {
    icon: Camera,
    name: "Digital Marketing",
    line: "Turn attention into measurable business growth.",
    covers: [
      "Content and social media",
      "Search engine marketing",
      "Email campaigns",
      "Analytics and strategy",
    ],
    roles: [
      "Digital Marketer",
      "Social Media Manager",
      "Content Strategist",
      "Marketing Analyst",
    ],
    why: "Businesses need practical digital marketers who can attract the right audience, tell better stories and measure what works.",
  },
  {
    icon: ShieldCheck,
    name: "Digital Forensic",
    line: "Investigate the evidence hidden in digital systems.",
    covers: [
      "Evidence handling",
      "Incident investigation",
      "Mobile and computer forensics",
      "Forensic reporting",
    ],
    roles: [
      "Digital Forensics Analyst",
      "Incident Responder",
      "Cybercrime Investigator",
      "Security Consultant",
    ],
    why: "As more evidence moves online, organisations need careful investigators who can preserve, analyse and explain digital evidence.",
  },
  {
    icon: Code2,
    name: "Responsive Web Development",
    line: "Create websites that work beautifully on every screen.",
    covers: [
      "Responsive layouts",
      "Accessible interfaces",
      "Modern CSS and JavaScript",
      "Testing across devices",
    ],
    roles: [
      "Web Developer",
      "Frontend Developer",
      "UI Developer",
      "WordPress Specialist",
    ],
    why: "A responsive website is the foundation of a credible business online. Learn to build experiences that adapt to real people and devices.",
  },
];

const CLOUDINARY_VIDEO_URLS = [
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/f_mp4,vc_h264/v1794228504/9144bd37307c43cdb5228253efe4e735_u96qan.mp4",
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/v1793708897/IMG_0651_pu9omw.mov",
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/v1793708889/IMG_0650_wxdcee.mov",
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/v1793708876/IMG_0648_ldejli.mov",
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/v1793708869/IMG_0649_mbfki4.mov",
  "https://res.cloudinary.com/dqlgwv2y8/video/upload/v1793708797/IMG_0647_kaefhf.mov",
];

const CAMPUS_SLIDES = [
  "/images/middlesexuni2.jpeg",
  "/images/middlesexuni.webp",
  "/images/middlesexuni3.avif",
];

const VIDEO_TESTIMONIALS = [1, 2, 3, 4, 5, 6].map((number) => ({
  title: [
    "A new career in tech",
    "From learner to professional",
    "What I built at Aptech",
    "Why I chose Aptech Bodija",
    "Learning that feels practical",
    "My journey into tech",
    "A word from our students",
  ][number - 1],
  course: [
    "Web development testimonial",
    "Career course testimonial",
    "Student project story",
    "Student experience",
    "Graduate testimonial",
    "Career transformation",
    "Aptech Bodija story",
  ][number - 1],
  src: CLOUDINARY_VIDEO_URLS[number - 1] || "",
}));

const DIFFERENT = [
  {
    icon: Laptop,
    t: "Hands-on from week one",
    d: "You build every day in our labs. No lecture-only classes.",
  },
  {
    icon: Award,
    t: "Globally recognised curriculum",
    d: "Industry-aligned training from the Aptech network.",
  },
  {
    icon: Users,
    t: "Instructors who work in the field",
    d: "Learn from people who ship software and secure systems.",
  },
  {
    icon: Briefcase,
    t: "Career support",
    d: "CV reviews, interview practice and introductions to employers.",
  },
];

const OFFERS = [
  {
    icon: BadgePercent,
    tag: "Nov 1 – Dec 31, 2026",
    t: "Refer and win amazing gifts",
    d: "Refer a friend to Aptech Bodija between November 1 and December 31, 2026, and stand a chance to win amazing gifts.",
    tone: "yellow",
  },
  {
    icon: Wallet,
    tag: "Flexible",
    t: "Pay in instalments",
    d: "Split your fees across the duration of your programme.",
    tone: "navy",
  },
  {
    icon: CalendarDays,
    tag: "Flexible learning",
    t: "Weekday and virtual classes",
    d: "Choose weekday classroom sessions or learn virtually from wherever you are.",
    tone: "red",
  },
];

const GALLERY = [
  {
    icon: Terminal,
    // cap: "Our modern classroom",
    src: "/images/apb1.png",
    c: "navy",
  },
  {
    icon: Users,
    // cap: "A collaborative learning environment",
    src: "/images/apb2.png",
    c: "red",
  },
  {
    icon: Lock,
    // cap: "Practical technology lab",
    src: "/images/apb3.png",
    c: "yellow",
  },
  {
    icon: Layers,
    // cap: "Our focused training space",
    src: "/images/apb4.png",
    c: "navy",
  },
  {
    icon: Laptop,
    // cap: "Students learning together",
    src: "/images/apb5.png",
    c: "red",
  },
  {
    icon: Camera,
    // cap: "Life at Aptech Bodija",
    src: "/images/apb6.png",
    c: "yellow",
  },
];

const HOSTELS = [
  {
    // cap: "Comfortable student rooms",
    src: "/images/hostel1.png",
  },
  {
    // cap: "Shared study spaces",
    src: "/images/hostel2.png",
  },
  {
    // cap: "A place to settle in",
    src: "/images/hostel3.png",
  },
];

const HERO_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
    alt: "Students collaborating around a laptop",
    label: "Build together",
    className: "hero-photo-one",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    alt: "Team working in a bright technology lab",
    label: "Real projects",
    className: "hero-photo-two",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85",
    alt: "Laptop showing code in a workshop",
    label: "Learn by doing",
    className: "hero-photo-three",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
    alt: "Students planning a technology project together",
    label: "Grow together",
    className: "hero-photo-four",
  },
];

const REVIEWS = [
  {
    n: "Miriam.",
    r: "Web Development graduate",
    q: "I came in knowing nothing about code. Six months later I shipped a client site and got my first paid project.",
  },
  {
    n: "Tunde A.",
    r: "Cybersecurity graduate",
    q: "The labs felt like real attacks and real defence. In interviews I could explain exactly what I had done.",
  },
  {
    n: "Ngozi E.",
    r: "Data Science graduate",
    q: "The instructors pushed us to present our findings, not just run notebooks. That made the difference at work.",
  },
];

const FAQS = [
  [
    "Do I need prior experience?",
    "No. Beginner tracks start from the basics. If you already have some skills, we will help you choose a level that fits.",
  ],
  [
    "How long are the courses?",
    "Duration depends on the programme. Contact the admissions desk for the schedule of the course you want.",
  ],
  [
    "Can I learn on weekends or evenings?",
    "Yes. We run flexible batches for students and working professionals.",
  ],
  [
    "Will I get a certificate?",
    "Yes. You receive a certificate on completing your programme.",
  ],
  [
    "Can I pay in instalments?",
    "Yes. Speak with admissions to set up a plan that suits you.",
  ],
  [
    "Do you help with jobs after training?",
    "We offer career guidance, CV reviews and interview preparation. We also help you build a portfolio.",
  ],
];

const SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "SQL",
  "Linux",
  "Networking",
  "Ethical Hacking",
  "Figma",
  "Cloud",
  "Node.js",
  "Power BI",
];

/* ---------- Hooks ---------- */
function useScrolled() {
  const [s, set] = useState(false);
  useEffect(() => {
    const f = () => set(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return s;
}

/* ---------- Sections ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <div className="wrap nav-in">
        <a href="#top" className="logo">
          <img src="/images/aptech-logo.webp" alt="Aptech Bodija" />
        </a>
        <nav className={`links ${open ? "open" : ""}`}>
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href="#location"
            className="btn btn-yellow sm"
            onClick={() => setOpen(false)}
          >
            Enrol now
          </a>
        </nav>
        <button
          className="burger"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const [m, setM] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };
  const px = (d) => ({ transform: `translate(${m.x * d}px, ${m.y * d}px)` });
  return (
    <section
      id="top"
      className="hero"
      onMouseMove={move}
      onMouseLeave={() => setM({ x: 0, y: 0 })}
    >
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="pill">
            <span className="dot" /> Admissions open in Aptech Bodija, Ibadan,
            Oyo State
          </p>
          <h1>
            Learn the tech skills
            <br />
            companies hire for.
          </h1>
          <p className="lead">
            Web development, cybersecurity, data science and more. Practical
            training at Aptech Bodija, taught by people who work in the field.
          </p>
          <div className="row">
            <a href="#courses" className="btn btn-yellow">
              Explore courses <ArrowRight size={18} />
            </a>
            <a href="#location" className="btn btn-ghost">
              Visit the campus
            </a>
          </div>
          <ul className="stats">
            <li>
              <b>10+</b>
              <span>Career tracks</span>
            </li>
            <li>
              <b>100%</b>
              <span>Hands-on labs</span>
            </li>
            <li>
              <b>Flexible</b>
              <span>Weekday and virtual batches</span>
            </li>
          </ul>
        </div>

        <div
          className="stage"
          aria-label="Students learning and building together at Aptech Bodija"
        >
          <div
            className="hero-orbit"
            aria-label="Four students learning at Aptech Bodija"
          >
            {HERO_PHOTOS.map((photo) => (
              <figure
                className={`hero-photo ${photo.className}`}
                key={photo.src}
              >
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="ring">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="c"
                  d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              <text>
                <textPath href="#c">
                  ENROL NOW • LEARN BY BUILDING • GET HIRED •{" "}
                </textPath>
              </text>
            </svg>
            <ArrowRight className="ring-i" size={28} />
          </div>

          <div className="fc c1" style={px(26)}>
            <div className="float f1 card-code">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <pre>{`const skill = "web";\nbuild(skill);\ndeploy();`}</pre>
            </div>
          </div>

          <div className="fc c2" style={px(-34)}>
            <div className="float f2 card-shield">
              <ShieldCheck size={46} />
              <strong>Threat blocked</strong>
              <small>Firewall rule applied</small>
            </div>
          </div>

          <div className="fc c3" style={px(18)}>
            <div className="float f3 card-chart">
              <small>Data insight</small>
              <div className="bars">
                <i style={{ height: "35%" }} />
                <i style={{ height: "60%" }} />
                <i style={{ height: "45%" }} />
                <i style={{ height: "85%" }} />
                <i style={{ height: "70%" }} />
              </div>
            </div>
          </div>

          <div className="fc c4" style={px(-20)}>
            <div className="float f4 card-badge">
              <Award size={26} />
              <span>
                Certified
                <br />
                training
              </span>
            </div>
          </div>
          <div className="fc c5" style={px(40)}>
            <div className="float f5 sq" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const list = [...SKILLS, ...SKILLS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {list.map((s, i) => (
          <span key={i}>
            <Layers size={16} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function IntroVideo() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const enableSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    videoRef.current.play();
    setSoundOn(true);
  };
  return (
    <section className="intro-video" aria-label="Life at Aptech Bodija">
      <div className="intro-video-frame">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dqlgwv2y8/video/upload/vc_h264,f_mp4/v1793722584/copy_A1C8C369-1074-45D1-B84F-EDFF85A62C7F-4_udclpn.mp4"
          autoPlay
          muted={!soundOn}
          loop
          playsInline
          preload="auto"
          aria-label="Students learning at Aptech Bodija"
        />
        {!soundOn && (
          <button
            type="button"
            className="video-sound-button"
            onClick={enableSound}
            aria-label="Enable video sound"
          >
            🔊 Enable sound
          </button>
        )}
        <div className="intro-video-caption">
          <span>Inside Aptech Bodija</span>
          <strong>Learn by doing.</strong>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setI((current) => (current + 1) % COURSES.length),
      4200,
    );
    return () => clearInterval(timer);
  }, []);
  const c = COURSES[i],
    Icon = c.icon;
  const positions = [
    [50, 6],
    [72, 10],
    [91, 30],
    [91, 67],
    [72, 90],
    [50, 94],
    [28, 90],
    [9, 67],
    [9, 30],
    [28, 10],
  ];
  return (
    <section id="courses" className="sec light">
      <div className="wrap">
        <h2 className="h2">Courses we teach</h2>
        <p className="sub">
          Select a course to see what you will learn, the tools you will use and
          where it can take you.
        </p>
        <div className="courses">
          <div
            className="course-network"
            role="tablist"
            aria-label="Aptech Bodija courses"
          >
            <svg
              className="network-lines"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              {positions.map(([x, y], index) => (
                <g key={`${x}-${y}`}>
                  <line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    style={{ "--delay": `${index * 0.18}s` }}
                  />
                  <circle
                    className="network-dot"
                    cx={x}
                    cy={y}
                    r="1.15"
                    style={{ "--delay": `${index * 0.18}s` }}
                  />
                </g>
              ))}
            </svg>
            <div className="network-core">
              <span className="core-pulse" />
              <strong>APTECH</strong>
              <small>BODIJA</small>
            </div>
            {COURSES.map((x, k) => {
              const I = x.icon;
              const [xPos, yPos] = positions[k];
              return (
                <button
                  type="button"
                  key={x.name}
                  role="tab"
                  aria-selected={k === i}
                  aria-controls="course-details"
                  className={`cbtn ${k === i ? "on" : ""}`}
                  style={{ "--x": `${xPos}%`, "--y": `${yPos}%` }}
                  onPointerDown={() => setI(k)}
                  onFocus={() => setI(k)}
                  onClick={() => setI(k)}
                >
                  <span className="cico">
                    <I size={22} />
                  </span>
                  <span>{x.name}</span>
                  <ArrowRight size={18} className="carr" />
                </button>
              );
            })}
          </div>
          <article id="course-details" className="cpanel" key={c.name}>
            <div className="chead">
              <span className="cbig">
                <Icon size={34} />
              </span>
              <div>
                <h3>{c.name}</h3>
                <p>{c.line}</p>
              </div>
            </div>
            <div className="cols">
              <div>
                <h4>What you will learn</h4>
                <ul>
                  {c.covers.map((v) => (
                    <li key={v}>
                      <Star size={14} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Roles it opens up</h4>
                <ul>
                  {c.roles.map((v) => (
                    <li key={v}>
                      <Briefcase size={14} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="why">
              <b>The opportunity:</b> {c.why}
            </p>
            <a href="#location" className="btn btn-navy">
              Enquire about {c.name} <ArrowRight size={18} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Different() {
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const moveCard = (direction) => {
    const next = Math.max(
      0,
      Math.min(DIFFERENT.length - 1, activeCard + direction),
    );
    setActiveCard(next);
    const cards = cardsRef.current;
    const card = cards?.children[next];
    if (cards && card)
      cards.scrollTo({
        left: card.offsetLeft - cards.offsetLeft,
        behavior: "smooth",
      });
  };

  return (
    <section id="difference" className="sec navy">
      <div className="wrap">
        <h2 className="h2">What makes us different</h2>
        <p className="sub">
          We train you to do the job, not just pass the exam.
        </p>
        <div
          className="diff"
          ref={cardsRef}
          onScroll={(event) => {
            const cards = event.currentTarget;
            const next = Math.round(
              cards.scrollLeft / (cards.clientWidth + 14),
            );
            setActiveCard(Math.max(0, Math.min(DIFFERENT.length - 1, next)));
          }}
        >
          {DIFFERENT.map((d, k) => {
            const I = d.icon;
            return (
              <div
                key={d.t}
                className="dcard"
                style={{ "--r": `${k % 2 ? 1.5 : -1.5}deg` }}
              >
                <span className="dico">
                  <I size={26} />
                </span>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </div>
            );
          })}
        </div>
        <div className="diff-controls" aria-label="Card navigation">
          <button
            type="button"
            onClick={() => moveCard(-1)}
            disabled={activeCard === 0}
            aria-label="Previous card"
          >
            <ChevronLeft size={20} />
          </button>
          <span aria-live="polite">
            {activeCard + 1} / {DIFFERENT.length}
          </span>
          <button
            type="button"
            onClick={() => moveCard(1)}
            disabled={activeCard === DIFFERENT.length - 1}
            aria-label="Next card"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="sec video-testimonials">
      <div className="wrap">
        <div className="video-heading">
          <div>
            <p className="eyebrow">Hear it from them</p>
            <h2 className="h2">Real stories from the people doing the work.</h2>
          </div>
          <p className="sub">
            Watch how Aptech Bodija students are learning, building confidence
            and moving into new opportunities.
          </p>
        </div>
        <div className="video-grid">
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <article className="video-card" key={video.title}>
              {video.src ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  src={video.src}
                  aria-label={video.title}
                />
              ) : (
                <div className="video-placeholder">
                  <span className="video-play">▶</span>
                  <small>Cloudinary video {index + 1}</small>
                  <strong>Add video URL</strong>
                </div>
              )}
              {/* <div className="video-meta">
                <span>0{index + 1}</span>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.course}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="offers" className="sec">
      <div className="wrap">
        <h2 className="h2">Current offers</h2>
        <p className="sub">Ask admissions for the latest terms.</p>
        <div className="offers">
          {OFFERS.map((o, k) => {
            const I = o.icon;
            return (
              <div
                key={o.t}
                className={`offer ${o.tone}`}
                style={{ "--r": `${[-2, 1.5, -1][k]}deg` }}
              >
                <span className="otag">{o.tag}</span>
                <I size={40} className="oico" />
                <h3>{o.t}</h3>
                <p>{o.d}</p>
                <a href="#location" className="olink">
                  Claim this offer <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="gallery" className="sec light">
      <div className="wrap gallery-intro">
        <div>
          <p className="eyebrow">Inside Aptech Bodija</p>
          <h2 className="h2">The work is the story.</h2>
        </div>
        <p className="sub">
          A real classroom, real people, real projects. Tap any image to bring
          it forward.
        </p>
      </div>
      <div className="gal" role="list">
        {GALLERY.map((g, k) => {
          const I = g.icon;
          return (
            <figure
              key={g.cap}
              role="listitem"
              tabIndex="0"
              onClick={() => setSelected(g)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(g)}
              className={`gtile ${g.c}`}
              style={{
                "--r": `${[-4, 3, -2, 4, -3, 2][k]}deg`,
                "--d": `${k * 0.6}s`,
              }}
            >
              {g.src ? (
                <img src={g.src} alt={g.cap} loading="lazy" />
              ) : (
                <I size={54} />
              )}
              <figcaption>{g.cap}</figcaption>
            </figure>
          );
        })}
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.cap}
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selected.src}
            alt={selected.cap}
            onClick={(e) => e.stopPropagation()}
          />
          <p>{selected.cap}</p>
        </div>
      )}
    </section>
  );
}

function Hostels() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="hostels" className="sec hostel-section">
      <div className="wrap hostel-head">
        <div>
          <p className="eyebrow">Stay close to your goals</p>
          <h2 className="h2">A place to learn, rest and belong.</h2>
        </div>
        <p className="sub">
          For students coming from outside Ibadan, our hostel option keeps you
          close to class and surrounded by a supportive learning community.
        </p>
      </div>
      <div className="wrap hostel-grid">
        {HOSTELS.map((hostel, i) => (
          <figure
            key={hostel.cap}
            className={`hostel-card hostel-card-${i + 1}`}
            onClick={() => setSelected(hostel)}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && setSelected(hostel)}
          >
            <img src={hostel.src} alt={hostel.cap} loading="lazy" />
            <figcaption>{hostel.cap}</figcaption>
          </figure>
        ))}
      </div>
      <div className="wrap hostel-note">
        <span>
          <Users size={18} /> Student-friendly living
        </span>
        <span>
          <Laptop size={18} /> Space to study
        </span>
        <a href="#location" className="btn btn-navy">
          Ask about hostel availability <ArrowRight size={18} />
        </a>
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.cap}
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selected.src}
            alt={selected.cap}
            onClick={(e) => e.stopPropagation()}
          />
          <p>{selected.cap}</p>
        </div>
      )}
    </section>
  );
}

function Partners() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const timer = setInterval(
      () => setActiveSlide((current) => (current + 1) % CAMPUS_SLIDES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="partners" className="sec partners-section">
      <div className="wrap">
        <div
          className="partner-banner"
          role="region"
          aria-label="Middlesex University campus photos"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="partner-banner-slides">
            {CAMPUS_SLIDES.map((src, index) => (
              <img
                key={src}
                className={`partner-banner-image${index === activeSlide ? " is-active" : ""}`}
                src={src}
                alt="Middlesex University campus"
                aria-hidden={index !== activeSlide}
                loading="eager"
              />
            ))}
          </div>
          <div className="partner-banner-shade" />
          <div className="partner-banner-copy">
            <p className="partner-banner-kicker">Your next opportunity</p>
            <h2>Train here. Continue abroad.</h2>
            <p>
              Build your foundation at Aptech Bodija, then explore eligible
              progression and scholarship opportunities with Middlesex
              University.
            </p>
            <a
              className="btn btn-yellow"
              href="https://www.mdx.ac.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Discover Middlesex University <ArrowRight size={18} />
            </a>
          </div>
          <div className="partner-banner-brand">
            <img
              src="/images/middlesexuniversitylogo.avif"
              alt="Middlesex University"
              loading="lazy"
            />
            <span>Make your next move count.</span>
          </div>
          <div
            className="partner-banner-dots"
            aria-label="Choose a campus photo"
          >
            {CAMPUS_SLIDES.map((src, index) => (
              <button
                key={src}
                type="button"
                className={index === activeSlide ? "is-active" : ""}
                aria-label={`Show campus photo ${index + 1}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];
  return (
    <section id="testimonials" className="sec">
      <div className="wrap tst">
        <div>
          <h2 className="h2">Students who made the switch</h2>
          <p className="sub">
            Sample reviews. Replace with real student stories.
          </p>
          <div className="row">
            <button
              className="round"
              aria-label="Previous"
              onClick={() => setI((i + REVIEWS.length - 1) % REVIEWS.length)}
            >
              <ChevronLeft />
            </button>
            <button
              className="round"
              aria-label="Next"
              onClick={() => setI((i + 1) % REVIEWS.length)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <blockquote className="quote" key={i}>
          <Quote size={40} className="qi" />
          <p>{r.q}</p>
          <footer>
            <span className="avatar">{r.n[0]}</span>
            <div>
              <b>{r.n}</b>
              <small>{r.r}</small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function FAQ() {
  const [o, setO] = useState(0);
  return (
    <section id="faq" className="sec light">
      <div className="wrap narrow">
        <h2 className="h2">Questions, answered</h2>
        <div className="faq">
          {FAQS.map(([q, a], k) => (
            <div key={q} className={`fq ${o === k ? "open" : ""}`}>
              <button
                aria-expanded={o === k}
                onClick={() => setO(o === k ? -1 : k)}
              >
                {q}
                {o === k ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className="fa">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="sec">
      <div className="wrap loc">
        <div>
          <h2 className="h2">Visit us in Bodija</h2>
          <ul className="info">
            <li>
              <MapPin />
              <span>
                8 Ladoke Akintola St, Old Bodija, Ibadan, Oyo, Nigeria
              </span>
            </li>
            <li>
              <Phone />
              <span>+2348036518761</span>
            </li>
            {/* <li>
              <Mail />
              <span>info@aptechbodija.com</span>
            </li> */}
            <li>
              <Clock />
              <span>Mon to Fri, 9am to 6pm</span>
            </li>
          </ul>
          <a href="tel:+2348036518761" className="btn btn-red">
            Call admissions <Phone size={18} />
          </a>
        </div>
        <div className="map">
          <iframe
            title="Map to Aptech Bodija, 8 Ladoke Akintola Street, Old Bodija, Ibadan"
            loading="lazy"
            src="https://maps.google.com/maps?q=8%20Ladoke%20Akintola%20St%2C%20Old%20Bodija%2C%20Ibadan%2C%20Oyo%2C%20Nigeria&output=embed"
          />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <h2>Your next intake is filling up.</h2>
        <a href="#location" className="btn btn-navy">
          Reserve your seat <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap fgrid">
        <div>
          <a href="#top" className="logo">
            <img src="/images/aptech-logo.webp" alt="Aptech Bodija" />
          </a>
          <p>Practical tech training in Aptech Bodija, Ibadan.</p>
        </div>
        <div>
          <h4>Courses</h4>
          {COURSES.slice(0, 4).map((c) => (
            <a key={c.name} href="#courses">
              {c.name}
            </a>
          ))}
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.slice(1).map(([l, h]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+2340000000000">+2348036518761</a>
          <a href="mailto:info@aptechbodija.com">info@aptechbodija.com</a>
        </div>
      </div>
      <div className="wrap copy">
        © {new Date().getFullYear()} Aptech Bodija. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <>
      <nav className="social-rail" aria-label="Aptech Bodija social media">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={`Visit Aptech Bodija on ${label}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aptech Bodija admissions on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>Chat with admissions</span>
      </a>
    </>
  );
}

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <IntroVideo />
        <Courses />
        <Different />
        <VideoTestimonials />
        <Offers />
        <Partners />
        <Gallery />
        <Hostels />
        <Testimonials />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
