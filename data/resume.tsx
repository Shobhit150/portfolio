import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shobhit Verma",
  initials: "SV",
  url: "https://portfolio-one-wine-0sfkzpag0k.vercel.app/",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Migsun+Ultimo,+Plumeria+Garden+Approach+Rd,+Pocket+A,+Omicron+III,+Mathurapur,+Uttar+Pradesh+201310/@28.4628642,77.5496741,4996m/data=!3m1!1e3!4m6!3m5!1s0x390ceaa9021c00c1:0x60c047c11f0a27c3!8m2!3d28.4745296!4d77.5531761!16s%2Fg%2F11b7q8hxnc?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
  description:
    "A developer who loves building scalable systems and solving complex problems.",
  summary:
    "I'm a final-year B.Tech student from India with a deep interest in mathematics, logic, and solving challenging engineering problems. I enjoy breaking down messy, complex scenarios and architecting scalable systems that are both efficient and robust. I thrive in environments where critical thinking, system planning, and clean architecture matter.",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Kubernetes",
    "Java",
    "C++",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "vshobhit150@gmail.com",
    tel: "+91 9140772033",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shobhit150",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shobhit150/",
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/ShobhitVerma150/",
        icon: Icons.leetcode,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shobhit_5050",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&to=vshobhit150@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Shobhit%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding...",
        icon: Icons.email,
        navbar: true,
      },
  
      X: {
        name: "X",
        url: "https://x.com/Shobhit_codes",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Agro Tech Startup",
      href: "/",
      badges: [],
      location: "Remote",
      title: "Graphics Design",
      logoUrl: "",
      start: "Dec 2022",
      end: "Feb 2023",
      description:
        "Made mutiple graphics component in React and typescript. Learned how to make production ready clean code in TypeScript",
    },
  ],
  education: [
    {
      school: "Bennett University",
      href: "",
      degree: "Btech",
      logoUrl: "/bennett.webp",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "URL Shortener and Analytics Platformn",
      href: "https://github.com/Shobhit150/url_shortner",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        "Main focus was scalability, by integrating kafka, cache, and microservice architecture, this project can handle any number of users if host allows. Everything is dockerized and dockers are maintained by docker compose.",
        technologies: [
          "Go",
          "Redis",
          "Kafka",
          "Docker",
          "Docker compose",
          "gRPC",
          "RestAPI",
          "PostgresSQL",
          "NextJS"
        ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Shobhit150/url_shortner",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shobhit150/url_shortner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: `${process.env.R2_BUCKET_LOGIN}/url_shortner_demo.mp4`,
    },
    {
      title: "SantaClaws - Web3 Token",
      href: "https://santaclaws-psi.vercel.app/",
      dates: "July 2023 - August 2023",
      active: true,
      description:
        // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        "SantaClaws is a web3 Dapp, creative during the Halloween festive season, main focus was custom UI/UX for the Halloween season",
        technologies: [
          "Next.js",
          "React",
          "ThirdWeb",
          "TailwindCSS",
          "Shadcn UI",
        ],
      links: [
        {
          type: "Website",
          href: "https://santaclaws-psi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shobhit150/SantaClaws",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: `${process.env.R2_BUCKET_LOGIN}/santaclaws_demo_video.mp4`,
    },
    {
      title: "Blessings Holiday - Travel Agency",
      href: "https://blessings-holiday.vercel.app/",
      dates: "July 2025 - ",
      active: true,
      description:
        // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        "This project was built to learn SEO and write production-ready code. I successfully managed to rank pages high in Google Search by optimizing performance, metadata, and dynamic content structure.",
        technologies: [
          "Next.js",
          "React",
          "TailwindCSS",
          "R2 bucket",
          "Cloudflare R2",
          "Google Search Console",
          "Sitemap & Robots.txt",
        ],
      links: [
        {
          type: "Website",
          href: "https://blessings-holiday.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shobhit150/blessingsHoliday",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: `${process.env.R2_BUCKET_LOGIN}/blessingholiday_demo.mp4`,
    }
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UIcomponentsfor developers.",
    //   technologies: [
    //     "Next.js",
    //     "React",
    //     "ThirdWeb",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://santaclaws-psi.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Shobhit150/SantaClaws",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Adobe India Hackathon",
      dates: "July 17th - present, 2018",
      location: "New Delhi, India",
      description:
        "Multiple rounds of DSA and coding in round 1.",
      image:
        "/adobe.webp",
      links: [],
    },
  ],
} as const;
