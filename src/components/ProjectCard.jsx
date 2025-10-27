import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import todoImage from "../assets/Photo/to-do-app.png";
import videoImage from "../assets/Photo/video-app.png";
import portofolioImage from "../assets/Photo/portofolio.png";

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 }, // Transisi 'spring'
  },
};

const customDescriptions = {
  "Aplikasi To-Do List":
    "Mengembangkan aplikasi front-end untuk manajemen tugas harian responsif. Dibangun dengan HTML, CSS dan JavaScript murni, berfokus pada manipulasi DOM yang dinamis dan interaktif.",
  "Aplikasi-Video-Belajar":
    "Aplikasi web video belajar interaktif menggunakan React dan Redux Toolkit. Dilengkapi autentikasi pengguna dan dashboard admin dengan fungsionalitas CRUD.",
  "Web-Portofolio":
    "Portofolio pribadi interaktif yang menampilkan proyek, pengalaman, dan keahlian. Dibuat dengan React, Redux untuk state management, dan Framer Motion untuk animasi.",
};

const customTechStacks = {
  "Aplikasi-To-Do-List": ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
  "Aplikasi-Video-Belajar": [
    "React",
    "Redux",
    "Axios",
    "CSS",
    "MockAPI",
    "Local Storage",
  ],

  "Web-Portofolio": [
    "React",
    "Redux Toolkit",
    "Framer Motion",
    "Axios",
    "GitHub API",
  ],
};

const customProjectImages = {
  "Aplikasi-To-Do-List": todoImage,
  "Aplikasi-Video-Belajar": videoImage,
  "Web-Portofolio": portofolioImage,
};

const ProjectCard = ({ project }) => {
  const description =
    customDescriptions[project.name] ||
    project.description ||
    "Mengembangkan aplikasi front-end untuk manajemen tugas harian responsif. Dibangun dengan HTML, CSS dan JavaScript murni, berfokus pada manipulasi DOM yang dinamis dan interaktif.";

  const techStack = customTechStacks[project.name];
  const imageSrc = customProjectImages[project.name];

  return (
    <motion.div
      className="project-card"
      variants={itemVariants}
      whileHover={{
        y: -10,
        borderColor: "var(--primary-color)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        transition: { type: "spring", stiffness: 200 },
      }}
    >
      {imageSrc && (
        <img src={imageSrc} alt={project.name} className="project-card-image" />
      )}
      <div className="project-card-content">
        <h3>{project.name.replaceAll("-", " ")}</h3>
        <p>{description}</p>
        {techStack && techStack.length > 0 && (
          <div className="project-tech-stack">
            <span className="tech-stack-title">Tech Stack:</span>
            {techStack.map((topic) => (
              <span key={topic} className="tech-tag">
                {topic}
              </span>
            ))}
          </div>
        )}
        <div className="project-links">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button-live"
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button-github"
            whileHover={{
              scale: 1.1,
              y: -2,
              color: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
