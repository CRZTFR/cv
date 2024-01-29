import {} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Christopher Cole",
  initials: "CC",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about:
    "Mechatronics engineer interested in product development and solar PV.",
  summary:
    "As a Mechatronics engineer I work well across software and hardware, creating products where the two fields meet.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQFzrXwCtJXviA/profile-displayphoto-shrink_800_800/0/1591663650694?e=1710979200&v=beta&t=G8GGGiJqWOwBOUDtRDFCecphxlhdqgE4RUhMpx2ndsE",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ccole2107@gmail.com",
    tel: "+61481393901",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/BartoszJarocki",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/christopher-cole-898aa585/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "The University of Sydney",
      degree: "Bachelor's of Mechatronic Engineering. First Class Honours",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "ClearVue PV",
      link: "https://clearvuepv.com",
      badges: ["Remote"],
      title: "Mechatronics Engineer",
      // logo: ParabolLogo,
      start: "2020",
      end: "2024",
      description:
        "Lead product design engineer in an ASX listed technology company. Design, prototyping, and manufacturing of plastic and electrical parts. Simulation of PV systems. PCB design and layout, embedded programming of a full IoT system.",
    },
    {
      company: "Arup",
      link: "https://arup.com",
      badges: [],
      title: "Grad",
      // logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Research, design, development and construction of prototypes for ClearVue PV. Development of reinforcement learning building control system",
    },
    {
      company: "Fulcrum 3D",
      link: "https://fulcrum3d.com",
      badges: [],
      title: "Technician",
      // logo: JojoMobileLogo,
      start: "2018",
      end: "2019",
      description:
        "Manufacturing, testing, installation and commissioning of a wide range of remote sensing devices for solar and wind farms.",
    },
  ],
  skills: ["Python", "Dart", "C", "C++", "Flutter", "PCB Design", "CAD"],
  projects: [
    {
      title: "Bindicator",
      techStack: [
        "Side Project",
        "Flutter",
        "PCB Design",
        "Injection Moulding",
        "AWS",
        "IoT",
        "Embedded",
      ],
      description: "A Bin Day reminder lamp",
      // logo: ConsultlyLogo,
      link: {
        label: "bindicator.net",
        href: "https://bindicator.net/",
      },
    },
    {
      title: "Mates Map",
      techStack: ["Side Project", "Flutter", "Android", "iOS"],
      description: "Map based contacts app for backpackers",
      // logo: MonitoLogo,
      link: {
        label: "Mates Map",
        href: "https://play.google.com/store/apps/details?id=com.mates.map&hl=en&gl=US",
      },
    },
  ],
} as const;
