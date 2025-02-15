import {
    SiReact,
    SiExpress,
    SiNextdotjs,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Merkez",
        description:
            "Designed and implemented a website for an Islamic school, enabling administrators to post content and oversee user comments, fostering enhanced community engagement and educational communication.",
        technologies: [SiNextdotjs, SiReact, SiMysql, SiTailwindcss],
        techNames: ["nextjs", "React", "MySQL", "Tailwind CSS"],
        techLinks: ["https://laravel.com/", "https://reactjs.org/", "https://www.mysql.com/", "https://tailwindcss.com/"],
        github: "https://github.com/Nuruhussein/almehdi",
        demo: "https://al-mahdi.vercel.app/",
        image: "/projects/merkez.PNG",
        available: true,
    },
    {
        id: 1,
        name: "Pharmax-Shop",
        description:
            "A pharmacy management system for handling sales, purchases, and orders. Features include medicine search, expiration tracking, stock alerts, category filtering, doctor order codes, customer shopping, and Chapa payment integration.",
        technologies: [SiLaravel, SiMysql, SiTailwindcss],
        techNames: ["Laravel", "MySQL", "Tailwind CSS"],
        techLinks: ["https://laravel.com/", "https://www.mysql.com/", "https://tailwindcss.com/"],
        github: "https://github.com/Nuruhussein",
        demo: "#",
        image: "/projects/pharmax2.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Mektebah",
        description:
            "Developed a platform featuring efficient organization, advanced search, and access to diverse books and resources. Enhanced usability with intuitive navigation and robust functionality.",
        technologies: [SiReact, SiLaravel, SiMysql, SiTailwindcss],
        techNames: ["React", "laravel", "mysql", "Tailwind CSS"],
        techLinks: ["https://reactjs.org/", "https://expressjs.com/", "https://www.mongodb.com/", "https://tailwindcss.com/"],
        github: "https://github.com/Nuruhussein",
        demo: "#",
        image: "/projects/mektebah.PNG",
        available: true,
    },
   
];
