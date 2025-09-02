import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume ',
  description: 'My resume ',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Aya Moutaib.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Aya <strong className="text-stone-100"> a Software Engineer based in Casablanca</strong>, passionate about
        web and mobile development, <strong className="text-stone-100">designing solutions</strong> and{' '}
        <strong className="text-stone-100">solving complex problems</strong>. I strive to create innovative and
        efficient digital solutions, and beyond technology, I enjoy <strong className="text-stone-100">writing</strong>{' '}
        and exploring new ideas.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,

  description: `To me, a great developer is not just someone who can code, but someone who can create optimized and innovative solutions, find the shortest paths, and anticipate potential issues. This is exactly what I enjoy the most: designing efficient and clever solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Casablanca, Morocco', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Moroccan', Icon: FlagIcon},
    {label: 'Interests', text: 'Designing solutions, solving problems, writing, creativity', Icon: SparklesIcon},
    {label: 'Study', text: 'National Higher School of Artificial Intelligence and Data Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelance projects & personal development', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'French',
        level: 9,
      },
      {
        name: 'Arabic',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'After-Sales Service Management App (Internship)',
    description:
      'Developed an application for managing after-sales service, integrating AI. Tools: Laravel, React.js, React Native, Merise, Scrum, MySQL, Github.',
    url: '#',
    image: porfolioImage16,
  },
  {
    title: 'School Transport Management App (Final Year Project)',
    description:
      'Web & mobile application for managing school transport within a school. Tools: Laravel, HTML, CSS, JavaScript, Bootstrap, Flutter, UML, Merise, MySQL.',
    url: '#',
    image: porfolioImage12,
  },
  {
    title: 'Integrated Fisheries Management App (Internship)',
    description:
      'Developed web & mobile applications for managing fisheries activities. Tools: Laravel, HTML, CSS, JavaScript, Flutter, Merise, Scrum, MySQL.',
    url: '#',
    image: porfolioImage13,
  },
  {
    title: 'Absence Management App (Mini Project)',
    description: 'Application for managing absences using QR codes. Tools: UML, Python, PostgreSQL, Docker, Next.js.',
    url: '#',
    image: porfolioImage14,
  },
  {
    title: 'Trainee & Diploma Management System (Introductory Internship)',
    description: 'System for managing trainees and diplomas. Tools: HTML, CSS, JavaScript, PHP, MySQL, Merise.',
    url: '#',
    image: porfolioImage15,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2024 - 2025',
    location: 'National Higher School of Artificial Intelligence and Data Science, Taroudant',
    title: 'First Year, Information Systems Engineering Cycle',
    content: (
      <p>
        Studying information systems engineering, learning advanced concepts in data management, and developing
        efficient IT solutions.
      </p>
    ),
  },
  {
    date: '2022 - 2024',
    location: 'Higher School of Technology, Safi',
    title: 'DUT in Computer Engineering',
    content: <p>Acquired skills in programming, web and mobile development, databases, and IT project management.</p>,
  },
  {
    date: '2021',
    location: 'High School Diploma, Physical Sciences and Chemistry',
    title: 'Baccalaureate in Physical Sciences and Chemistry',
    content: <p>Obtained the baccalaureate with specialization in physical sciences and chemistry.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2025 - September 2025 (Ongoing)',
    location: 'Ocontrol, Casablanca',
    title: 'Internship: After-Sales Service Management Application Development with AI',
    content: (
      <p>
        Developing applications to manage after-sales service, integrating AI. Tools & Technologies: Laravel, React.js,
        React Native, Merise, Scrum, MySQL.
      </p>
    ),
  },
  {
    date: 'November 2024 - December 2024',
    location: '',
    title: 'Mini Project: Absence Management Application using QR Code',
    content: (
      <p>
        Designed and developed an absence management application using QR codes. Tools & Technologies: UML, Python,
        PostgreSQL, Docker, Next.js.
      </p>
    ),
  },
  {
    date: 'April 2024 - June 2024',
    location: 'Agilteem, Casablanca',
    title: 'Technical Internship: Web & Mobile Applications for Integrated Fisheries Management',
    content: (
      <p>
        Developed web and mobile applications for managing fisheries activities. Tools & Technologies: Laravel, HTML,
        CSS, JavaScript, Flutter, Merise, Scrum, MySQL.
      </p>
    ),
  },
  {
    date: 'February 2024 - April 2024',
    location: '',
    title: 'Final Year Project: School Transport Management Web & Mobile Application',
    content: (
      <p>
        Designed and developed a web and mobile application for school transport management. Tools & Technologies:
        Laravel, HTML, CSS, JavaScript, Bootstrap, Flutter, UML, Merise, MySQL.
      </p>
    ),
  },
  {
    date: 'July 2023 - August 2023',
    location:
      "Direction Générale de l'Office de la Formation Professionnelle et de la Promotion du Travail, Casablanca",
    title: 'Introductory Internship: Trainee & Diploma Management System Development',
    content: (
      <p>
        Designed and developed a system for managing trainees and diplomas. Tools & Technologies: HTML, CSS, JavaScript,
        PHP, MySQL, Merise.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Youssef El Amrani',
      text: 'Working with Aya was a pleasure. She delivered high-quality solutions on time and brought creative ideas to the table.',
    },
    {
      name: 'Sara Bouziane',
      text: 'Aya is extremely skilled in web development and always willing to go the extra mile to ensure success.',
    },
    {
      name: 'Hassan Raji',
      text: 'I highly recommend Aya for any project. Her attention to detail and problem-solving skills are exceptional.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I’d love to hear from you! Whether it’s a project idea, a question, or a collaboration, don’t hesitate to get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'aya.moutaib.12@gmail.com',
      href: 'mailto:aya.moutaib.12@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Casablanca, Morocco',
      href: 'https://www.google.ca/maps/place/Casablanca,+Morocco/@33.5731104,-7.5898438,12z',
    },

    {
      type: ContactType.Github,
      text: 'AYAAMB',
      href: 'https://github.com/AYAAMB',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AYAAMB'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aya-moutaib-11985b249/'},
];
