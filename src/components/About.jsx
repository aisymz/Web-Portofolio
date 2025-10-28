import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>About Me</motion.h2>
      <div className="about-content">
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            Halo, saya A'isy Muhammad Zain, seorang Fresh Graduate dari
            Universitas Pendidikan Indonesia, Jurusan Pendidikan Geografi (2024)
            yang kini mengalihkan fokus karier ke dunia teknologi. Melalui
            bootcamp intensif Full Stack Developer di Harisenin, saya menemukan
            minat mendalam menjadi Front-End Developer. Saya bersemangat dalam
            membangun antarmuka pengguna (UI) yang responsif, intuitif dan
            fungsional. Berpengalaman dalam mengembangkan aplikasi dari nol
            menggunakan React.js dan mengintegrasikannya dengan sumber data
            melalui REST API.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
