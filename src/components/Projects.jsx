import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../store/projectsSlice";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
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
    content = (
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
