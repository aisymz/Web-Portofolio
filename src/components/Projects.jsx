import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../store/projectsSlice";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import todoImage from "../assets/Photo/to-do-app.png";
import videoImage from "../assets/Photo/video-app.png";
import portofolioImage from "../assets/Photo/portofolio.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const customDescriptions = {
  "Aplikasi-To-Do-List":
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

const Projects = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Memuat proyek dari GitHub...</p>;
  } else if (status === "succeeded") {
    const sortedItems = [...items].sort((a, b) => {
      const stackA = customTechStacks[a.name] || [];
      const stackB = customTechStacks[b.name] || [];
      return stackB.length - stackA.length;
    });

    content = (
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {sortedItems.map((project) => {
          const description =
            customDescriptions[project.name] ||
            project.description ||
            "Deskripsi default jika tidak ada.";

          const techStack = customTechStacks[project.name];
          const imageSrc = customProjectImages[project.name];
          return (
            <ProjectCard
              key={project.id}
              project={project}
              description={description}
              techStack={techStack}
              imageSrc={imageSrc}
            />
          );
        })}
      </motion.div>
    );
  } else if (status === "failed") {
    content = <p>Gagal mengambil proyek: {error}</p>;
  }

  return (
    <section id="projects" className="section">
      <h2>Notable Projects</h2>
      {content}
    </section>
  );
};

export default Projects;
