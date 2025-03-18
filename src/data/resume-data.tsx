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
    "Dedicated, fast-learning and highly organised mechatronics engineer with a broad range of skills in both software and hardware. Strong set of skills relating to photovoltaic systems.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQHycVjzXtvYHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713916342009?e=1747872000&v=beta&t=rV_4cJRSC8ngdR6Fl_xIgAMbgaq9Kdoql89UnnRtU1A",
  personalWebsiteUrl: "https://bindicator.net",
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
      badges: [],
      title: "Mechatronics Engineer",
      start: "2020",
      end: "2024",
      description: `
<div>Lead design engineer for the "Version 2" ClearVue PV Solar Integrated Glazing Units, Spandrels, and Cladding including:</div>
<div style="margin-left: 1.5em">
    <div style="text-indent: -1em; padding-left: 1em">• Reduced manufacturing time from >1hr per unit to sub 5 minutes</div>
    <div style="text-indent: -1em; padding-left: 1em">• Optimized electrical subsystems and layout</div>
    <div style="text-indent: -1em; padding-left: 1em">• Design, testing, optimization, and mass manufacturing of plastic and metal parts</div>
</div>

<div>Continue development and improve stability of "Smart Facade" prototypes developed at Arup:</div>
<div style="margin-left: 1.5em">
    <div style="text-indent: -1em; padding-left: 1em">• Design and fabricate a miniaturized MPPT charge controller to suit the ClearVue PV panel including PCB design and layout, embedded programming and full IoT system</div>
    <div style="text-indent: -1em; padding-left: 1em">• Improve stability and efficiency of power and control electronics for prototypes</div>
    <div style="text-indent: -1em; padding-left: 1em">• Miniaturize components and design for SMT manufacturing</div>
    <div style="text-indent: -1em; padding-left: 1em">• Improved reliability and featureset of control electronics</div>
</div>

<div>Design of a Building Management System for a "Smart" greenhouse using IoT components</div>`,
    },
    {
      company: "Arup",
      link: "https://arup.com",
      badges: [],
      title: "Grad",
      // logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description: `
<div>Research, design, development and construction of a series of "Smart Facade" prototypes for ClearVue PV, which included:</div>
<div style="margin-left: 1.5em">
    <div style="text-indent: -1em; padding-left: 1em">• Design and construction of electrical power systems using a transparent photovoltaic panel</div>
    <div style="text-indent: -1em; padding-left: 1em">• Design and construction of a web interface for wireless control</div>
    <div style="text-indent: -1em; padding-left: 1em">• Programming of microcontrollers for sensing and control of the prototype hardware</div>
    <div style="text-indent: -1em; padding-left: 1em">• The development and testing of a Reinforcement Learning based facade control system to minimize building energy use</div>
</div>`,
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
    references: {
    text: "References available upon request",
    show: true, // Toggle to control visibility
  },
} as const;
